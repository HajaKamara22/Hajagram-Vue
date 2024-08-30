<script setup>

import { ref } from 'vue';


const props = defineProps(['postInfo']); 


const liked = ref(false);


function whenLiked() {
  liked.value = !liked.value; 

                                
  const newLikeCount = liked.value ? props.postInfo.likes + 1 : props.postInfo.likes - 1;

  // Send PUT request to update likes
  fetch(`https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post/${props.postInfo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ likes: newLikeCount }),
  })
    .then(response => {
      if (!response) {
        liked.value = !liked.value;
        return;
      }
      return response.json(); 
    })
    .then(updatedPost => {
      if (updatedPost) {
        props.postInfo.likes = updatedPost.likes; 
      }
    });
}
</script>

<template>
  <div class="feedInfo">
    <div class="userInfo">
      <img class="userImage" :src="postInfo.userimage" alt="">
      <p class="userName">{{ postInfo.username }}</p>
    </div>
    <img class="image" :src="postInfo.postimage" alt="">
    <div class="heartLikes">
      <!-- Heart icon with v-if and v-else for like  -->
      <img v-if="liked" @click="whenLiked" class="heart" src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Vue-Instagram/src/assets/heart-icon-y1k.png" alt="liked">
      <img v-else @click="whenLiked" class="hearts" src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Vue-Instagram/src/assets/heart-icon-y1k.png" alt="unliked">
      <p class="likes">{{ postInfo.likes }} likes</p>
    </div>
    <div>
      <p class="caption"><span class="userName2">{{ postInfo.username }}:</span> {{ postInfo.caption }}</p>
    </div>
  </div>
</template>





<style scoped>

.userImage{
   
    border-radius: 50%;
    width: 45px;
    height: 45px;
}

.feedInfo{
    border: pink solid;
    border-radius: 10px;
    width: 545px;
    margin-bottom: 45px;
    box-shadow: 5px 10px 10px 5px pink;
   
}


.image{
    width: 545px;
    height: 400px;
}
   
.caption{
   margin-left: 7px;
}
    
.userInfo{
    display: flex;
    margin: 10px;
    font-weight: bold;
}

.userName{
    margin: 10px;
    font-weight: bold;
}

.userName2{
    font-weight: bold;
    margin: 5px;
}

.likes{
    font-weight: bold;
    padding: 20px;
}


.heart{
    width: 30px;
    height: 30px;
    margin-top: 30px;
    padding-left: 10px;

    
}

.hearts{
    width: 30px;
    height: 30px;
    margin-top: 30px;
    padding-left: 10px;
    color: grey;
    opacity: 0.4;
}


.heartLikes{
    display: flex;

}
</style>