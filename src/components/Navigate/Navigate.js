import styles from "./Navigate.module.css";
import {BasicSelectCurrency} from "../DropDown/Currency";
import {BasicSelectProvider} from "../DropDown/Provider";


export function Navigate() {
    return (
        <div className={styles.navigate}>
            <div className={styles.drop}>
                <BasicSelectCurrency/>
            </div>
            <div className={styles.drop}>
                <BasicSelectProvider/>
            </div>
        </div>
    )
}
