import styles from './Book.module.css'
import {useNavigate} from "react-router-dom";


export function Book({bookOne}) {
    const navigate = useNavigate()

    return (
        <div
            onClick={()=>{
                navigate(`book/${bookOne?.id.split('/').join('.')}`)
            }}
            className={styles.book}>
            <div className={styles.book__cover}></div>
            <div className={styles.book__text}>{bookOne?.title}</div>
        </div>
    )
}
