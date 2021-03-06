import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./SignUpForm.scss";

const SignUpForm = (props) => {
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

  function random() {
    switch (props.rng) {
      case 1:
        return <figure className="signup__art-container" />;
        break;
      case 2:
        return (
          <figure className="signup__art-container signup__art-container--img1" />
        );
        break;
      case 3:
        return (
          <figure className="signup__art-container signup__art-container--img2" />
        );
        break;
      default:
        return <figure className="signup__art-container" />;
    }
  }
  function emailLabel() {
    if (props.error.email || props.error.validEmail) {
      if (props.error.email) {
        return <label className="signup__error">Field is required</label>;
      } else if (props.error.validEmail) {
        return <label className="signup__error">Enter a valid email</label>;
      }
    } else {
      return <label className="signup__error signup__error--hidden" />;
    }
  }
  return (
    <section className="signup">
      <motion.form
        variants={itemMain}
        initial="hidden"
        animate="show"
        exit="exit"
        onSubmit={props.handleSignUp}
        className="signup__form"
      >
        <main className="signup__left">
          <h1 className="signup__title">Sign Up</h1>
          <div className="signup__Oauth"></div>
          <label className="signup__label">Username</label>
          <input
            onChange={props.handleChange}
            name="username"
            className={
              props.error.username
                ? "signup__input signup__input--error"
                : "signup__input"
            }
            placeholder="Username"
          />
          <label
            className={
              props.error.username ? "signup__error" : "signup__error--hidden"
            }
          >
            Field is required
          </label>

          <label className="signup__label">Email</label>
          <input
            onChange={props.handleChange}
            name="email"
            className={
              props.error.email || props.error.validEmail
                ? "signup__input signup__input--error"
                : "signup__input"
            }
            placeholder="Jeff@apple.com"
          />
          {emailLabel()}

          <label className="signup__label">Password</label>
          <input
            onChange={props.handleChange}
            name="password"
            type="password"
            className={
              props.error.password
                ? "signup__input signup__input--error"
                : "signup__input"
            }
            placeholder="Choose a strong password"
          />
          <label
            className={
              props.error.password ? "signup__error" : "signup__error--hidden"
            }
          >
            Field is required
          </label>
          <button className="signup__button">Create Account</button>
          <div className="signup__login-container">
            <p className="signup__text">Already have an account? </p>
            <Link to="/login" className="signup__link">
              Log in
            </Link>
          </div>
        </main>
        {random()}
      </motion.form>
    </section>
  );
};

export default SignUpForm;
