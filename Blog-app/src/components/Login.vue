<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const login = () => {
    if (email.value === 'test@test.com' && password.value === 'test') {
      router.push('/home')
    } else {
      alert('Invalid credentials')
    }
  }
  </script>

<template>
    <div class=" h-screen w-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              class="mt-1 block w-full text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              class="mt-1 block w-full text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <button 
            type="submit" 
            class="animate-pulse w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-md text-lg font-medium shadow-md hover:from-blue-600 hover:to-purple-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </template>
  
  
  
  