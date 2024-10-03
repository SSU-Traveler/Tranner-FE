import router from '../routes/Router';
import UserInput from '../components/input/UserInput';
import React, { useState, useEffect } from 'react';

export default function SignUpPage() {
  //유효성 검사 정규식
  const REGEX_EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const REGEX_MBRID = /^[a-z]+[a-z0-9]{5,19}$/g;
  const REGEX_PASSWORD = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

  //회원가입 정보
  const [signUpData, setSignUpData] = useState({
    email: '',
    verificationCode: '',
    mbrId: '',
    nickName: '',
    password: '',
    passwordConfirm: '',
  });

  //유효성 결과
  const [isValid, setIsValid] = useState({
    email: false,
    verificationCode: false,
    mbrId: false,
    password: false,
    passwordConfirm: false,
  });

  //에러메세지
  const [errMsg, setErrMsg] = useState({
    email: '',
    verificationCode: '',
    mbrId: '',
    password: '',
    passwordConfirm: '',
  });

  //인증코드 div show?
  const [isVisible, setIsVisible] = useState(false);

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
    } else if (field === 'mbrId') {
      result = REGEX_MBRID.test(value);
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
  const sendEmail = (email: string) => {
    //인증코드 입력 부분 초기화
    setSignUpData((prevData) => ({
      ...prevData,
      verificationCode: '',
    }));

    //이메일 인증번호 div display
    setIsVisible(true);
    //인증 버튼 클릭 못 하게 막음
    //이메일 인증번호 보내기.

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
  };

  //인증코드 확인 함수
  const confirmVertificationCode = (value: string) => {
    //1. 인증번호 맞는지 틀린지 확인 - 서버에 email, 인증번호 보내고 코드 검증.
    //
    //2-1. 맞으면
    //readonly 속성으로 바꾸고
    //이메일 readonly
    //인증 버튼 없애고 ok 표시.
    //인증번호 div 없애기
    //isValid 값 변경.
    //
    //2-2.틀리면
    //인증번호가 잘못됐습니다 경고글 출력,
    //인증번호 clear
  };

  //타이머 포멧 함수
  const formatTimeLeft = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  //아이디 중복 체크 함수
  const idDuplicatedCheck = () => {};

  //회원가입 함수
  //이건 api에 있어야 함.
  const signUpHandler = () => {};

  return (
    <div className="flex">
      <div className="container w-[100%] h-[100vh]">
        <h2>회원가입</h2>
        <h4>회원가입을 위한 정보를 입력해주세요.</h4>
        <form onSubmit={signUpHandler}>
          <div className="m-10">
            <div className="flex items-end">
              <UserInput
                label="이메일"
                type="email"
                value={signUpData.email}
                onChange={handleChange('email')}
                placeholder="이메일을 입력해주세요."
                box_width="input1"
              />
              <button
                type="button"
                onClick={() => sendEmail(signUpData.email)}
                disabled={!isValid.email}
                className={`border rounded-[10px] ml-5 w-[80px] h-[40px] ${
                  !isValid.email ? 'bg-[#d9d9d9] cursor-not-allowed' : 'bg-button-basic hover:bg-button-hover'
                }`}
              >
                인증
              </button>
            </div>
            {errMsg.email && <p className="text-red-500 text-xs">{errMsg.email}</p>}
          </div>
          {isVisible && (
            <div className="m-10">
              <div className="flex items-end">
                <UserInput
                  label="이메일 인증 코드"
                  type="text"
                  value={signUpData.verificationCode}
                  onChange={handleChange('verificationCode')}
                  placeholder="인증코드 입력"
                  box_width="input1"
                />
                <button
                  type="button"
                  onClick={() => confirmVertificationCode(signUpData.verificationCode)}
                  disabled={timeLeft <= 0}
                  className={`border w-[80px] h-[40px] rounded-[10px] ml-5 ${
                    timeLeft <= 0 ? 'bg-[#d9d9d9] cursor-not-allowed' : 'bg-button-basic hover:bg-button-hover'
                  }`}
                >
                  확인
                </button>
              </div>
              <p className="text-red-400">남은 시간: {formatTimeLeft(timeLeft)}</p> {/* 남은 시간 표시 */}
              {errMsg.verificationCode && <p className="text-red-500 text-xs">{errMsg.verificationCode}</p>}
              <p className="text-xs">
                이메일을 받지 못 하셨나요?{' '}
                <span
                  className="text-xs text-blue-500 cursor-pointer hover:underline"
                  onClick={() => sendEmail(signUpData.email)}
                >
                  이메일 재전송
                </span>
              </p>
            </div>
          )}
          <div className="m-10">
            <div className="flex items-end">
              <UserInput
                label="아이디"
                type="text"
                value={signUpData.mbrId}
                onChange={handleChange('mbrId')}
                placeholder="아이디 입력(영문자 또는 숫자 6~20자)"
                box_width="input1"
              />
              <button
                type="button"
                disabled={!isValid.mbrId}
                onClick={idDuplicatedCheck}
                className={`border rounded-[10px] ml-5 w-[80px] h-[40px] ${
                  !isValid.mbrId ? 'bg-[#d9d9d9] cursor-not-allowed' : 'bg-button-basic hover:bg-button-hover'
                }`}
              >
                확인
              </button>
            </div>
            {errMsg.mbrId && <p className="text-red-500 text-xs">{errMsg.mbrId}</p>}
          </div>
          <div className="m-10">
            <UserInput
              label="닉네임"
              type="text"
              value={signUpData.nickName}
              onChange={handleChange('nickName')}
              placeholder="닉네임 입력"
              box_width="input2"
            />
          </div>
          <div className="m-10">
            <UserInput
              label="비밀번호"
              type="password"
              value={signUpData.password}
              onChange={handleChange('password')}
              placeholder="비밀번호 입력"
              box_width="input2"
            />
            {errMsg.password && <p className="text-red-500 text-xs">{errMsg.password}</p>}
          </div>
          <div className="m-10">
            <UserInput
              label="비밀번호 확인"
              type="password"
              value={signUpData.passwordConfirm}
              onChange={handleChange('passwordConfirm')}
              placeholder="비밀번호 확인"
              box_width="input2"
            />
            {errMsg.passwordConfirm && <p className="text-red-500 text-xs">{errMsg.passwordConfirm}</p>}
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
}
