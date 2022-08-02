import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../store";
import classes from "./Auth.module.css";

const Auth = () => {
  const passwordInputRef = useRef();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (passwordInputRef.current.value.length < 6) return;
    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
