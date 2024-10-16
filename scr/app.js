const MyNameApp = {
    data() {
      return {
        name:"", //*usando o metodo com o input 
        idade: 20,
        input_name:" " //* Usando o método com o data binding   
        }
    },
    methods:{
        submitForm(e){

            e.preventDefault();

            console.log(this.input_name);

            this.name = this.input_name;
        }

    }
}
Vue.createApp(MyNameApp).mount("#app");