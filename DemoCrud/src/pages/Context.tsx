import { createContext } from "react-router-dom";

// 1. Create
// const MyContext = createContext(null);

// // 2. Provide
// function App() {
//   return (
//     <MyContext.Provider value="Hello">
//       <Child />
//     </MyContext.Provider>
//   );
// }

// // 3. Use
// function Child() {
//   const value = useContext(MyContext);
//   return <h1>{value}</h1>;
// }





//////////////////////////////


// context/AuthContext.tsx


// import { createContext, useContext, useState } from "react";

// // 1. Create
// const AuthContext = createContext<any>(null);

// // 2. Provider
// export function AuthProvider({ children }: any) {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const login = (token: string) => {
//     localStorage.setItem("token", token);
//     setToken(token);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // 3. Hook (easy usage)
// export function useAuth() {
//   return useContext(AuthContext);
// }



// main.tsx
// import { AuthProvider } from "./context/AuthContext";

// <BrowserRouter>
//   <AuthProvider>
//     <App />
//   </AuthProvider>
// </BrowserRouter>



// 🚀 Step 3: Use in Login
// import { useAuth } from "../context/AuthContext";

// const { login } = useAuth();

// login("your_token_here");