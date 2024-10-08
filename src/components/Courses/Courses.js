import { useState } from 'react';
import style from './Courses.module.css'
function Courses() {
    const [hovered, setHovered] = useState(false);
    return (
        <section id='courses' className={style.course}>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <h2 style={{ color: `var(--main-color)` }}>Courses : </h2>
                        <p className={style.p}>
                            <h4 style={{ color: `var(--secondary-color)` }}>●	React.js</h4>
                            - (JS revision – React basics – React Hooks – Redux toolkit)<br />
                            - Online Course <p style={{ color: `#808080` }}>Jun 2024</p>
                        </p>
                        <p className={style.p}>
                            <h4 style={{ color: `var(--secondary-color)` }}>●	Frontend Web Development</h4>
                            - (HTML - CSS - JAVASCRIPT - ES6 - Bootstrap5 - React.js)<br />
                            - Information Technology Institute (ITI) <p style={{ color: `#808080` }}>Jul 2023 - Sep 2023</p>
                        </p>
                        <p className={style.p}>
                            <h4 style={{ color: `var(--secondary-color)` }}> ●	Web development basics
                            </h4>
                            - (HTML5 - CSS3 - JS )<br />
                            - Online Course <p style={{ color: `#808080` }}>Feb 2023</p>
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className={style.box}>
                            <div
                                className={style.shape}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                <p className={style.code}>{hovered ? '>_<' : '>_'}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Courses;