<script setup>
import { attributes,html } from '../../contents/example.md'
</script>
<template>
  <h1>[タイトル] : {{ attributes.title }}</h1>
  <p>作成日時 : {{ attributes.created_at }}</p>
  <div>
    <p v-for="tag in attributes.tags" class="badge badge-outline mx-1">
      {{ tag }}
    </p>
  </div>
  <br>
  <hr>
  <div v-html="html"></div>
</template>