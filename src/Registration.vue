<template>
 <div id='registration'>
  <label>Имя <input type="text" v-model='user.name' autofocus='true'></label><br>
  <label>Фамилия <input type="text" v-model='user.soname'></label><br>
  <label>Возраст <input type="text" v-model='user.age'></label><br>
  <label>Логин <input type="text" v-model='user.login'></label><br>
  <label>Пароль <input type="text" v-model='user.password'></label><br>
  <label>Подтвердить пароль <input type="text" v-model='user.confirmPassword'></label><br>
  <button @click='registrate'>Зарегистрироваться</button><br>
  <button @click='sayMsg'>Test mixin</button><br>
</div>
</template>


<script>
  
  export default {
    name: 'newUser',
    data () {
      return {
        user: { 
          id: null,
          name: '123',
          soname: '123',
          age: 12,
          login: '123',
          password: '123',
          confirmPassword: '123'
        }
      }
    },
    
    methods: {
      registrate: function() {
        /*зарегистрировать: если поля введены корректно(проверка примесью), создает ид , добавляет юзера(мутация) и перебрасывает на стр логина*/
        if (this.checkFields(this.user) == true) {
          this.setUserId()
          this.$store.dispatch('addUser', this.user)
          this.$router.push('/')
        }
      },
      
      setUserId: function () {
        /*создает ид пользователя(номер в массиве)*/
        this.user.id = this.$store.getters.countOfUsers + 1
      }
    }
  }
  
</script>
