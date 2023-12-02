import { useState } from "react";
import "./Authentication.css";
import Access from "./context";
import LoginPage from "./LogiPage";
import Content from "./Content";

export default function Authentication() {
    const [access, setAccess] = useState(false);
    return(
        <>
            <Access.Provider value={{access, setAccess}}>
                <LoginPage />
                <Content />
            </Access.Provider>            
        </>
    )
}