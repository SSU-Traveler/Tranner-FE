// src/components/SignUpForm.js
import UserInput from '../input/UserInput';
import { UserInfoElement } from '../../types/signup';
import { Link } from 'react-router-dom';
import { isEmpty } from '../../utils/checkObjectEmpty';

type LoginInfoElement = Omit<UserInfoElement, 'email' | 'nickName'>;

interface Props {
  loginData: LoginInfoElement;
  handleChange?: (field: string) => (value: string) => void;
  loginHandler(): void;
}

const LoginForm = ({ loginData, handleChange, loginHandler }: Props) => {
  return (
    <form onSubmit={loginHandler}>
      {/* 아이디 입력 */}
      <div className="m-8">
        <div className="flex items-end">
          <UserInput
            label="아이디"
            value={loginData.memberId}
            onChange={handleChange?.('memberId')}
            placeholder="아이디 입력"
            box_width="input1"
          />
        </div>
      </div>
      {/* 비밀번호 입력 */}
      <div className="m-8">
        <UserInput
          label="비밀번호"
          type="password"
          value={loginData.password}
          onChange={handleChange?.('password')}
          placeholder="비밀번호 입력"
          box_width="input1"
        />
        <Link to="/find-id-password">
          <p className="text-xs">아이디/ 비밀번호를 잊으셨나요?</p>
        </Link>
      </div>
      <button
        type="submit"
        disabled={isEmpty(loginData)}
        className={`border rounded-[10px] w-[300px] h-[40px] ${
          !isEmpty(loginData) ? 'bg-button-basic hover:bg-button-hover' : 'bg-[#d9d9d9]'
        }`}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
