console.log('Vue ready', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    newMessage: "",
    currentContact: 0,
    user: {
      name: 'Maddalena',
      avatar: '_io',
    },
    contacts,
  },
  methods: {
    setCurrentContact(index){
      this.currentContact=index;
    },
    getLastSeen(){
      const messages = this.contacts[this.currentContact].messages;
      const lastMessage = messages[messages.length - 1];
      return lastMessage.date;
    },
  },
});
