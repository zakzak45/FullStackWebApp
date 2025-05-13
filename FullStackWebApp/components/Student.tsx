import './Student.css'
import { useNavigate } from 'react-router-dom';


const Student = () => {



    return (
        <>
            <div className="main">

                <nav className="main-nav">
                    <ul><li><a>Tutors</a></li></ul>
                    <ul><li><a>Courses</a></li></ul>
                </nav>
                <div>
                    <p>profileLearning(with status)</p>
                </div>

                <form>
                    <label htmlFor="course">Course</label>
                    <input id="course" required />
                    <p>learning style</p>
                    <p>whistlist for what he wants</p>
                    <label htmlFor="description" >Why</label>
                    <input id="description" required />
                    <button id="sub" >Submit</button>
                </form>
            </div>
        </>



    );
}

export default Student;