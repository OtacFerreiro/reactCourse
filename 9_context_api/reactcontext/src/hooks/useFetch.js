import { useEffect, useState } from "react";

//4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //5 - refatorando o post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);

    //6 - Loading
    const [loading, setLoading] = useState(false);

    //7 - Error
    const [error, setError] = useState(null);

    //8 - Desafio
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        switch(method) {
            case "POST": {
                setHttpPost(data);
                break;
            }
            case "DELETE": {
                setHttpDelete();
                setItemId(data);
                break;
            }
            default:
                break;
        }

        setMethod(method);
    }

    const setHttpPost = (data) => {
        setConfig({
            method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }

    const setHttpDelete = () => {
        setConfig({
            method,
            headers: {
                "Content-type": "application/json"
            }
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error.message);

                setError("Houve um erro ao carregar os dados.");
            }            

            setLoading(false);
        }

        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            let response;

            switch(method) {
                case "POST": {
                    response = await fetch(...[url, config]);
                    break;
                }
                case "DELETE": {
                    const deleteUrl = `${url}/${itemId}`;
                    response = await fetch(deleteUrl, config);
                    break;
                }
                default:
                    break;
            }
                        
            const data = await response.json();

            setCallFetch(data);
        };

        if(method) {
            httpRequest();
        }
    }, [config, method, url, itemId]);    

    return { data, httpConfig, loading, error };
}