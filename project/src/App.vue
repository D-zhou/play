<template>
  <div id="app" :style="styleobj1">
    <div>
      <div id="btn" @click="flag = !flag">
        <img src="/static/img/button.png" alt="">
      </div>
        <transition>
          <div class="hea " v-if="flag">
            <ul class="imgbox">
              <li v-for="(img,index)  in imgs" :key="img"
               @mouseover="show(img,index)" 
               @mouseout="active"
               @click="sure(img,index)"
               >
                <div :class="myindex===index?'coveract cover':'cover'"   >
                </div>
                <div :class="myact===index?'act active':'act'" >

                </div>
                <img :src="img" >
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
import Header1 from "./components/Header";

export default {
  components: {
    Header1
  },
  data() {
    return {
      hid: false,
      styleobj1: {},
      flag: true,
      myindex: "",
      myact:0,
      img: "../../static/img/0.jpg",
      img2: "../../static/img/0.jpg",
      imgs: [
        "../../static/img/0.jpg",
        "../../static/img/1.jpg",
        "../../static/img/2.jpg",
        "../../static/img/3.jpg",
        "../../static/img/4.jpg",
        "../../static/img/5.jpg"
      ]
    };
  },
  created() {
    this.styleobj1 = { "background-image": "url('" + this.img + "')" };
  },
  methods: {
    show(img1, index) {
      this.img = img1;
      console.log(this.img + index);
      this.myindex = index;
      this.styleobj1 = { "background-image": "url('" + this.img + "')" };
    },
    active() {
      this.styleobj1 = { "background-image": "url('" + this.img2 + "')" };
      this.myindex = "";
    },
    sure(imgdata,index) {
      this.img2 = imgdata;
      this.myact = index;
    }
  },
  watch: {
    img2(newvalue){
      this.styleobj1 = { "background-image": "url('" + newvalue + "')" };
    }
  }
};
</script>

<style   >
body {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bg {
  width: 100%;
  height: 1000px;
}
.hea {
  width: 100%;
  height: 140px;
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
}
#btn {
  position: fixed;
  top: 0px;
  left: 36px;
  z-index: 99;
}

.v-enter,
.v-leave-to {
  opacity: 0.6;
  top: -140px;
}

.v-enter-to,
.v-leave {
  opacity: 0.6;
  top: 0px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}
ul {
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  z-index: 98;
}
li {
  list-style: none;
  float: left;
  width: 160px;
  height: 100px;
  margin-left: 20px;
  position: relative;
}

.imgbox img {
  width: 100%;
  height: 100%;
}
.cover {
  width: 100%;
  height: 100%;
  position: absolute;
}
.coveract{
  background-color: #000;
  opacity: .6;
}
.act{
  width: 35px;
  height: 30px;
  position: absolute;
}
.active{
  background: url("/static/img/tips.png")  108px -1px;
}
</style>
