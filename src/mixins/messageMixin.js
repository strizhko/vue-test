export const saySome = {
  data () {
    return {
      msg: 'hello from mixin'
    }
  },
  
  methods: {
    sayMsg: function () {
      alert(this.msg)
    }
  }
}