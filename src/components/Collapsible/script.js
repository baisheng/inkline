import AttributesProviderMixin from 'inkline/mixins/components/providers/AttributesProviderMixin';
import ClassesProviderMixin from 'inkline/mixins/components/providers/ClassesProviderMixin';

import VariantPropertyMixin from 'inkline/mixins/components/properties/VariantPropertyMixin';

export default {
    name: 'ICollapsible',
    mixins: [
        AttributesProviderMixin,
        ClassesProviderMixin,

        VariantPropertyMixin
    ],
    props: {
        accordion: {
            type: Boolean,
            default: false
        },
        active: {
            type: [Array, String, Number],
            default () {
                return [];
            }
        },
        iconClosed: {
            type: String,
            default: ''
        },
        iconOpen: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            activeItems: [].concat(this.active)
        };
    },
    provide() {
        return {
            collapsible: this
        };
    },
    watch: {
        active (value) {
            this.activeItems = [].concat(value);
        }
    },
    methods: {
        onItemClick(item) {
            if (this.accordion) {
                return this.activeItems = this.activeItems.indexOf(item.id) > -1 ? [] : [item.id];
            }

            let index = this.activeItems.indexOf(item.id);

            if (index > -1) {
                this.activeItems.splice(index, 1);
            } else {
                this.activeItems.push(item.id);
            }
        }
    },
    created() {
        this.$on('item-click', this.onItemClick);
    }
};