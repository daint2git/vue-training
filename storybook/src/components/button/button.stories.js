import CustomButton from './index.vue';

export default {
  title: 'CustomButton',
  component: CustomButton,
};

export const withDefault = () => ({
  components: { CustomButton },
  template: '<custom-button></custom-button>',
});

export const withText = () => ({
  render: h => <CustomButton>with text</CustomButton>,
});
