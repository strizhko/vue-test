<template>
    <div id='login'>
        <input type="text" v-model="inpLogin" autofocus='true'>
        <input type="password" v-model="inpPassword">
        <button @click="logining">Войти</button>        
        <router-link to='/registration'><button>Зарегистрироваться</button></router-link><br>
        <button @click='sayMsg'>Test mixin</button>
        <app-footer>слоты работают</app-footer>
    </div>
</template>


<script> 
import Footer from './Footer.vue'
  
export default{
  
  name: 'logpass',     
  data () {
    return{
      inpLogin: '',
      inpPassword: ''
    }  
  },
  
  components: {
    'AppFooter': Footer
  },
    
  methods:{
    logining: function (inpLogin, inpPassword) {  
      /*логирование: на вход: длгин, пароль. проверяет правильность данных, устанавливает глобальное значение используемгог ид*/
      if (this.checkInput() || this.checkLogPass() ) {
        this.$store.dispatch('setUsingId', this.getUserId() )
        this.$router.push({path: '/Prophile/' + this.$store.state.usingId})
      }
    },
    checkInput: function () {
//      проверка ввода: возвращает тру если поля не пустые иначе фолс
      if(this.inpLogin != '' && this.inpPassword != ''){
        return true
      }
      else { 
        alert('Empty login or password!') 
        return false
      }
    },
    checkLogPass: function () {
     /*проверяет есть ли такой логин в store, если есть проверяет и пароль*/ 
      for (let usr in this.$store.state.users){
        if ( usr[login] == this.inpLogin )
          {
            if (usr[password] == this.inpPassword)
              return true
          }        
      }
      return false
    },
    getUserId: function () {
      /*находит по логину в storе ид и возвращает его*/
      for (let i = 0; i < this.$store.getters.countOfUsers; i++) {
        if ( this.$store.state.users[i].login == this.inpLogin ) {
          return this.$store.state.users[i].id
        }
      }
    }
  }
}
</script>