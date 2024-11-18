import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

function ModalContainer({ children }: Props) {
  return createPortal(<>{children}</>, document.getElementById('modal')!);
}

export default ModalContainer;
