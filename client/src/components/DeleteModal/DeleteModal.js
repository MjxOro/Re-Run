import "./DeleteModal.scss";
import { Link } from "react-router-dom";
import { ImCross, ImCheckmark } from "react-icons/im";

const DeleteModal = (props) => {
  const card = props.data.find((elem) => {
    return elem._id === props.postId;
  });
  console.log(card);
  return (
    <section className={props.show ? "delete" : "delete delete--close"}>
      <div
        className={
          props.show
            ? "delete__container"
            : "delete__container delete__container--close"
        }
      >
        <Link to="/" onClick={props.close} className="delete__close" />
        <h1 className="delete__greeting">
          Are you sure you want to delete this posting?
        </h1>
        {card && (
          <div className="delete__card">
            <img className="delete__img" src={card.image} />
            <div className="delete__info-container">
              <div className="delete__text-container">
                <p className="delete__title">{card.title}</p>
                <p className="delete__price">{card.price}</p>
              </div>
            </div>
          </div>
        )}
        <div className="delete__icon-container">
          <div
            onClick={props.handleDelete}
            className="delete__delete-btn delete__delete-btn--container"
          >
            <ImCheckmark className="delete__delete-btn" />
          </div>
          <div
            onClick={props.close}
            className="delete__close-btn delete__close-btn--container"
          >
            <ImCross className="delete__close-btn" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DeleteModal;
