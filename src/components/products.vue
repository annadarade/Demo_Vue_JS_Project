<template>

<div>
     <div><app-sidebar :category="'watch'" @SearchClick="onSearchClick($event)" ></app-sidebar></div>
    <h1>Product List</h1>
<h1>{{msg}}</h1>
<input type="text" v-model="id"/>
<button class="btn btn-primary" @click="onProductDetails()">Product Details </button>
</div>
</template>

<script>
export default{
data(){
         return {
         msg:'hello Friends from Product',
         id:10
         }
    },
    methods: {
        onSearchClick(value){
            console.log(value);
            
        },
        onProductDetails(){
            this.$router.push({path:`/productdetails/${this.id}`});
        }
    },
}
</script>

<style>


</style>
