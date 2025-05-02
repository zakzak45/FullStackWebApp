import './HomePage.css';


const HomePage = () => {
    return (
        <>
            <div className="home-page">
                <h2>FrontEndWebApp</h2>

            </div>
            <div className="main">

                <label for="student" id="St">If you are student click here</label>
                <button id="student"><a href="#">Student</a></button>
                <label for="tutor" id="Tt">If youre a tutor click here</label>
                <button id="tutor"><a href="#">Tutor</a></button>
            </div>
        </>
    );
}

export default HomePage;