import './HomePage.css';

import { useNavigate } from 'react-router-dom';



const HomePage = () => {
    const navigate = useNavigate();
    const handleTutorClick = () => {
        navigate('/LoginInPage.tsx', { replace: true });
    };

    return (
        <>

            <div className="home-page">
                <h2>FrontEndWebApp</h2>

            </div>
            <div className="main">

                <button id="tutor" onClick={handleTutorClick} >Tutor</button>
                <button id="student"> Student</button>

            </div>

        </>
    );
}

export default HomePage;