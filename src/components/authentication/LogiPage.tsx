import { useContext } from "react";
import Access from "./context";
import Login from "./Login";
import Account from "./Account";

export default function LoginPage() {
    const { access, setAccess } = useContext(Access);
    const token = localStorage.getItem('token');
    if(token) {
        setAccess(true);
    }

    return(
        <>
            <div className="login-page_container">
                <div className="login-page_title">Neto Social</div>
                { !access && <Login /> }
                { access && <Account /> }
            </div>
        </>
    )
}