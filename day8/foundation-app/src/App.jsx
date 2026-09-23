import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { AllCompanies } from "./Actual";
import { Trash } from "./Trash";
import { SeachBar } from "./HooksIntro";

export const App = () => {
    const [deletedCompanies, setDeletedCompanies] = useState([]);
    return (
        // <BrowserRouter>
        //     <nav>
        //         <a href={'/hi'}>Find Some</a>
        //         <a href={'/hello'}>Plain Demo</a>
        //     </nav>
        //     <Routes>
        //         <Route
        //             path="/hi"
        //             element={<SeachBar/>}
        //         />
        //         <Route path="/hello" 
        //         element={<h1>Hello there</h1>}/>
        //     </Routes>
        // </BrowserRouter>
        <BrowserRouter>
            <nav>
                <Link to="/">Companies</Link>{" "}
                <Link to="/trash">Trash</Link>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AllCompanies
                            deletedCompanies={deletedCompanies}
                            setDeletedCompanies={setDeletedCompanies}
                        />
                    }
                />
                <Route
                    path="/trash"
                    element={
                        <Trash
                            deletedCompanies={deletedCompanies}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}