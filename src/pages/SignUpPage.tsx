import { useState, useEffect } from 'react';
import SignUpForm from '../components/user/SignUpForm';
import { SignUpApi, SendEmailApi, IdDuplicatedCheckApi, ConfirmVerificationCodeApi } from '../api/SignUpApi';
import { isEmpty } from '../utils/checkObjectEmpty';

export default function SignUpPage() {
  //유효성 검사 정규식
  const REGEX_EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const REGEX_MEMBERID = /^[a-z]+[a-z0-9]{5,19}$/g;
  const REGEX_PASSWORD = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

  //회원가입 정보
  const [signUpData, setSignUpData] = useState({
    email: '',
    verificationCode: '',
    memberId: '',
    nickName: '',
    password: '',
    passwordConfirm: '',
  });

  //유효성 결과
  const [isValid, setIsValid] = useState({
    email: false,
    verificationCode: false,
    memberId: false,
    password: false,
    passwordConfirm: false,
  });

  //에러메세지
  const [errMsg, setErrMsg] = useState({
    email: '',
    verificationCode: '',
    memberId: '',
    password: '',
    passwordConfirm: '',
  });

  //인증코드 div show?
  const [isVisible, setIsVisible] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [idChecked, setIdChecked] = useState(false);

  const [timer, setTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(300); // 5분 (300초)

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(timer!);
      setIsValid((prev) => ({ ...prev, verificationCode: false })); // 인증 코드 확인 버튼 비활성화
      return;
    }
  }, [timeLeft]);

  //******************* */
  //함수
  const handleChange = (field: string) => (value: string) => {
    if (field === 'email') {
      setIsVisible(false);
      setSignUpData((prevData) => ({
        ...prevData,
        [field]: value,
        verificationCode: '',
      }));
    } else {
      setSignUpData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }

    //onChange와 동시에 유효성 검사
    if (field !== 'nickName') {
      checkValid(field, value);
    }
  };

  //유효성 검증 함수
  const checkValid = (field: string, value: string) => {
    let result = false;
    let message = '';

    if (field === 'email') {
      result = REGEX_EMAIL.test(value);
      message = result ? '' : '이메일 형식이 올바르지 않습니다.';
    } else if (field === 'memberId') {
      result = REGEX_MEMBERID.test(value);
      message = result ? '' : '아이디는 영문자 또는 숫자 6~20자여야 합니다.';
    } else if (field === 'password') {
      result = REGEX_PASSWORD.test(value);
      message = result ? '' : '영문, 숫자, 특수문자 포함 8자 이상이어야 합니다.';
    } else if (field === 'passwordConfirm') {
      result = signUpData.password === value;
      message = result ? '' : '비밀번호가 일치하지 않습니다.';
    }

    setIsValid((prevData) => ({
      ...prevData,
      [field]: result,
    }));

    setErrMsg((prevData) => ({
      ...prevData,
      [field]: message,
    }));
  };

  //이메일 전송 함수
  const sendEmail = async () => {
    //인증코드 입력 부분 초기화
    setSignUpData((prevData) => ({
      ...prevData,
      verificationCode: '',
    }));

    //이메일 인증번호 div display
    setIsVisible(true);

    // 타이머 초기화
    setTimeLeft(300); // 5분으로 초기화

    // 타이머 설정
    if (timer) clearInterval(timer); // 이전 타이머 클리어
    const newTimer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(newTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setTimer(newTimer);

    //이메일 인증번호 보내기.
    const response = await SendEmailApi(signUpData.email);
    console.log(response);
  };

  //인증코드 확인 함수
  const confirmVerificationCode = async (email: string, verificationCode: string) => {
    //1. 인증번호 맞는지 틀린지 확인 - 서버에 email, 인증번호 보내고 코드 검증.
    const response = await ConfirmVerificationCodeApi(email, verificationCode);
    //2-1. 맞으면
    if (response) {
      setIsValid((prevData) => ({
        ...prevData,
        verificationCode: true,
      }));

      setEmailChecked(true);

      setIsVisible(false);
    } else {
      //2-2.틀리면
      setErrMsg((prevData) => ({
        ...prevData,
        verificationCode: '인증번호가 잘못되었습니다',
      }));
      setSignUpData((prevData) => ({
        ...prevData,
        verificationCode: '',
      }));
    }
  };

  //타이머 포멧 함수
  const formatTimeLeft = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  //아이디 중복 체크 함수
  const idDuplicatedCheck = async () => {
    try {
      const response = await IdDuplicatedCheckApi(signUpData.memberId);
      console.log(response);
      //아이디 중복일 경우
      if (!response) {
        setErrMsg((prevData) => ({
          ...prevData,
          memberId: '중복된 아이디가 존재합니다.',
        }));
      } else {
        //아이디가 중복이 아닐 경우
        setIdChecked(true);
      }
      //아이디 사용 가능할 경우
    } catch (error) {
      console.error('아이디 중복 체크 오류', error);
    }
  };
  //회원가입 함수
  const signUpHandler = async () => {
    const result = await SignUpApi(signUpData);
    //result가 true일 경우 회원가입이 완료되었습니다 모달 띄우기.
    console.log(result);
  };

  return (
    <div className="flex">
      <div className="container w-full flex flex-col justify-center items-center">
        <h2>회원가입</h2>
        <h4>회원가입을 위한 정보를 입력해주세요.</h4>
        <SignUpForm
          signUpData={signUpData}
          handleChange={handleChange}
          sendEmail={sendEmail}
          confirmVerificationCode={confirmVerificationCode}
          isVisible={isVisible}
          emailChecked={emailChecked}
          idChecked={idChecked}
          timeLeft={timeLeft}
          formatTimeLeft={formatTimeLeft}
          errMsg={errMsg}
          isValid={isValid}
          idDuplicatedCheck={idDuplicatedCheck}
          signUpHandler={signUpHandler}
        />
      </div>
    </div>
  );
}
