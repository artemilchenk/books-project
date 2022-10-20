import {useNavigate, useParams} from "react-router-dom";
import styles from './Bookpage.module.css'


export function Bookpage() {
    const {id} = useParams()
    const navigate = useNavigate()

    return (
        <div className={styles.bookpage}>
            <button
                onClick={()=>{
                    navigate(-1)
                }}
                className={styles.bookpage__button}>На главную</button>
            {id.split('.').at(-1)}
        </div>
    )
}
