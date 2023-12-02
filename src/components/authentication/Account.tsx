import { useContext } from "react";
import Access from "./context";

export default function Account() {
    const user = JSON.parse(localStorage.getItem('user') || '');
    const { setAccess } = useContext(Access);

    const onClick = () => {
        setAccess(false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    return(
        <div className="login-page_user">
            <div>Hello, {user?.name}</div>
            <div 
                className="login-page_avatar"
                style={{backgroundImage: `url('${user?.avatar}')`}}>
            </div>
            <button className="login-page_button__logout" onClick={() => onClick()}>
                Logout
            </button>
        </div>
    )
}