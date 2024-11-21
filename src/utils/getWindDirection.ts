// prettier-ignore
const directions = [
  '북풍', '북북동풍', '북동풍', '동북동풍', '동풍', '동남동풍', '남동풍', '남남동풍', '남풍', '남남서풍', '남서풍', '서남서풍', '서풍', '서북서풍', '북서풍', '북북서풍',
];

export default function getWindDirection(degree: number): string {
  const index = Math.round(degree / 22.5) % 16;
  return directions[index];
}
