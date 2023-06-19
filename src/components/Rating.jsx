export default function Rating({ children }) {
  const filledStars = Math.floor(children);
  const decimalPart = children - filledStars;
  let emptyStars = 5 - filledStars;

  if (decimalPart >= 0.5) {
    emptyStars -= 1;
  }

  const fullStar = '★';
  const emptyStar = '☆';

  const starElements = [];
  for (let i = 0; i < filledStars; i++) {
    starElements.push(<span key={i}>{fullStar}</span>);
  }
  if (decimalPart >= 0.5) {
    starElements.push(<span key={filledStars}>{fullStar}</span>);
  }
  for (let i = 0; i < emptyStars; i++) {
    starElements.push(<span key={i + filledStars + 1}>{emptyStar}</span>);
  }

  return <div style={{ fontSize: '60px' }}>{starElements}</div>;
}
