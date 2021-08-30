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
    sendMessage(){
      if (!this.newMessage) return;
      const newMessage = {
        status: "sent",
        message: this.newMessage,
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
      };
      this.contacts[this.currentContact].messages.push(newMessage);
      this.newMessage = "";
      setTimeout(() => {
        const answerMessage = {
          status: "received",
          message: "ok",
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        };
        this.contacts[this.currentContact].messages.push(answerMessage);
      }, 1000);
    }
  },
});
