<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultiData} from "network/home.js";

  export default {
    name: "home",
    components:{
      NavBar
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created(){
      getHomeMultiData().then(res =>{
        this.banners = res.data.banner;
        this.recommends = res.data.recommend;
      })
    }
  }
</script>

<style scoped>

</style>
