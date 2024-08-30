<script setup>

import Instagram from '@/components/Instagram.vue'
import {reactive} from 'vue'
const postArray = reactive([])

fetch('https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post')
.then(response => {
  return response.json()
})
.then(feed => {
  postArray.push(...feed)
}
)


</script>



<template>



<div class="insta">
<Instagram  v-for="post in postArray"  :postInfo="post"></Instagram>
</div>





</template>



<style scoped>



.insta{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

</style>