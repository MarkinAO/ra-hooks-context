import axios from "axios";
import { useEffect, useState } from "react";

type newsType = {
    content: string
    id: string
    image: string
    title: string
}

export default function News() {
    const [news, setNews] = useState<Array<newsType>>([]);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token') || '')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
    
        axios.get(import.meta.env.VITE_API_AUTH_URL + '/private/news', config)
            .then(res => {            
                if(res.statusText = 'OK') {
                    setNews(res.data);
                }
            })
            .catch(err => console.error(err.message))
    }, []);

    return(
        <div className="news">
            {news.map(el => {
                return(
                    <div className="news-item" key={el.id}>
                        <div>
                            <img src={el.image} />
                        </div>
                        <div className="news-item_title">{el.title}</div>
                        <div className="news-item_content">{el.content}</div>
                    </div>                    
                )                
            })}
        </div>
    )
}