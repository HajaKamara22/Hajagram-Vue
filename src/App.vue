<script setup>






</script>

<template>
  <body>
    <div class="insta">

    <RouterLink to="/">
    <img href="http://localhost:5183/" src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Vue-Instagram/src/assets/insta.jpeg" alt="">
  </RouterLink>
  
   
  </div>
  </body>

  <RouterLink to="/feeds" class="newPost">New Post</RouterLink>

 <router-view/>

</template>

<style scoped>

.insta{
  display: flex;
  flex-direction: column;
 align-items: center;
 justify-content: center;
}


.newPost{
  color: rgb(0, 174, 255);
  font-size: 25px;
  /* display: flex; */
  margin-left: 1300px;
  /* justify-content: end; */
  text-decoration: underline;
}

</style>
