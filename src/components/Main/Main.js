import { SearchBar } from "./SearchBar/SearchBar"
import { Dashboard } from "../Dashboard/Dashboard";
import './main.scss';

export const Main = () => {
    return (
        <main className="main">
            <SearchBar/>
            <Dashboard/>

        </main>
    )
}