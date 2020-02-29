import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    theme:{
      primary: '#A617E2FF',
      success: '#3cd1c2',
      info: '#ffaa2c',
      error: '#f83e70'
    }
  },
});
