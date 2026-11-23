// Oyun logosundaki blok dizisi (ust 5, alt 3 kare). Dekoratif.
const TOP = ['#FF5D73', '#FF9A3C', '#FFD23F', '#22C7D6', '#FF6BC8'];
const BOTTOM = [['#3DDC84', 0], ['#4D7CFF', 3], ['#9B6BFF', 4]];

export default function BlockMark({ size = 28 }) {
  const c = size / 5;
  const g = c * 0.12;
  return (
    <svg width={size} height={c * 2} viewBox={`0 0 ${size} ${c * 2}`} aria-hidden="true" focusable="false">
      {TOP.map((fill, i) => (
        <rect key={fill} x={i * c + g / 2} y={g / 2} width={c - g} height={c - g} rx={c * 0.2} fill={fill} />
      ))}
      {BOTTOM.map(([fill, i]) => (
        <rect key={fill} x={i * c + g / 2} y={c + g / 2} width={c - g} height={c - g} rx={c * 0.2} fill={fill} />
      ))}
    </svg>
  );
}
