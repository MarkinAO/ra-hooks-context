import { useState, useContext } from "react";
import Access from "./context";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');    
    const { setAccess } = useContext(Access);

    const onChangeUsername = (event: any) => {
        const text = event.target.value;
        setUsername(text);
    }

    const onChangePassword = (event: any) => {
        const text = event.target.value;
        setPassword(text);
    }

    const onClick = (event: any) => {
        event.preventDefault();
        const reqData = {
            "login": username,
            "password": password
        }
        if(username.length > 0 && password.length > 0) {
            axios.post(import.meta.env.VITE_API_AUTH_URL + '/auth', reqData)
            .then(res => {                
                if(res.statusText === 'OK') {
                    localStorage.setItem("token", JSON.stringify(res.data.token));                    
                    const config = {
                        headers: { Authorization: `Bearer ${res.data.token}` }
                    }
                    return axios.get(import.meta.env.VITE_API_AUTH_URL + '/private/me', config)
                }                
            })
            .then(res => {
                if(res?.statusText === 'OK') {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    setAccess(true);
                }                
            })
            .catch(err => {
                setAccess(false);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                console.error(err.message);
            })
        }
        setUsername('');
        setPassword('');
    }

    return(
        <div className="login-page_form">
            <input 
                type="text" 
                placeholder="Username"
                value={username}
                onChange={(e) => onChangeUsername(e)}
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => onChangePassword(e)}
            />
            <button 
                className="login-page_button"
                onClick={(e) => onClick(e)}
            >
                Login
            </button>
        </div>
    )
}