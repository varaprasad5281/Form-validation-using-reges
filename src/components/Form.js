import React, { useRef, useState } from "react";

const Form = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const mobileNumber = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const mobileValue = mobileNumber.current.value;

    const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue);
    const validatePassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordValue);
    const validateMobile = /^\+?\d{2}\s*\-?\d+$/.test(mobileValue);

    if (!validateEmail) {
      setErrorMessage("Enter a valid Email address");
      return;
    }
    if (!validatePassword) {
      setErrorMessage(
        "Password must be at least 8 characters, include uppercase, lowercase, and a number"
      );
      return;
    }
    if (!validateMobile) {
      setErrorMessage("Enter a valid Mobile Number with country code");
      return;
    }

    // If validation passes, clear the error message
    setErrorMessage(null);

    // Submit logic
    console.log("Form Submitted", { emailValue, passwordValue, mobileValue });
  };

  return (
    <div className="max-w-[600px] w-full p-20 rounded-md bg-black m-auto mt-20 text-white flex flex-col gap-10">
      <h1 className="m-auto text-3xl font-bold">
        This is Form Validation Practice
      </h1>

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
        <input
          ref={email}
          className="bg-transparent p-4 border border-white rounded-md"
          type="text"
          placeholder="Enter your Email"
        />
        <input
          ref={password}
          className="bg-transparent p-4 border border-white rounded-md"
          type="text"
          placeholder="Enter your Password"
        />
        <input
          ref={mobileNumber}
          className="bg-transparent p-4 border border-white rounded-md"
          type="text"
          placeholder="Enter your Mobile Number"
        />
        {errorMessage && (
          <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="p-3 border-none rounded-md w-full bg-red-600 font-bold text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
