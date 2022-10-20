import styles from "./Navigate.module.css";
import {BasicSelectCurrency} from "../DropDown/Currency";
import {BasicSelectProvider} from "../DropDown/Provider";


export function Navigate({getBooks}) {
    return (
        <div className={styles.navigate}>
            <div className={styles.drop}>
                <BasicSelectCurrency/>
            </div>
            <div className={styles.drop}>
                <BasicSelectProvider getBooks={getBooks}/>
            </div>
        </div>
    )
}
