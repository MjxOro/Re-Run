import "./EditPostForm.scss";
import { BiImageAdd } from "react-icons/bi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const EditPostForm = (props) => {
  return (
    <section className="edit">
      <form onSubmit={props.handleUpload} className="edit__container">
        <div className="edit__header">
          <FaArrowLeft onClick={props.handleGoback} className="edit__goback" />
          <h1 className="edit__h1">Edit a post</h1>
        </div>
        <article className="edit__image">
          <img src={props.previewImg} className="edit__preview" />
          <label htmlFor="uploadImg" className="edit__label-img">
            <BiImageAdd className="edit__upload-icon" />
          </label>
          <input
            onChange={props.handleChangeImg}
            type="file"
            id="uploadImg"
            className="edit__upload"
            name="image"
            multiple={true}
          />{" "}
          {/* display None */}
        </article>
        <div className="edit__info-container">
          <label className="edit__label">Title</label>
          <input
            onChange={props.handleChange}
            className="edit__input"
            name="title"
          />

          <label className="edit__label">Price</label>
          <input
            onChange={props.handleChange}
            className="edit__input"
            name="price"
          />

          <label className="edit__label">Location</label>
          <input
            onChange={props.handleChange}
            className="edit__input"
            name="location"
          />

          <label className="edit__label">Category</label>
          <select
            onChange={props.handleChange}
            id="category"
            className="edit__input edit__input--select"
            name="category"
          >
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="general">General</option>
            <option value="gardening">Gardening</option>
          </select>
          <label className="edit__label">Description</label>
          <input
            onChange={props.handleChange}
            className="edit__input"
            name="description"
          />

          <label className="edit__label">
            Would You like your post on the hero banner? (10pts)
          </label>
          <div className="edit__checkbox-container">
            <input
              onChange={props.handleChange}
              type="checkbox"
              disabled={props.currentUser.points > 10 ? false : true}
              className="edit__input edit__input--checkbox"
              value={true}
              name="premium"
            />
            <label className="edit__label">Sure!</label>
          </div>
        </div>
        <button className="edit__btn">
          <FaArrowRight className="edit__btn-icon" />
          <p className="edit__btn-text">Submit</p>
        </button>
      </form>
    </section>
  );
};
export default EditPostForm;
