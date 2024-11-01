import { Confirm } from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { useModal } from './useModal';

export const useAlarm = () => {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const needToLoginAlarm = () => {
    Confirm.show(
      'Tranner',
      '해당 서비스는 로그인 후 이용 가능합니다.<br>로그인 하시겠습니까?',
      '확인',
      '취소',
      () => {
        closeModal();
        navigate('/login');
      },
      () => {},
      {
        width: '360px',
        messageFontSize: '16px',
        plainText: false,
        titleColor: '#0BCDFE',
        okButtonBackground: '#0BCDFE',
      }
    );
  };

  return { needToLoginAlarm };
};
