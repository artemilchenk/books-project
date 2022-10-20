import styles from './List.module.css'
import {Book} from "../Book/Book";
import {useEffect, useState} from "react";
import {Navigate} from "../Navigate/Navigate";
import {useDispatch, useSelector} from "react-redux";
import {setSkip} from "../../store/app.slice";
import {useGetBooks} from "../../api/models/book/hook/getBooksHook";

export function List() {
    const dispatch = useDispatch()
    const {loading, data, error, getBooks} = useGetBooks()
    const [books, setBooks] = useState([])
    let skip = useSelector(state => state.app.skip)
    const providerState = useSelector(state => state.app.provider)
    const currencyState = useSelector(state => state.app.currency)

    useEffect(() => {
        setBooks(data?.filter(book => book.provider.includes(providerState)))
        if(currencyState) setBooks(data?.filter(book => book.provider.includes(providerState) && Object.keys(book.real).includes(currencyState)))
    }, [data, providerState, currencyState])

    return (
        <div className={styles.list}>
            <Navigate/>
            <div className={styles.items}>
                {books?.sort((a, b) => a.collections.popularity - b.collections.popularity).slice(skip, skip + 12).map(book =>
                    <Book
                        key={book.id}
                        bookOne={book}/>
                )}
            </div>
            <button
                onClick={() => {
                    dispatch(setSkip(skip + 12))
                }}
                className={styles.items__button}>Показать еще
            </button>
        </div>

    )
}
