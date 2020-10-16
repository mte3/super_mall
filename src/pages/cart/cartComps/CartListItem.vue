<template>
<div>
  {{good}}
</div>
</template>

<script>
    export default {
        name: "CartListItem",
      props:{
          good:{
            type:Object,
            default(){
              return {}
            }
          }
      }
    }
</script>

<style scoped>

</style>
