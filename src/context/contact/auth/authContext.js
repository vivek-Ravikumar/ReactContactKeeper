import { createContext } from "react";
import AuthState from './AuthState'
const authContext = createContext(AuthState);

export default authContext;
