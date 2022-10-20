import {useEffect, useState} from "react";
import {AxiosError} from "axios";
import books from '../../../../games_test.json';

export function useGetBooks() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    async function getBooks() {
        try {
            setError(null)
            setLoading(true)

            let arr = []
            for (let obj in books) {
                const book = {id: obj, ...books[obj]}
                arr.push(book)
            }
            setData(arr)
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
        getBooks()
    }, [])

    return {loading, data, error, getBooks}
}
