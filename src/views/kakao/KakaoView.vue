<script setup>
import KakaoButton from "./comp/KakaoViewButton.vue";
</script>

<template>
  <div class="kakao-page">
    <KakaoButton />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .kakao-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
