import { createContext, ReactNode, useState } from 'react';
import { hideOverlay, showOverlay } from '../utils/toggleOverlay';

// 1. 컨텍스트 생성
const initialValue = {
  openModal: (element: React.ReactElement) => {},
  closeModal: () => {},
  isModalOpen: false,
};

export const ModalContext = createContext(initialValue);

// 2. Provider를 만들어서 값을 내려줌
interface ModalProviderProp {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProp) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalElement, setModalElement] = useState<null | React.ReactElement>(null);

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
        <div className="fixed inset-0 z-50 flex items-center justify-center" id="modal">
          {modalElement}
        </div>
      )}
    </ModalContext.Provider>
  );
}
