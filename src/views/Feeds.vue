<script setup>
import router from '@/router';
import { ref } from 'vue';


let userName= ''
let likes= ''
let postImage= ''
let caption= ''
let userImage= ''



function addPost() {
    let userInformation = {
   "username" : userName,
   "likes" : likes,
   "postimage" : postImage,
   "caption" : caption,
   "userimage" : userImage 
}

const params = {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(userInformation),
};
    fetch("https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post", params)
    .then ((response) => 
     response.json())    
}





</script>


<template>

<body>
<div class="addOns">
    <p>Username:</p>
    <input type="text" v-model="userName">
    <p>User Image:</p>
    <input type="text" v-model="userImage">
    <p>Image Link:</p>
    <input type="text" v-model="postImage">
    <p>Likes:</p>
    <input type="number" v-model="likes">
    <p>Caption:</p>
    <input type="text" v-model="caption">
</div>

<div class="submit">
    <button @click="addPost()">Submit!</button> 
    <!-- after clicking the submit button, the button function should add the new post info. to the present feed -->
     <!-- the button function should be called  -->
       <!-- collect form information -->
        <!-- save the new information and proving it? -->
       <!-- when I go to the home page, the new post should represent the new post -->
</div>


</body>




</template>



<style scoped>


.addOns{
    text-align: center;
}

.submit{
    text-align: center;
    margin: 20px
}
</style>