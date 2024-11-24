interface CProps {
  label: string;
  value: string;
  onChange?(value: string): void;
  type?: string;
  placeholder: string;
  box_width: string;
  disabled?: boolean;
}

const UserInput = ({ label, value, onChange, type = 'text', placeholder, box_width, disabled }: CProps) => {
  const widthClass = box_width === 'input1' ? 'w-[300px]' : box_width === 'input2' ? 'w-[400px]' : '';

  return (
    <div className={`${widthClass}`}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        className="w-full h-[40px] bg-white border border-black-300 rounded-[10px] p-2 "
        disabled={disabled}
      ></input>
    </div>
  );
};

export default UserInput;
