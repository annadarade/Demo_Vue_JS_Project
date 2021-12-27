<template>
<div class="row">
<h1>{{category}}</h1>
<div class="input-group input-group-lg">
<span class="input-group-addon glyphicon-search"></span>
<label>Search : </label>
<input v-model="SearchTerm" type="text" placeholder="Search Product Name"/>
<br>
<button type="button" @click="onSearch()" class="btn btn-primary">Search</button>

</div>

</div>
</template>


<script>
export default{
data(){
         return {
             SearchTerm:''
         }
    },
props :['category'],
methods: {
  onSearch(){
      this.$emit('SearchClick',this.SearchTerm);
  }  
},
}
</script>
