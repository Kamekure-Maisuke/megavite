<template>
  <!-- レイアウト -->
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold">MEGAVITE</span>
    </div> 
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        <button class="btn btn-ghost btn-sm rounded-btn">
          <router-link to="/">ホーム</router-link>
        </button>
        <button class="btn btn-ghost btn-sm rounded-btn">
          <router-link to="/single">楽曲</router-link>
        </button>
        <button class="btn btn-ghost btn-sm rounded-btn">
          <router-link to="/member">メンバー</router-link>
        </button>
      </div>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <a href="https://github.com/Kamekure-Maisuke/megavite" target="_blank">
          <img src="./assets/github.svg" alt="ロゴ">
        </a>
      </button>
    </div>
  </div>
  <!-- メインコンテンツ -->
  <div class="font-sans text-center antialiased mt-14">
    <router-view />
  </div>
</template>