import { createContext, ReactNode, useState } from 'react';
import { hideOverlay, showOverlay } from '../utils/toggleOverlay';

// 1. 컨텍스트 생성
// (1) 초기값 생성 - 실제 ModalProvider가 없는 환경에서 ModalContext를 사용할 때도 에러 없이 안전하게 동작하도록 하기 위함
interface ModalContextValue {
  openModal: (element: React.ReactElement) => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

const initialValue: ModalContextValue = {
  openModal: () => {},
  closeModal: () => {},
  isModalOpen: false,
};

// (2) createContext 훅을 이용하여 컨텍스트 생성, 초기값을 위에서 생성한 initialValue로 지정
export const ModalContext = createContext<ModalContextValue>(initialValue);

// 2. Provider를 만들어서 값을 내려줌
// (1) 인터페이스 정의
interface ModalProviderProp {
  children: ReactNode;
}
// (2) Provider가 포함된 ModalProvider 컴포넌트 생성
export function ModalProvider({ children }: ModalProviderProp) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalElement, setModalElement] = useState<null | React.ReactElement>(null);

  // Provider의 value를 정의함
  const value = {
    openModal: (element: React.ReactElement) => {
      showOverlay();
      setModalElement(element);
      setIsModalOpen(true);
    },
    closeModal: () => {
      hideOverlay();
      setModalElement(null);
      setIsModalOpen(false);
    },
    isModalOpen,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" id="modal-by-hj">
          {modalElement}
        </div>
      )}
    </ModalContext.Provider>
  );
  // {children} : ModalProvider로 감싸진 자식 컴포넌트들을 렌더링함
  // {modalElement && ...} : modalElement가 null이 아닌 경우(=엘리먼트가 있는 경우), 모달을 화면에 띄우는 div 요소를 렌더링함
}
