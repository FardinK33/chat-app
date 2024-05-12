import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const useAuthContext = () => {
  return useContext(authContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <authContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </authContext.Provider>
  );
};

// import { createContext, useState } from "react";

// export const authContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState(
//     JSON.parse(localStorage.getItem("user-info")) || null
//   );

//   return (
//     <authContext.Provider value={{ authUser, setAuthUser }}>
//       {children}
//     </authContext.Provider>
//   );
// };
