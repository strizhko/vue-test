  /*примесь*/
export const checkInp = {
  data () {
    return {
      
    }
  },

  methods: {  
    checkFields: function(item) {     /*проверяет на пустой ввод ФИО, лог, пасс, подтвердить пасс, и password === confirmPassword. Возвращает тру если все ОК и фолс в любом другом случае */
        if ( item.name && item.soname && item.age && item.login && item.password && item.confirmPassword ) {
          if ( item.password === item.confirmPassword ) {
            return true
          }
          else {
            alert('Пароли не совпадают')
            return false
          }
        } 
        else {
          alert ('Заполнены не все поля')
          return false
        }
      },
    
  }
}