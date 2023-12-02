import { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { user, itemData } from './models';
import Details from './Details';

export default function List() {
    let [list, setList] = useState([]);
    let [activeId, setActiveId] = useState();
    let [item, setItem] = useState<itemData | undefined>();
    let [load, setLoad] = useState(false);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + 'users.json')
            .then(res => setList(res.data))
    }, []);

    const onClick = (event: any) => {
        const id = event?.target.dataset.id;
        id !== activeId && setActiveId(id);
        
        setLoad(true);
        axios.get(import.meta.env.VITE_API_URL + `${id}.json`)
            .then(res => {
                setItem(res.data)
                if(res.status === 200) setLoad(false);                
            })
    }

    return(
        <div className="list__container">
            <ul className='list'>
                {
                    list.map((el: user) => {
                        const thisClass = Number(activeId) === el.id ? "listItem listItem__active" : "listItem";

                        return(                        
                            <li 
                                className={thisClass} 
                                data-id={el.id} 
                                key={uuidv4()}
                                onClick={(e) => onClick(e)}
                                >
                                    {el.name}
                            </li>
                        )
                    })
                }
            </ul>
            {
                load && <div className="loader"></div>
            }
            {
                !load && <Details item={item} />
            }            
        </div>        
    )
}