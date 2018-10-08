<template>
<!-- 周树平 -->
  <div class="app">
    <img class="btn" @click="toggle" src="./assets/button.png" alt="">
    <transition>
      <div id="components">
        <router-link class="pic-back" v-for="(item,i) in msg.srcs" :key="i" :to="msg.components[i]" @mouseover.native="enter(i)" @mouseleave.native="leave()">
          <span :class="{'active':i==index}"></span>
          <img class="pic" :src="item" alt=""/>
          <div @click="right(i)" class="bgk"></div>
        </router-link>
      </div>
    </transition>
    <router-view id="app" class="component"></router-view>
  </div>
</template>

<script>
export default {
  data: () => ({
    index: 0,
    flag: true,
    msg: {
      srcs: [
        require("./assets/1.jpg"),
        require("./assets/2.jpg"),
        require("./assets/3.jpg"),
        require("./assets/4.jpg"),
        require("./assets/5.jpg"),
        require("./assets/6.jpg")
      ],
      components: ["/first", "/second", "/third", "/fourth", "/fifth", "/sixth"]
    }
  }),
  methods: {
    toggle() {
      if (this.flag) {
        document.getElementById("components").style.top = 0;
        document.getElementById("components").style.transition = "all .5s ease";
        this.flag = false;
      } else {
        document.getElementById("components").style.top = "-140px";
        document.getElementById("components").style.transition = "all .5s ease";
        this.flag = true;
      }
    },
    right(index) {
      this.index = index;
    },
    enter(index) {
      document.getElementById("app").style.backgroundImage =
        "url(" + this.msg.srcs[index] + ")";
    },
    leave() {
      document.getElementById("app").style.backgroundImage = "";
    }
  }
};
</script>

<style  scoped>
.app {
  width: 100%;
  height: 100%;
}
.btn {
  position: absolute;
  top: 0;
  left: 40px;
  z-index: 999;
}

#components {
  width: 100%;
  height: 140px;
  position: absolute;
  top: -140px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  vertical-align: baseline;
}

.pic-back {
  position: relative;
  display: inline-block;
  width: 160px;
  height: 100px;
  margin: 20px 10px 0;
}
.pic {
  width: 160px;
  height: 100px;
}

.component {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.bgk {
  position: absolute;
  top:0;
  left:0;
  width: 160px;
  height: 100px;
  background-color:rgba(0, 0, 0, 0.6);
  display:none;
}
.pic-back:hover .bgk{
  display: block;
}
.active {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 35px;
  height: 35px;
  background: url("../static/img/tips.png") no-repeat -92px -2px;
}

</style>