<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import {request} from "./network/request";
  var params = new URLSearchParams();
  params.append('app', 'weather.future');       //你要传给后台的参数值 key/value
  params.append('weaid', 1);
  params.append('appkey', 10003);
  params.append('sign','b59bc3ef6191eb9f747dd4e83c99f2a4');
  params.append('format', 'json');

  request({
    method:'POST',
    url:'/',
    data:params
  }).then(res => {
    console.log(res);
  }).catch(err =>{
    console.log(err);
  })
</script>
<style>
  @import "./assets/css/base.css";
</style>
