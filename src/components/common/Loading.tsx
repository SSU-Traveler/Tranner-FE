import Spinner from '/images/Spinner.gif';

const Loading = () => {
  return (
    <div>
      <h3>잠시만 기다려주세요.</h3>
      <img src={Spinner} alt="로딩" width="10%" />
    </div>
  );
};

export default Loading;
