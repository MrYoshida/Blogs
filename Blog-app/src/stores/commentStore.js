import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCommentStore = defineStore('comment', () => {
  const allComments = ref([
    {postid:1,comment:"merhaba harika bir içerik"

  },{postid:1,comment:"ikinci yorum"}])
  const seletedpost = ref("")
  const postCommnets = computed(() => allComments.value.filter((com)=> com.postid == seletedpost.value ))


  function seletedpostchanger(Id){
    seletedpost.value= Id
  }

  function addComment(postid,commentler){ 
    const comment= {
      postid:postid,
      comment:commentler
    } 
    allComments.value.push(comment)
  }

  
  

  return { addComment,allComments,seletedpostchanger,postCommnets }
})
