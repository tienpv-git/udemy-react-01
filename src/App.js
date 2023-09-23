import { Outlet } from "react-router-dom"
import "./App.scss";
import Head from "./components/Header/Head";

const App = () => {
    return (
        <div className='app-container'>
            <div className='header-container'>
                <Head />
            </div>
            <div className='main-container'>
                <div className='sidenav-container'>
                </div>
                <div className='app-content'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );

}
export default App;
