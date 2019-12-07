<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultiData} from "network/home";
  import HomeSwiper from "./childComponents/HomeSwiper";

  export default {
    name: "home",
    components:{
      NavBar,
      HomeSwiper
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created(){
      getHomeMultiData().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>

</style>
