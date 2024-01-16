import { useEffect, useState } from "react"
import request from "../util/request";


const useRequest = (url,initialData)=>{
    const [state,setState] = useState(initialData);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        request(url)
        .then(data => setState(data))
        .finally(() => setLoading(false))
    },[url])

    return{
        loading,
        data : state
    }
};

export default useRequest;