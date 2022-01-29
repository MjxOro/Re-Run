import "./MainContent.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MainContent = (props) => {
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

  //const transition = { duration: 0.6, ease:[0.43,0.13,0.23,0.96]}

  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="main"
    >
      <h1 className="main__h1">What Other People are Selling</h1>
      <div className="main__grid">
        {props.data.map((card) => (
          <motion.div variants={itemMain}>
            <Link to={"/post/" + card._id} className="main__card-link">
              <motion.div
                className="main__card"
                whileHover={{ scale: 1.1 }}
                variants={item}
              >
                <img src={card.image} className="main__img" />
                <div className="main__text-container">
                  <p className="main__title">{card.title}</p>
                  <p className="main__price">{card.price}</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};

export default MainContent;
