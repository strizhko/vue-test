<template>
  <div id="profile">
    <router-link to='/'><button>выход</button></router-link>
    <div v-if='!this.$store.state.usingId'  id="err"> 
     <!--Если потерялся ид при обновлении страницы или не кореектном переходе-->
      err: out of session
    </div>
    <div v-else-if='editProphile' id='editProphile'> 
     <!--Выводится, если значегие editProphile тру -->
      <label>Имя <input type="text" v-model='editedUser.name'></label><br>
      <label>Фамилия <input type="text" v-model='editedUser.soname'></label><br>
      <label>Возраст <input type="text" v-model='editedUser.age'></label><br>
      <label>Логин <input type="text" v-model='editedUser.login'></label><br>
      <label>Старый пароль <input type="password" v-model='editedUser.oldPassword'></label><br>
      <label>Новый пароль <input type="password" v-model='editedUser.password'></label><br>
      <label>Подтвердить пароль <input type="password" v-model='editedUser.confirmPassword'></label><br>
      <button @click='this.saveChanges'>Сохранить изменения</button>  
    </div>
    <div v-else>
    <!--Если не требуется регистрация и есть ид-->
      <h1>Welcome {{ this.user.name | capitalize }}!</h1>     
      <div id="info">
        Имя: {{ this.user.name | capitalize }} <br>
        Фамилия: {{ this.user.soname | capitalize }} <br>
        Возраст: {{ this.user.age }} <br>
        Логин: {{ this.user.login }} <br>
        <button @click='activateEdit'>Редактировать</button>
      </div>    
    </div>
    <button @click='sayMsg'>Test mixin</button><br>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'this is new message for minix from Prophile.vue', /*Тест примесей*/
        editProphile: false   /*флаг на редактирование профиля*/             
      }
    },
    computed: {
      user: function () {
        return this.$store.getters.activeUser /*Получение используемого пользователя*/
      },
      editedUser: function () {
                    return{ /*Данные длля редакироания пользователя*/
                      name: this.user.name,
                      soname: this.user.soname,
                      age: this.user.age,
                      login: this.user.login,
                      oldPassword: '',
                      password: '',
                      confirmPassword: ''
                    } 
                  }
    },
    
    methods: {
      saveChanges: function () { 
        /*Сохранение изменений: Если поля заполнены(проверка примесью) и старый пароль совпадает с имеющимся вызов мутации на изменение профиля и переброс на стр логина*/
        if ( this.checkFields(this.editedUser) ) {
          if ( this.editedUser.oldPassword == this.user.password ) {
            this.$store.dispatch('updateUser', this.editedUser)
            this.$router.push('/')
          }
          else {
            alert("Старый пароль введен не верно")
          }
        }
      },
      activateEdit: function() { /*Смена флага на редактирование*/
        this.editProphile=!this.editProphile
      }
    },
    
    filters: { /*первая буква заглавная*/
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
  
</script>