Vue.component('card-item',{
  template:`
           <a href="article.html" target="_blank" rel="noopener noreferrer" class="card text-center m-3 carditem" style="max-width:235px; "  >
            <div class="card-body">
              <img class="card-img-top card-img1" src="asset/img/card_img.jpg" alt="Card image cap">
              <time style="font-size:10px; color:#999;">2019-04-16 11:30:00</time>
              <h3 class="card-title">為什麼厄瓜多不再庇護阿桑奇？</h3>
              <p class="card-text">
                七年前，《維基解密》的創辦人阿桑奇進入厄瓜多駐英國大使館尋求政治庇護；七年後，厄瓜多大使館忍無可忍結束了對他的庇護，在 11號這天讓英國警方進入逮捕了阿桑奇。究竟，為什麼厄瓜多不再庇護阿桑奇？ 
              </p>
            </div>
            <div class="card-footer text-muted bg-white">
              <ul class="d-flex flex-row bg-white">
                <li><i class="far fa-eye mt-2">2019</i></li>
                <li><i class="fab fa-facebook-square cardicon"></i></li>
                <li><i class="fab fa-twitter-square cardicon"></li>
                <li><i class="fas fa-heart cardicon"></i></li>
              </ul>  
            </div>
          </a>`
})
Vue.component('card-item2',{
  template:`<div class="card text-center m-3 carditem" style="max-width:235px; overflow: hidden;" >
            <div class="card-body">
              <img class="card-img-top card-img1" src="asset/img/card_img2.jpg" alt="Card image cap">
              <time style="font-size:10px; color:#999;">2019-04-12 11:20:00</time>
              <h3 class="card-title">不管中學畢業會考 波蘭教師無限期罷工抗議低薪</h3>
              <p class="card-text">
               上周一開始，數十萬名波蘭教師不顧教育部反對、不管中學會考近在眼前，堅持罷工抗議低薪與長期未改善的課綱品質，受影響的學生們沒課可上，也乾脆加入了支持教師抗議的行列。 
              </p>
            </div>
            <div class="card-footer text-muted bg-white">
              <ul class="d-flex flex-row bg-white">
                <li><i class="far fa-eye mt-2">2019</i></li>
                <li><i class="fab fa-facebook-square cardicon"></i></li>
                <li><i class="fab fa-twitter-square cardicon"></li>
                <li><i class="fas fa-heart cardicon"></i></li>
              </ul>  
            </div>
          </div>`
})
var app = new Vue({
      el: '#app',
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
          },
        test:function(){
          alert("aaa")
        }
      }
      })

