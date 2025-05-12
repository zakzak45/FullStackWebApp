import React from 'react'


const Tutor = () => {
    return (
        <>
            <form>
                <label htmlFor="course">Skills</label>
                <input id="course" placeholder='enter your Skills' required />
                <label htmlFor="description" ></label>
                <input id="description" required />
                <button id="sub" >Submit</button>
            </form>
        </>
    );
}

export default Tutor;