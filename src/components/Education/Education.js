import style from './Education.module.css'
function Education() {
    return (
        <section id='edu' className={style.edu}>
            <div className='container'>
            <div className='row'>
            <h2 style={{ color: `var(--main-color)` }}>Education : </h2>
                <div className='col-sm-12 col-md-6'>
                    <p>
                        ●	Have a Bachelor’s degree in Computer science from faculty of Computers and Information Menoufia University, Shebin El-Kom. <p style={{ color: `#808080` }}>Oct 2021 - Jul 2024</p>
                    </p>
                    <p>
                        <p style={{ color: `var(--secondary-color)` }}>●	Relevant Coursework : </p>
                        [Computer Fundamentals, Web Development, Web Design, Database Management Systems, Operating System ,Object - Oriented Programming , Data Structure , Java script essential training , Java script advanced training , Node Framework, Distributed Systems, Embedded Systems.]
                    </p>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <img src='./imgs/edu.png' alt='edu.png'/>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Education;