import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*Глобальное хранилище*/
const store = new Vuex.Store({
  state: {
    users:[
        {id: 1, name: "Вася", soname: "Скоробогатько", age: 20, login: "123", password: "123"},
        {id: 2, name: "Петя", soname: "Сбруев", age: 27, login: "1234", password: "123"}
        ],
    usingId: null /*ИД залогированного пользователя*/
  },
  
  mutations: {
    add (state, item) { /*Добавление юзера в массив*/
      state.users.push(item);
    },
    setId (state, item) { /*Уствновить ИД пользователя, который залогинился*/
      state.usingId = item;
    },
    updUsr (state, newUser) { /*Обновление данных пользователя*/
      state.users[state.usingId].name = newUser.name
      state.users[state.usingId].soname = newUser.soname
      state.users[state.usingId].login = newUser.login
      state.users[state.usingId].age = newUser.age
      state.users[state.usingId].password = newUser.password
    }
  },
  
  actions: {
    addUser( {commit}, item ) {
      commit('add', item);
    },
    setUsingId( {commit}, item ) {
      commit('setId', item)
    },
    updateUser( {commit}, item) {
      commit('updUsr', item)
    }
  },
  
  getters: {
    countOfUsers: state => { /*Возвращает кол-во пользователей*/
      return state.users.length 
      },
    activeUser: (state, getters) => {/* Возвращает объект залогированного пользователя*/
      for (let i=0; i<getters.countOfUsers; i++)
        {
          if (state.users[i].id == state.usingId )
            return state.users[i]
        }
    }
  }
})

export default store