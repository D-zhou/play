<template>
  <div>
    <div id="btn" @click="flag = !flag">
      <img src="../assets/button.png" alt="">
      </div>

      <transition>
        <div class="hea " v-if="flag">
          <ul class="imgbox">
            <!-- <li><img :src="img" alt=""></li> -->
            <li v-for="img  in imgs" :key="img" @mouseover="toggle(img)" >
              <img :src="img" >
            </li>
          </ul>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  data: () => ({
    flag: true,
    img: "../../static/img/0.jpg",
    imgs: [
      "../../static/img/0.jpg",
      "../../static/img/1.jpg",
      "../../static/img/2.jpg",
      "../../static/img/3.jpg",
      "../../static/img/4.jpg",
      "../../static/img/5.jpg"
    ]
  }),
  methods: {
    toggle(img1) {
      this.img = img1;
      console.log(this.img + 111);
      this.$emit("sonshow",this.img)
    }
  },
  created() {
    // this.$emit("sonshow", this.img);
  }
};
</script>

<style  scoped>
.hea {
  width: 100%;
  height: 140px;
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0px;
  display: flex;
  text-align: center;
  flex-direction: column;
  /* top: -140px; */
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
  opacity: 0.5;
  top: -140px;
}

.v-enter-to,
.v-leave {
  opacity: 0.5;
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
  background-color: red;
  width: 160px;
  height: 100px;
  margin-left: 20px;
}

.imgbox img {
  width: 100%;
  height: 100%;
}
</style>