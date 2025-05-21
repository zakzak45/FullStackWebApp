import './Student.css'
import { useNavigate } from 'react-router-dom';
import sasukeImg from './sasuke.jpg';


const Student = () => {



    return (
        <>
            <div className="main">

                <nav className="main-nav">
                    <ul><li><a href='#'>Tutors</a></li></ul>
                </nav>
                <div>
                    <img src={sasukeImg} alt='sasuke' />
                    <p>Sasuke uchiha(with status}</p>
                </div>

                <form>
                    <p>visual learner</p>
                    <p>I want to learn</p>
                    <input type="text" />
                    <ul><li>1</li></ul>
                    <ul><li>2</li></ul>
                    <ul><li>3</li></ul>
                    <button id="sub" >Add</button>
                </form>
            </div>
        </>



    );
}

export default Student;