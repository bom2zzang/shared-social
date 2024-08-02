const { Kakao } = window;
// SDK 초기화
const initialize = () => {
  if (import.meta.env.VITE_KAKAO_APP_KEY) {
    Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
  } else {
    console.log("Kakao app key is not provided.");
  }
};
// 공유하기 이벤트
// NOTE: 데이터 형식 확인 (https://developers.kakao.com/docs/latest/ko/message/js-link#default-template-msg-custom)
const shareMessage = (data) => {
  if (!Kakao.isInitialized()) {
    console.log("Kakao SDK is not initialized.");
    return;
  }
  // 데이터가 올바른 형식인지 확인
  if (!data || typeof data !== "object") {
    console.error("Invalid data for sharing message.");
    return;
  }

  Kakao.Share.sendDefault({ ...data });
};

export default { initialize, shareMessage };
