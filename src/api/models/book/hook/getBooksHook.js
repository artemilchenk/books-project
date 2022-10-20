import {useEffect, useState} from "react";
import {AxiosError} from "axios";
import books from '../../../../games_test.json';

export function useGetBooks() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    console.log(data)

    async function getBooks(provider = '') {
        try {
            setError(null)
            setLoading(true)
            const response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    let arr = []
                    for (let obj in books) {
                        const book = {id: obj, ...books[obj]}
                        arr.push(book)
                    }
                    resolve(arr)
                }, 500)
            }).then((data) => {
                if (provider) data = data.filter(book => book.provider === provider)
                return data
            })
            setData(response)
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
