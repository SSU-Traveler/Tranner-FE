const CLIENT_ID = import.meta.env.VITE_KAKAO_REST_API;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?
client_id=${CLIENT_ID}
&redirect_uri=${REDIRECT_URI}
&response_type=code
&scope=profile_nickname,profile_image,account_email`;
