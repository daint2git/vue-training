import MyButton from './index.vue';

export default {
  title: 'my-button',
  component: MyButton,
};

export const withDefault = () => ({
  components: { MyButton },
  template: '<my-button></my-button>',
});

export const withText = () => ({
  components: { MyButton },
  template: '<my-button>, with text</my-button>',
});

export const withEmoji = () => ({
  components: { MyButton },
  template: '<my-button>😎</my-button>',
});

export const withColor = () => ({
  components: { MyButton },
  template: `
  <div>
    <my-button color="red"></my-button>
    <br>
    <my-button color="green"></my-button>
    <br>
    <my-button color="blue"></my-button>
  </div>
  `,
});

/**
 * Đừng quan tâm phần này
 */
const injectedProperties = components => template => ({ components, template });
const injectTemplate = injectedProperties({ MyButton });

export const withXXX = () => injectTemplate('<my-button>XXX</my-button>');
export const withYYY = () => injectTemplate('<my-button>YYY</my-button>');
