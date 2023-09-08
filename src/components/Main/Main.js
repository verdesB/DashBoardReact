import { SearchBar } from "./SearchBar/SearchBar"
import { Dashboard } from "../Dashboard/Dashboard";
import './main.scss';
import '../Dashboard/dashboard.scss'
import { dashBoardFunction } from "../Dashboard/function";
import { useEffect } from "react";
import { AnalogicClock } from "../Dashboard/AnalogicClock/AnalogicClock";

export const Main = () => {

  
    
    return (
        <main className="main">
            <AnalogicClock/>
            <SearchBar/>
            
            <Dashboard/>
            

        </main>
    )
}