import IContainer from '../Container';
import IRow from '../Row';
import IColumn from '../Column';
import IHamburgerMenu from '../HamburgerMenu';

import AttributesProviderMixin from '@inkline/inkline/src/mixins/components/providers/AttributesProviderMixin';
import ClassesProviderMixin from '@inkline/inkline/src/mixins/components/providers/ClassesProviderMixin';
import CollapsibleProviderMixin from '@inkline/inkline/src/mixins/components/providers/CollapsibleProviderMixin';

import ClickOutside from '@inkline/inkline/src/directives/click-outside';

import SizePropertyMixin from '@inkline/inkline/src/mixins/components/properties/SizePropertyMixin';
import VariantPropertyMixin from '@inkline/inkline/src/mixins/components/properties/VariantPropertyMixin';


export default {
    name: 'INavbar',
    mixins: [
        AttributesProviderMixin,
        ClassesProviderMixin,
        CollapsibleProviderMixin,

        SizePropertyMixin,
        VariantPropertyMixin
    ],
    components: {
        IContainer,
        IRow,
        IColumn,
        IHamburgerMenu
    },
    directives: {
        ClickOutside
    },
    props: {
        collapseOnClick: {
            type: Boolean,
            default: true
        },
        collapseOnClickOutside: {
            type: Boolean,
            default: true
        },
        fluid: {
            type: Boolean,
            default: false
        },
        toggleAnimation: {
            type: String,
            default: 'close'
        }
    },
    methods: {
        onClickItem() {
            if (this.collapseOnClick && this.collapsed) {
                this.setCollapse(false);
            }
        },
        onClickOutside() {
            if (this.collapseOnClickOutside && this.collapsed) {
                this.setCollapse(false);
            }
        }
    },
    created() {
        this.$on('item-click', this.onClickItem);
    },
    beforeDestroy() {
        this.$off('item-click', this.onClickItem);
    }
};
