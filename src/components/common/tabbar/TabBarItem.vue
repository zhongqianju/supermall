<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!IsActive">
      <slot name="item-icon"/></div>
    <div v-else>
      <slot name="item-icon-active"/></div>
    <div :style="activeStyle">
      <slot name="item-text"/></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      /*路由地址，点击后的颜色*/
      path:String,
      activeColor:{
        type:String,
        default:'#dbdbdb'
      },
    },
    data(){
      return{
        //IsActive:false,
      }
    },
    computed:{
      /**
       * @return {boolean}
       */
      IsActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
        return this.IsActive ? {color:this.activeColor} : {}
      },
    },
    methods:{
      itemClick(){
        if(this.$route.path.indexOf(this.path) === -1){
          this.$router.replace(this.path)  /*--不能返回--*/
          //this.$router.push('')
        }
      },
    },
  }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    height: 49px;
    color: #515151;
    text-align: center;
  }
  .tab-bar-item img{
    margin-top: 3px;
    margin-bottom: 2px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>
