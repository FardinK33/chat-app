import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const isValid = validateInputs(
      fullName,
      username,
      password,
      confirmPassword,
      gender
    );

    if (!isValid) return;

    setLoading(true);
    try {
      let response = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error);

      localStorage.setItem("user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      // console.log("Error: ", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

function validateInputs(fullName, username, password, confirmPassword, gender) {
  // Check for empty fields
  if ([fullName, username, password, confirmPassword].includes("")) {
    toast.error("Please fill in all the required fields.");
    return false;
  }

  // Validate that passwords match
  else if (password !== confirmPassword) {
    toast.error("Passwords do not match!");
    return false;
  }

  // Validate length of password
  else if (password.length < 8 || password.length > 32) {
    toast.error("Password must be between 8 and 32 characters long");
    return false;
  }

  // Validate gender selection
  else if (!gender) {
    toast.error("Gender is required.");
    return false;
  }

  // If everything passed validation return true
  return true;
}
