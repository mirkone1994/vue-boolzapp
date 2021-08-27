console.log('Vue ready', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    user: {
      name: 'Nome Utente',
      avatar: '_io',
    },
  },
  methods: {},
});
