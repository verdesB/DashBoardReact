import { Clock } from "./Clock/Clock";
import "./dashboard.scss";
import { dashBoardFunction } from "./function";
import { useEffect } from 'react';
import { AnalogicClock } from "./AnalogicClock/AnalogicClock";
import Todolist from "../TodoList/Todolist";

export const Dashboard = () => {

    useEffect(() => {
        dashBoardFunction();
    }, []);


    return (
        <div class="main__dashboardContainer closed">
            <button class="main__buttonDash"></button>
            <div className="scroll">
            
            
            <Clock/>
            <Todolist/>
            
</div>
            </div>
    )
}