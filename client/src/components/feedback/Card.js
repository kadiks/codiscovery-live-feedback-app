const Card = ({ _id, title, description, type, created }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <span>{type}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
