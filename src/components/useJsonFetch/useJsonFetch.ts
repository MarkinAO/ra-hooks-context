import axios from "axios";
import { useState, useEffect } from "react";

interface useJsonFetchProps {
    url: string
    opts?: object
}

export default function useJsonFetch(props: useJsonFetchProps) {
    let [data, setData] = useState<any>();
    let [load, setLoad] = useState(true);
    let [errore, setErrore] = useState<any>();
    
    const { url, opts } = props;
    const axiosOpts = {
        method: 'get',
        ...opts,
        url
    }

    useEffect(() => {
        axios(axiosOpts)
        .then((res) => {
            if(res.statusText === 'OK') {
                setLoad(false);
                setData(res.data);
            }
        })
        .catch((err) => {
            setLoad(false);
            setErrore(err);
        })
    }, [])    

    return [data, load, errore]
}