<script setup>
import { ref, onMounted,computed } from 'vue'
import axios from 'axios'
import PostCard from "./Postcard.vue"
import { useCommentStore } from "../stores/commentStore"
import comment from "../components/Comment.vue"


onMounted(async () => {

const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
console.log(response.data)
posts.value = response.data
title.value= posts.value[0].title
content.value= posts.value[0].body
console.log(posts.value.length)
console.log(searchQuery.value)
})

const CommentStore = useCommentStore()


 
const posts = ref([])
const title = ref()
const content = ref()
const id = ref("")
const searchQuery = ref("")
const searchType = ref('title')

const Comment = ref("")
function AddComment(){
    CommentStore.addComment(id.value,Comment.value)
    Comment.value =""
    console.log(id.value)
    console.log(Comment.value) 
}


let filteredPost = computed(() => {
  if (searchType.value == 'title' && searchQuery.value != "" ) {
    return posts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  } else if (searchType.value == 'content' && searchQuery.value != "") {
    return posts.value.filter(post => post.body.toLowerCase().includes(searchQuery.value.toLowerCase()))
  }else {
    return [];
  }
})


function Commoncontent(post){
  title.value = post.title
  content.value = post.body
  id.value = post.id
  CommentStore.seletedpostchanger(post.id)
}
</script>


  
<template>
  <div class="min-h-screen min-w-screen bg-gray-200 flex-row flex items-center ">
  <div class="flex flex-col mx-5 w-1/5 max-h-screen px-2 py-8 ">
    <h2 class="text-3xl text-black font-bold mb-6  underline decoration-solid min-w-screen rounded-lg  ">Blog Posts</h2>
    <div class="bg-white relative flex flex-col items-center no-scrollbar align-middle overflow-y-scroll border-y-2 border-black rounded-md shadow">
      <div class="mb-4 w-full px-4 mt-3 text-black">
          <div>
            <label class="ml-2 mr-6">
              <input type="radio" id="Title" value="title" v-model="searchType"> Title
            </label>
            <label class="ml-5">
              <input type="radio" id="Content" value="content" v-model="searchType"> Content
            </label>
            <!-- {{ id }} -->
            
            <!-- {{ CommentStore.postCommnets }}
            {{ Comment }}
            {{ id }} -->
            <input v-model="searchQuery" type="text" placeholder="Search..." class=" text-black w-full p-2 border rounded-xl mb-2">
          </div>
        </div>
      <img class="reletive animate-bounce mt-2" src="../assets/arrow-up.gif" alt="None">
      <PostCard v-if="filteredPost.length == 0" @click="Commoncontent(post)" class=" hover:cursor-pointer bg-stone-200 hover:bg-gray-300 relative hover:scale-105 ease-in-out duration-300 w-4/5 h-22 mt-3" v-for="post in posts" :key="post.id" :postprop="post" />
      <PostCard v-if="filteredPost.length !=0" @click="Commoncontent(filterpost)" class=" hover:cursor-pointer bg-stone-200 hover:bg-gray-300 relative hover:scale-105 ease-in-out duration-300 w-4/5 h-22 mt-3" v-for="filterpost in filteredPost" :key="filterpost.id" :postprop="filterpost" />
    </div>
  </div>
  <div class="bg-white  mt-[50px] min-h-[610px] mr-10 grow border-solid border-4 border-green-700 rounded-3xl flex flex-col items-center  gap-10" >
     <h1 class="text-black text-4xl mt-5 ">{{ title }} </h1>
     <div class="w-[1200px] h-1 bg-black "></div>
     <p class="text-black ml-5 flex-none ">{{ content }}</p>
     <h1 class="text-3xl  text-black " >Comments</h1>
      <div class="flex flex-col items-center pt-5 w-[95%] min-h-70 border-2 border-black bg-stone-300 rounded-xl"> 
        <input class=" text-black pl-1 w-[95%] mb-5" placeholder="Comment..." v-model="Comment" >
        <button @click="AddComment" class=" text-white border-2 p-2 mb-3 rounded-md border-black  bg-slate-500 hover:scale-105 duration-300 " > Add Comment </button>
        <div class="flex flex-col overflow-y-scroll  w-[95%] h-40">
        <comment class=" mt-2" v-for="comx in CommentStore.postCommnets" :key="comx.postid" :comprop="comx" ></comment>
        
        </div>
      </div>    
    </div>
    
  </div>
  
</template>




  
  
  