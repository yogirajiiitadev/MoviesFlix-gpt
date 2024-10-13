import { Header } from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null); // Ref for name input, only used in sign-up
  const [ErrorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const toggleSigninForm = () => {
    setIsSignInForm(!IsSignInForm);
    setErrorMessage(""); // Reset error message when toggling forms
  };

  const handleButtonClick = () => {
    // Safely access ref values with optional chaining
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";
    const nameValue = IsSignInForm ? "" : name.current?.value || ""; // Use name only if it's a sign-up form

    // Validate form data only if refs are set
    const error_msg = checkValidData(emailValue, passwordValue, nameValue,IsSignInForm);
    setErrorMessage(error_msg);

    if (error_msg) {
      return;
    }

    // Sign-in / Sign-up logic using Firebase Authentication API
    if (!IsSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName} = auth.currentUser;
                dispatch(addUser({
                    uid : uid,
                    email : email,
                    displayName : displayName
                }));
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign In Logic

      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="my-36 mx-auto right-0 left-0 w-3/12 absolute p-12 bg-black text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 my-2 bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full px-4 py-2 my-2 bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 my-2 bg-gray-600"
        />
        <p className="text-red-500 pt-2 font-bold">{ErrorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>
          {IsSignInForm
            ? "New to MoviesFlix? Sign Up"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};
