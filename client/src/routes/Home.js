import logo from '../assets/images/Taurus_name.png';
import mock from '../assets/images/mock.png';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Intro from './Intro';
import Page2 from './Page2';
const Home = () => {
    return (
        <div className="w-full h-full bg-app-blue overflow-auto">
            <Navbar/>
            <Intro/>
            <Page2/>
        </div>
    )
};

export default Home;