<template>
  <swiper>
    <swiper-item v-for="(item,i) in banners" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper,SwiperItem} from 'components/common/swiper';

  export default {
    name: "MainSwiper",
    props:{
      banners:Array,
      default () {
        return []
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods :{
      imageLoad(){
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
