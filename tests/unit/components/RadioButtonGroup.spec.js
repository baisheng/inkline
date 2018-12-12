import { mount } from '@vue/test-utils';
import RadioButtonGroup from 'inkline/components/RadioButtonGroup';

describe('Components', () => {
    describe('RadioButtonGroup', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(RadioButtonGroup);
        });

        test('should render correctly', () => {
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
});
