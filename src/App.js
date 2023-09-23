import { Outlet, Link } from "react-router-dom"
import "./App.scss";
import Head from "./components/Header/Head";

const App = () => {
    return (
        <div className='app-container'>
            
            <Head />
            <div >
                test link
            </div>
            <div>
                <button>
                    <Link to="/user">Go to user page</Link>
                </button>
                <button>
                    <Link to="/admin">Go to admin page</Link>
                </button>
            </div>
        </div>
    );

}
export default App;
