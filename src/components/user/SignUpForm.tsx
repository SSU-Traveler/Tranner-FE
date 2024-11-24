// src/components/SignUpForm.js
import { UserInfoElement } from '../../types/signup.type';
import { isEmpty } from '../../utils/checkObjectEmpty';
import UserInput from '../input/UserInput';

interface SignUpUserElement extends UserInfoElement {
  authCode: string;
  passwordConfirm: string;
}

type ErrMsg = Omit<SignUpUserElement, 'nickName'>;

interface IsValid {
  email: boolean;
  authCode: boolean;
  username: boolean;
  password: boolean;
  passwordConfirm: boolean;
}

interface Props {
  signUpData: SignUpUserElement;
  handleChange?: (field: string) => (value: string) => void;
  sendEmail(): void;
  confirmVerificationCode(email: string, authCode: string): void;
  isVisible: boolean;
  emailChecked: boolean;
  idChecked: boolean;
  timeLeft: number;
  formatTimeLeft(seconds: number): string;
  errMsg: ErrMsg;
  isValid: IsValid;
  idDuplicatedCheck(): void;
  signUpHandler(event: React.FormEvent<HTMLFormElement>): void;
}

const SignUpForm = ({
  signUpData,
  handleChange,
  sendEmail,
  confirmVerificationCode,
  isVisible,
  emailChecked,
  idChecked,
  timeLeft,
  formatTimeLeft,
  errMsg,
  isValid,
  idDuplicatedCheck,
  signUpHandler,
}: Props) => {
  return (
    <form onSubmit={signUpHandler}>
      {/* 이메일 입력 */}
      <div className="m-10">
        <div className="flex items-end">
          <UserInput
            label="이메일"
            type="email"
            value={signUpData.email}
            onChange={handleChange?.('email')}
            placeholder="이메일을 입력해주세요."
            box_width="input1"
          />
          <button
            type="button"
            onClick={() => sendEmail()}
            disabled={!isValid.email || emailChecked}
            className={`border rounded-[10px] ml-5 w-[80px] h-[40px] ${
              !isValid.email ? 'bg-[#d9d9d9]' : emailChecked ? 'bg-[#c3e1b3]' : 'bg-button-basic hover:bg-button-hover'
              //!isValid.email || emailChecked
              //</div>? 'bg-[#d9d9d9]'
              //: 'bg-button-basic hover:bg-button-hover'
            }`}
          >
            {emailChecked ? '인증 완료' : '인증'}
          </button>
        </div>
        {errMsg.email && <p className="text-red-500 text-xs">{errMsg.email}</p>}
      </div>

      {/* 인증 코드 입력 */}
      {isVisible && (
        <div className="m-10">
          <div className="flex items-end">
            <UserInput
              label="이메일 인증 코드"
              value={signUpData.authCode}
              onChange={handleChange?.('authCode')}
              placeholder="인증코드 입력"
              box_width="input1"
            />
            <button
              type="button"
              onClick={() => {
                console.log('버튼 클릭됨');
                confirmVerificationCode(signUpData.email, signUpData.authCode);
              }}
              disabled={timeLeft <= 0}
              className={`border w-[80px] h-[40px] rounded-[10px] ml-5 ${
                timeLeft <= 0 ? 'bg-[#d9d9d9]' : 'bg-button-basic hover:bg-button-hover'
              }`}
            >
              확인
            </button>
          </div>
          <p className="text-red-400">남은 시간: {formatTimeLeft(timeLeft)}</p>
          {errMsg.authCode && <p className="text-red-500 text-xs">{errMsg.authCode}</p>}
        </div>
      )}

      {/* 아이디 입력 */}
      <div className="m-10">
        <div className="flex items-end">
          <UserInput
            label="아이디"
            value={signUpData.username}
            onChange={handleChange?.('username')}
            placeholder="아이디 입력(영문자 또는 숫자 6~20자)"
            box_width="input1"
          />
          <button
            type="button"
            disabled={!isValid.username || idChecked}
            onClick={idDuplicatedCheck}
            className={`border rounded-[10px] ml-5 w-[80px] h-[40px] ${
              !isValid.username || idChecked ? 'bg-[#d9d9d9]' : 'bg-button-basic hover:bg-button-hover'
            }`}
          >
            확인
          </button>
        </div>
        {errMsg.username && <p className="text-red-500 text-xs">{errMsg.username}</p>}
      </div>

      <div className="m-10">
        <UserInput
          label="닉네임"
          type="text"
          value={signUpData.nickName}
          onChange={handleChange?.('nickName')}
          placeholder="닉네임 입력"
          box_width="input2"
        />
      </div>

      {/* 비밀번호 입력 */}
      <div className="m-10">
        <UserInput
          label="비밀번호"
          type="password"
          value={signUpData.password}
          onChange={handleChange?.('password')}
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
          onChange={handleChange?.('passwordConfirm')}
          placeholder="비밀번호 확인"
          box_width="input2"
        />
        {errMsg.passwordConfirm && <p className="text-red-500 text-xs">{errMsg.passwordConfirm}</p>}
      </div>
      <button
        type="submit"
        disabled={isEmpty(signUpData) || !emailChecked || !idChecked}
        className={`border rounded-[10px] w-[400px] h-[40px] ${
          !isEmpty(signUpData) && emailChecked && idChecked ? 'bg-button-basic hover:bg-button-hover' : 'bg-[#d9d9d9]'
        }`}
      >
        회원가입
      </button>
    </form>
  );
};

export default SignUpForm;
