import { useState, useEffect } from "react";

const useResturant = (API_RES, resid) => {
    const [resListapi, setResListapi] = useState(null);
    useEffect(() => {
        resList();
    }, []);

    const resList = async () => {
        const resListData = await fetch(API_RES + resid)
        const json = await resListData.json();
        setResListapi(json)
    }
    return resListapi;
}
export default useResturant;