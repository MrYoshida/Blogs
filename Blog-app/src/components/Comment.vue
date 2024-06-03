<script setup>
import {ref, defineProps, watch, computed} from "vue"
import {useCommentStore} from "../stores/commentStore"
const props = defineProps({
    comprop : Object,
})
const Store = useCommentStore()




</script>


<template>

<div  class="w-[95%] min-h-20 rounded-md border-stone-100 border-2 bg-stone-200 scroll-auto" > 
    <p class="text-black text-xl">{{ comprop.comment }}</p>
</div>

</template>