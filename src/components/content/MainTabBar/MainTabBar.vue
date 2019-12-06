<template>
  <tab-bar>
    <tab-bar-item path="home"  activeColor="red">
      <img slot="item-icon" src="~assets/image/tabBar/home_before.svg" alt="">
      <img slot="item-icon-active" src="~assets/image/tabBar/home.svg" alt="">
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="category">
      <img slot="item-icon" src="~assets/image/tabBar/classify_before.svg" alt="">
      <img slot="item-icon-active" src="~assets/image/tabBar/classify.svg" alt="">
      <span slot="item-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="cart">
      <img slot="item-icon" src="~assets/image/tabBar/shoping_car_before.svg" alt="">
      <img slot="item-icon-active" src="~assets/image/tabBar/shoping_car.svg" alt="">
      <span slot="item-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="profile">
      <img slot="item-icon" src="~assets/image/tabBar/mine_before.svg" alt="">
      <img slot="item-icon-active" src="~assets/image/tabBar/mine.svg" alt="">
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    },
  }
</script>

<style scoped>

</style>
