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
                        <h4 style={{ color: `var(--secondary-color)` }}> ●	Web development basics </h4>
                            - (HTML5 - CSS3 - Bootstrap5 - JS - ES6 )
                        </p>
                        <p className={style.p}>
                        <h4 style={{ color: `var(--secondary-color)` }}>●	Java Script</h4>
                        </p>
                        <p className={style.p}>
                            <h4 style={{ color: `var(--secondary-color)` }}>●	Frontend Web Development</h4>
                            - Information Technology Institute (ITI) Feb 2022 - Mar 2022 (3 months)<br />
                            - I Learn Implemented responsive websites Using (HTML & CSS & JAVASCRIPT & React.js)
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