import React from 'react'
import './Tutor.css'
import { useNavigate } from 'react-router-dom';
import rimuruImg from './rimuru.jpg';


const Tutor = () => {
    return (
        <>
            <form>
                <div className="profile">
                    <img
                        src={rimuruImg}
                        alt=" rimuru"
                    />
                    <input id='description' placeholder='description' />
                    <p>Rimuru Tempest</p>
                    <label htmlFor="subjects">Courses</label>
                    <ul><li>math</li></ul>
                    <ul><li>physics</li></ul>
                    <ul><li>Geography</li></ul>
                    <br />
                    <p>qualifications and experience</p>
                    <input type="text" />
                    <button id="sub" >Add</button>


                </div>

            </form>

            <form>
                <div className="profile">
                    <img
                        src={rimuruImg}
                        alt=" rimuru"
                    />
                    <input id='description' placeholder='description' />
                    <p>Rimuru Tempest</p>
                    <label htmlFor="subjects">Courses</label>
                    <ul><li>math</li></ul>
                    <ul><li>physics</li></ul>
                    <ul><li>Geography</li></ul>
                    <label htmlFor="input" ></label>
                    <input id="input" required />
                    <br />
                    <p>qualifications and experience</p>
                    <button id="sub" >Add</button>

                </div>

            </form>
            <form>
                <div className="profile">
                    <img
                        src={rimuruImg}
                        alt=" rimuru"
                    />
                    <input id='description' placeholder='description' />
                    <div>
                        <p>Rimuru Tempest</p>
                        <label htmlFor="subjects">Courses</label>
                        <ul><li>math</li></ul>
                        <ul><li>physics</li></ul>
                        <ul><li>Geography</li></ul>
                        <label htmlFor="input" ></label>
                        <input id="input" required />
                        <br />
                        <p>qualifications and experience</p>
                        <button id="sub" >Add</button>
                    </div>

                </div>

            </form>
        </>
    );
}

export default Tutor;