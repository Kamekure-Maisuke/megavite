<script setup>
import { ref } from 'vue'
import * as d3 from 'd3'

// 独立したリアクティブデータ
const singles = ref(null)

// 曲取得関数
async function getSingles(){
  try{
    singles.value = await d3.tsv("../../data/single.tsv",(d) => {
      return {
        release: d['発売日'],
        title: d['タイトル'],
        rank: d['順位'],
        sales: d['売上枚数']
      }
    })
  } catch(err){
    console.error('🔥', err)
  }
}

// 取得
// ※toplevel awaitだとsuspenseタグが必要のため、保留。
(async () => {
  await getSingles()
})()
</script>

<template>
  <div v-for="single in singles" :key="single" class="card text-center shadow-2xl">
    <figure class="px-10 pt-10">
      画像イメージ
    </figure> 
    <div class="card-body">
      <h2 class="card-title">{{ single.title }}</h2> 
      <p>{{ single.release }}に発売されたシングル。{{ single.sales }}を売上げ、オリコンランキング{{ single.rank }}を獲得した。</p> 
      <div class="justify-center card-actions">
        <button class="btn btn-outline btn-accent">詳細</button>
      </div>
    </div>
  </div>
</template>
