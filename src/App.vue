<template>
  <div class="font-sans text-center antialiased mt-14">
    <router-view />
    <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <router-link to="/nogi">nogi画面へ遷移</router-link>
      </button>
    </div>
  </div>
</template>
