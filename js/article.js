

var article = new Vue({
  el: '#article',
  data(){
    return{
      isclosed:false,
      msg:'hello vue',
      closedstyle:{
        display:'none'
      },
      mainstyle:{
        'padding-left':'250px'
      },
      card:{
        'max-width':'235px'
      },
      easy:{
        a:'文章標題',
        b:'搜尋文章',
        c:'地球24小時',
        d:'地球商號',
        e:'合作夥伴',
        f:'會員登入',
        g:'我的收藏',
        h:'facebook 粉絲團',
        i:' Google + 專頁',
        j:'LINE@生活圈',
        k:'關於地球圖輯隊',
        l:'使用說明',
      }
    }
  },
  methods:{
    simple:function () {
      this.isclosed = !this.isclosed;
      this.closedstyle.display = 'block';
      this.mainstyle["padding-left"]=="250px"
        ?this.mainstyle["padding-left"] = "0" 
        :this.mainstyle["padding-left"]="250px"
      this.card["max-width"] =="235px"
        ?this.card["max-width"] = "280px"
        :this.card["max-width"] = "235px"
      } 
  }
  })
