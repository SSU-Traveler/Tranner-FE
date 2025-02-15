import '../../styles/loading.css';

export default function DataLoading() {
  return (
    <div className="w-full flex flex-col justify-center items-center my-[20px]">
      <div className="loader"></div>
      <br />
      <div className="loader-text"></div>
    </div>
  );
}
