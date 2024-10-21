interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function CustomNextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div className={className} onClick={onClick}>
      <img src="/next-arrow.svg" alt="next" style={{ ...style, width: '55px', height: '30px' }} />
    </div>
  );
}

export function CustomPrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div className={className} onClick={onClick}>
      <img src="/prev-arrow.svg" alt="prev" style={{ ...style, width: '55px', height: '30px' }} />
    </div>
  );
}
