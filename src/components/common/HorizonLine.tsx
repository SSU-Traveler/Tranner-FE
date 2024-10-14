interface props {
  text: string;
}

const HorizonLine = ({ text }: props) => {
  return (
    <div className="w-[300px] text-center border-b border-gray-300 my-2">
      <span className="bg-white px-2 text-gray-400">{text}</span>
    </div>
  );
};

export default HorizonLine;
