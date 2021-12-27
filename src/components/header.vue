<template>
    <div>
   <ul class="nav nav-pills">
       
         <router-link exact active-class="active" tag="li" to="/">
        <a>Home</a> 
         </router-link>
        
        <router-link active-class="active" tag="li" to="/products">
         <a>Products</a> 
         </router-link>

         <router-link active-class="active" tag="li" to="/productdetails">
         <a>Product Details</a> 
         </router-link>

         <router-link active-class="active" tag="li" to="/contact">
         <a>Contact us</a> 
         </router-link>
       
   </ul>

    </div>

</template>

<script>
export default{

}
</script>
<style>

</style>