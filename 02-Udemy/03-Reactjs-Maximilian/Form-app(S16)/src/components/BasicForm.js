import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.trim().includes("@");

  const {
    value: enteredFirstName,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
  } = useInput(isNotEmpty);
  const {
    value: enteredLastName,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(enteredFirstName, enteredLastName);
    resetFirstName();
    resetLastName();
    resetEmailInput();
  };
  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && <p className="error-text">Please enter your first name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && <p className="error-text">Please enter your last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Please input a valid e-mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
