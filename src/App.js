import styles from './App.module.css'
import {List} from "./components/List/List";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Bookpage} from "./components/BookPage/Bookpage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/book/:id" element={<Bookpage/>}/>
                <Route index element={<div className={styles.app}>
                    <List />
                </div>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

