<template>
  <div id="app">
    <h1>Routing Demo</h1>
    <!-- <h1>{{ msg }}</h1> -->
     
<!-- <app-todo></app-todo> -->

 <!-- <app-demo></app-demo> -->
<!--<app-demo1></app-demo1> -->

<!-- <app-products></app-products> -->

  <app-Menuheader></app-Menuheader>
 <router-view></router-view>

  </div>
</template>

<script>

import demo1Component from './components/demo1.vue';
import headerComponent from './components/header.vue'
export default {
  name: 'app',
  components:{
  appDemo1:demo1Component,
  appMenuheader:headerComponent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
      arr:[
        'xyz','abc','pqr'
      ],
      tasks:[
        {Id:1,Title:"Welcome title 1",Status:"Done"},
        {Id:2,Title:"Welcome title 2",Status:"Done"},
        {Id:3,Title:"Welcome title 3",Status:"Pending"}
        ]
    }
  },
  methods:{
    onAdd(){
      let obj={Id:this.Id,Title:this.Title,Status:this.Status};
      this.tasks.push(obj);
    },
    onEdit(item){
      
      if(item.Status=='Done')
      {
         item.Status='Pending';
        
      }
      else
      {
         item.Status='Done' 
      }

    },
    onDelete(item){
      this.tasks.splice(this.tasks.indexOf(item),1);
    }
  }
}
</script>

<style lang="scss">
.red{
  color:red;
}
.blue{
  color:blue;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>










<!-- <ul>
     <li v-for="x in arr">{{x}}</li>
     </ul> -->
   <!-- <div v-hightlight>{{msg}}</div> -->
    <!-- </br> -->
    <!-- <div v-hightlight_1:background="'blue'">{{msg}}</div> -->

    <!-- </br> -->
    <!-- <div v-hightlight_1="'blue'">{{msg}}</div> -->
    <!-- </br> -->
 
     <!-- <button @click="onAdd()">Add tasks</button> -->
<!--
<table class="table">
<th></th>
<th></th>
<th></th>
 
<tr v-for="item in tasks">
  <td>{{item.Id}}</td>
  <td>{{item.Title}}</td>
  <td :class="{red:item.Status=='Done',blue:item.Status=='Pending'}">{{item.Status}}</td>
   
  <td>

  <button @click="onDelete(item)" type="button" class="btn btn-default">
      Delete
  </button>
  
  <button @click="onEdit(item)" type="button" class="btn btn-default">
     Edit
  </button>
  
  </td>
</tr> 




</table>-->