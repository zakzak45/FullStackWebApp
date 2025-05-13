import React from 'react'
import { useNavigate } from 'react-router-dom';

const Tutor = () => {
    return (
        <>
            <form>
                <div className="profile">
                    <h1>profile</h1>
                </div>
                <label htmlFor="course">Subjects offered</label>
                <input id="course" placeholder='enter your Skills' required />
                <label htmlFor="description" ></label>
                <input id="description" required />
                <button id="sub" >Submit</button>
            </form>
        </>
    );
}

export default Tutor;