import {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftMenu from "./components/LeftMenu.jsx";
import QuestionList from "./components/QuestionList.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3 bg-danger'>
                    <LeftMenu/>
                </div>
                <div className='col-9 bg-info'>
                    <QuestionList/>
                </div>
            </div>
        </div>
    )
}

export default App
