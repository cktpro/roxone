<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center">
      <h1 class="text-[50px] text-red-500 font-bold font-stretch-normal">Roxone.dev</h1>
      <div class="flex justify-between items-center gap-[3rem]">
        <nav>
          <ul class="flex space-x-4 p-4 rounded-lg">
            <li>
              <a href="/" class="nav-link px-4 py-2 rounded hover:bg-white">Home</a>
            </li>
            <li>
              <a href="/experienxe" class="nav-link px-4 py-2 rounded hover:bg-white">Experienxe</a>
            </li>
            <li>
              <div class="relative group inline-block">
                <!-- Nút chính -->
                <a href="#" class="px-4 py-2 rounded hover:bg-white">Portfolio</a>

                <!-- Menu dropdown -->
                <ul
                  class="absolute z-1 left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                >
                  <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">HHTQ Laravel</a></li>
                  <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">Anime Wordpress</a></li>
                  <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">Roxone Vue 3</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/contract" class="nav-link px-4 py-2 rounded hover:bg-white">Contract</a>
            </li>
          </ul>
        </nav>
      </div>
      <a href="#" class="bg-red-600 px-3 py-2 text-white rounded-sm">Get Started</a>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import setActiveNav from './header';
onMounted(setActiveNav);
</script>
