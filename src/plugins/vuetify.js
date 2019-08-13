import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#FACB11',
        secondary: '#E3A005',
        accent: '#FBFD05',
        error: '#FF0000',
        info: '#E3CD05',
        success: '#00C800',
        warning: '#E03423',
      },
    },
  },
});
