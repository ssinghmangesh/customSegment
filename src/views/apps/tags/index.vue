<template>
<!-- eslint-disable -->
    <b-card>
        <div class="d-flex justify-content-between">
            <p class="h4">{{ type.charAt(0).toUpperCase() + type.slice(1) }} Tags</p>
            <b-button
                variant="primary"
                @click="$bvModal.show('tag-modal')"
            >
                Add Rule
            </b-button>
        </div>
        <add-tag
            :tag="tag"
            @update="update"
        />
        <app-collapse accordion>
            <app-collapse-item
                v-for="(tag, index) in tags"
                :key="index"
                :title="tag.rule_name"
            >
                <div class="d-flex justify-content-end">
                    <b-button
                        class="mr-1"
                        variant="primary"
                        @click="() => editTag(tag)"
                    >
                        Edit
                    </b-button>
                    <b-button
                        variant="danger"
                        @click="() => deleteTag(tag.tag_id)"
                    >
                        Delete
                    </b-button>
                </div>
                <tag :tag="tag" />
            </app-collapse-item>
            
        </app-collapse>
    </b-card>
</template>

<script>
/* eslint-disable */
import { BCard, BButton, } from 'bootstrap-vue';
import AddTag from './AddTag.vue'
import Tag from './Tag.vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
    components: {
        BCard,
        BButton,
        AddTag,
        AppCollapse,
        AppCollapseItem,
        Tag,
    },
    data() {
        return {
            tags: [],
            tag: {},
        }
    },
    computed: {
        type() {
            return this.$route.params.type
        }
    },
    watch: {
        type() {
            this.update();
        }
    },
    created() {
        this.update();
    },
    methods: {
        async update() {
            const res = await this.$http.post('tag-manager/get', { type: this.type })
            this.tags = res.data.tags
        },
        async deleteTag(val) {
            await this.$http.post('tag-manager/delete', { tag_id: val })
            this.update()
        },
        async editTag(val) {
            this.tag = { ...val }
        }
    }
}
</script>
