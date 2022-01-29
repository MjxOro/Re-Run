import { Link } from "react-router-dom";
import "./MyAds.scss";
import { motion } from "framer-motion";
import { FaRegEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";

const MyAds = (props) => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };

  return (
    <motion.section
      className="myads"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="myads__container">
        <div className="myads__header">
          <FaArrowLeft onClick={props.handleGoback} className="myads__goback" />
          <h1 className="myads__h1">My Postings</h1>
        </div>
        <main className="myads__grid">
          {props.data.map((card) => (
            <motion.div variants={itemMain}>
              <motion.div
                className="myads__card"
                whileHover={{ scale: 1.1 }}
                variants={item}
              >
                <img className="myads__img" src={card.image} />
                <div className="myads__info-container">
                  <div className="myads__text-container">
                    <p className="myads__title">{card.title}</p>
                    <p className="myads__price">{card.price}</p>
                  </div>
                  <div className="myads__icon-container">
                    <Link className="myads__link" to={"/edit/post/" + card._id}>
                      <FaRegEdit className="myads__edit" />
                    </Link>
                    <div
                      className="myads__link"
                      id={card._id}
                      onClick={props.handleOpenDelete}
                    >
                      <ImCross className="myads__delete" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </main>
      </div>
    </motion.section>
  );
};
export default MyAds;
