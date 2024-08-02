<script setup>
import { onMounted } from "vue";
import useKakao from "@/utils/kakaoShare";

onMounted(() => {
  useKakao.initialize();
});

// 공유하기 버튼 클릭

const kakaoShare = () => {
  const msg = {
    objectType: "text",
    text: "기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오톡 공유는 다른 템플릿을 이용해 보낼 수 있습니다.",
    link: {
      mobileWebUrl: "https://developers.kakao.com",
      webUrl: "https://developers.kakao.com",
    },
  };
  useKakao.shareMessage(msg);
};
</script>

<template>
  <div class="kakao-button-comp">
    <button @click="kakaoShare">카카오 공유하기</button>
  </div>
</template>

<style>
.kakao-button-comp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
