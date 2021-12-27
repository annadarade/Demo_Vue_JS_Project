<template>
    <div>
        <h1>{{msg}}</h1>
        <button class="btn btn-primary" @click="fetchProducts()">GetProducts</button> 
    </div>
</template>

// <script>
//   export default{
//   data(){
//          return {
//          msg:'Hello Friends from todo',
//          arr:[]
//          }
//         },
//         methods: {
//             fetchTodos(){
//                 this.$http.get('https://gorest.co.in/public/v1/users/123')
//                 .then(response=>{
//                     alert(response.json());
//                             console.log(response.json());
//                             return response.json();
//                         })

//             }
//         },
//    }
// </script>




<script>
export default {
data(){
  return {
    msg:'Hello Friends from todo',
    arr:[],
    model:{
      Id:'',
      Title:'',
      Status:'pending'
    }
  }
},
methods:{
  onDelete(item){
    this.$http.delete(item.Id).then(respone=>{
      console.log(respone);
      this.arr.splice(this.arr.indexOf(item),1);
    },
    error=>{
      console.log(error);
    });
  },
  addProduct(){
    this.$http.post('',this.model)
    .then( respone=>{
      console.log(respone);
      this.arr.push(this.model);
   },
            error=>{
              console.log(error);
            }
        );
  },
  fetchProducts(){
    // this.$http.get('https://gorest.co.in/public/v1/users/4')
    // .then(response=>{
        
    //   console.log(response.json());
    //   return response.json();
    // })
    // .then(data=>{
    //   this.arr=data;
    // });
  }
},
beforeMount(){
  this.fetchProducts()
}
}
</script>



<style>


</style>