import "./dashboard.scss";
import { dashBoardFunction } from "./function";
import { useEffect } from 'react';

export const Dashboard = () => {

    useEffect(() => {
        dashBoardFunction();
    }, []);
    


    return (
        <div class="main__dashboardContainer closed">
            <button class="main__buttonDash"></button>

            </div>
    )
}