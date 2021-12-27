<template>

<div>
  <h1>{{msg | Upper}}</h1>
</div>

</template> 

<script>

export default{
data(){
         return {
         msg:'hello Friends from demo file'
         }
    },
    filters:{
    Upper(value){
        return value.toUpperCase();
    }

    }
}
</script>