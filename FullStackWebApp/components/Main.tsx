import './Main.css'



const Student = () => {



    return (
        <>
            <div className="main">
                <nav className="main-nav">
                    <ul><li><a>Tutors</a></li></ul>
                    <ul><li><a>Courses</a></li></ul>
                </nav>

                <form>
                    <label htmlFor="course">Course</label>
                    <input id="course" required />
                    <label htmlFor="description" >Why</label>
                    <input id="description" required />
                    <button id="sub" >Submit</button>
                </form>
            </div>
        </>



    );
}

export default Student;