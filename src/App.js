import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div>
                <h1>Bookkeeper</h1>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/teams">Teams</Link> | {" "}
                    <Link to="/teams/1">Team</Link> | {" "}
                    <Link to="/teams/new">new</Link>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
