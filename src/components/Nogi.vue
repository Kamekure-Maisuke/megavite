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
        title: d['タイトル']
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
  <ul>
    <li v-for="single in singles" :key="single">
      {{ single.release }}: {{ single.title }}
    </li>
  </ul>
</template>
