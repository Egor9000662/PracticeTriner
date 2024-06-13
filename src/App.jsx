import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import TaskListPage from "./pages/TaskListPage/TaskListPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import RulesPage from "./pages/RulesPage/RulesPage.jsx";
import SideBar from "./components/Header/SideBar/SideBar.jsx";
import {useEffect, useState} from "react";

function App() {
    const [burger, setBurger] = useState(false)
    const [showInfo,setShowInfo] = useState(true)
    useEffect(()=>{
        if(window.innerWidth < 990)setBurger(true)
    })
    return (
        <div className="app" id='app'>
            { showInfo && (burger ? <SideBar pageWrapId={"page-wrap"} outerContainerId={"app"}/> : <Header/> )}
            <div className="content">
                <Routes>
                    <Route path="/:courseId" element={<HomePage/>}/>
                    <Route path="/:courseId/:id" element={<TaskListPage/>}/>
                    <Route path="/:courseId/:id/:taskId" element={<TaskPage setShowInfo={setShowInfo}  />}/>
                    <Route path="/practicum-rules" element={<RulesPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </div>
            {showInfo && <Footer/>}
        </div>
    );
}

export default App;
