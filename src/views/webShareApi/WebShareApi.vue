
<script setup>

const onClickWebShare = () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Web Share API",
        text: "공유하기",
        url: "https://developers.google.com/web",
      })
      .then(() => console.log("공유 성공"))
      .catch((error) => console.log("공유 실패", error));
  } else {
    alert("Web Share API를 지원하지 않습니다.");

  }
};
</script>
<template>
  <div class="web-share-api-page">
    <button @click="onClickWebShare">공유하기</button>

  </div>
</template>
<style scoped>
.web-share-api-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
   button {
    padding: 10px 20px;
    background-color: #ffeb00;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>