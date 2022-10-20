import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {ServerURL} from "../../../../server";


export function useGetBook(id) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState(null)

    async function getBook(bookId) {
        try {
            setError(null)
            setLoading(true)
            const response = await axios.get(`${ServerURL}`)
            setData(response.data)
            setLoading(false)

        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response) {
                    setError(err.message)
                    setLoading(false)
                }
            }
        }
    }

    useEffect(() => {
        getBook(id || '')
    }, [])

    return {loading, data, error, getBook}
}
