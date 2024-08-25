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
                            <h4 style={{ color: `var(--secondary-color)` }}> ●	Web development basics
                            </h4>
                            - Online Course Feb 2023<br />
                            - (HTML5 - CSS3 - JS )
                        </p>
                        <p className={style.p}>
                            <h4 style={{ color: `var(--secondary-color)` }}>●	Frontend Web Development</h4>
                            - Information Technology Institute (ITI) Jul 2023 - Sep 2023<br />
                            - (HTML - CSS - JAVASCRIPT - ES6 - Bootstrap5 - React.js)
                        </p>
                        <p className={style.p}>
                            <h4 style={{ color: `var(--secondary-color)` }}>●	React.js</h4>
                            - Online Course Jun 2024<br />
                            - (JS revision – React basics – React Hooks – Redux
                            toolkit)
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