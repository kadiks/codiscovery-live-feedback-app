const Card = ({ _id, title, description, type, created }) => {
  return (
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span className="card-title">{title}</span>
        <span className="new badge" data-badge-caption="">
          {type}
        </span>
        <p>{description}</p>
      </div>
      <div class="card-action right-align">
        <a class="btn-floating disabled">
          <i class="material-icons">thumb_up</i>
        </a>
      </div>
    </div>
  );
};

export default Card;
