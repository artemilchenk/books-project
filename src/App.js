import styles from './App.module.css'
import {useGetBooks} from "./api/models/book/hook/getBooksHook";
import {List} from "./components/List/List";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Bookpage} from "./components/BookPage/Bookpage";


function App() {
    const {loading, data, error, getBooks} = useGetBooks()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/book/:id" element={<Bookpage/>}/>
                <Route index element={<div className={styles.app}>
                    <List list={data}/>
                </div>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

