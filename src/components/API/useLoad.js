import { useEffect, useState } from "react";
import API from "./API";

const useLoad = (loadEndpoint) => {
    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadRecords = async (endpoint) => {
        const response = await API.get(endpoint);
        if (response.isSuccess) setRecords(response.result);
        setIsLoading(false);
    }

    useEffect(() => { loadRecords(loadEndpoint); }, []);

    return [ records, isLoading, setRecords, loadRecords ];
}

export default useLoad;