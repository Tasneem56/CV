import style from "./Header.module.css";
function Header() {
    return (
        <section className={style.header}>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <nav>
                        <div className={style.name}>
                            <h2>Tasneem Mohamed Mahmoud</h2>
                        </div>
                        <ul>
                            {/* <li className={style.name}>
                    <h2>Tasneem Mohamed Mahmoud</h2>
                </li> */}
                            <li className="nav-item">
                                <a href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                {/* <a href="#">Contacts</a> */}
                                <button >
                                    Contacts
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}
export default Header;
