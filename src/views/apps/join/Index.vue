<template>
<!-- eslint-disable -->
    <b-card>
        <p>You have been invited to join <strong>{{ data.shopName}}</strong>. Do you want to proceed?</p>
        <div>
            <b-button
              class="mr-1"
              variant="danger"
              :disabled="loading"
              @click="cancel"
            >
                <b-spinner
                v-if="loading === 'cancel'"
                small
              />
              <span v-else>Cancel</span>
            </b-button>
            <b-button
              variant="success"
              :disabled="loading"
              @click="join"
            >
                <b-spinner
                v-if="loading === 'join'"
                small
              />
              <span v-else>Join</span>
            </b-button>
        </div>
    </b-card>
</template>

<script>
/* eslint-disable */
import { BCard, BButton, BSpinner } from 'bootstrap-vue'

export default {
    components: {
        BCard,
        BButton,
        BSpinner,
    },
    data() {
        return {
            data: {},
            loading: false,
        }
    },
    async created() {
        const res = await this.$http.post('/user-manager/decrypt', {
            code: decodeURIComponent(this.$route.query.code)
        })
        this.data = { ...res.data }
        if(!this.data.userExists){
            this.$router.replace('/register')
        }
    },
    methods: {
        async join() {
            this.loading = 'join'
            await this.$http.post('/user-manager/user-to-workspace/activate', {
                userId: this.data.userId,
                workspaceId: this.data.workspaceId
            })
            this.loading = false;
            this.$router.replace('/login')
        },
        async cancel() {
            this.loading = 'cancel'
            await this.$http.post('/user-manager/user-to-workspace/delete', {
                userId: this.data.userId,
                workspaceId: this.data.workspaceId
            })
            this.loading = false;
            this.$router.replace('/login')
        }
    }
}
</script>