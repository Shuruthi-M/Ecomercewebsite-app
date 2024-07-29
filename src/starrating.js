const StarRating = ({ rating }) => {
    const stars = [];
  for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} 
        style={{ color: i <= rating ? 'gold' : 'lightgray' }}>
          ★
        </span>
      );
    }
  return (
      <div>
        {stars}
      </div>
    );
  };
  export default StarRating;