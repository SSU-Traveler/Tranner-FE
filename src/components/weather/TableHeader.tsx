const tableHeader = ['시간', '온도', '체감온도', '습도', '날씨', '흐림 정도', '강수 확률', '풍속', '풍향'];
const tableStyle = 'border border-gray-300 p-[10px] text-center';

export default function TableHeader() {
  return (
    <thead>
      <tr>
        {tableHeader.map((title) => (
          <th className={tableStyle}>{title}</th>
        ))}
      </tr>
    </thead>
  );
}
