import { createContext } from "react";

const defaultAuth = 0

const AuthContext = createContext(defaultAuth)

export default AuthContext
export {
  defaultAuth
}