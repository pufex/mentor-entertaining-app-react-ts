import "./Nav.css"
import { useIconsContext } from "../../contexts/Icons"
import { NavLink, Link } from "react-router-dom";

const Nav = (): React.ReactElement => {

    const { 
        MdMovie,
        SiWindows11,
        PiTelevisionSimpleFill,
        FaBookmark,
        MdLocalMovies
    } = useIconsContext();

    return <nav className="nav">
        <section className="nav--top">
            <div className="nav__logo-container">
                <NavLink
                    to={"/"}
                >
                    <MdMovie
                        className="nav__logo"
                        size={40}
                    />
                </NavLink>
            </div>
            <div className="nav__links">
                <NavLink
                    className={({isActive, isPending}) => 
                        isPending 
                            ? "nav__link nav__link--pending" :
                        isActive 
                            ? "nav__link nav__link--active" : 
                        "nav__link"
                    }
                    to={"/"}
                >
                    <SiWindows11
                        className="nav__link-icon"
                        size={20}
                    />
                </NavLink>
                <NavLink
                    className={({isActive, isPending}) => 
                        isPending 
                            ? "nav__link nav__link--pending" :
                        isActive 
                            ? "nav__link nav__link--active" : 
                        "nav__link"
                    }
                    to={"/movies"}
                >
                    <MdLocalMovies
                        className="nav__link-icon"
                        size={29}
                    />
                </NavLink>
                <NavLink
                    className={({isActive, isPending}) => 
                        isPending 
                            ? "nav__link nav__link--pending" :
                        isActive 
                            ? "nav__link nav__link--active" : 
                        "nav__link"
                    }
                    to={"/tv-shows"}
                >
                    <PiTelevisionSimpleFill
                        className="nav__link-icon"
                        size={29}
                    />
                </NavLink>
                <NavLink
                    className={({isActive, isPending}) => 
                        isPending 
                            ? "nav__link nav__link--pending" :
                        isActive 
                            ? "nav__link nav__link--active" : 
                        "nav__link"
                    }
                    to={"/bookmarked"}
                >
                    <FaBookmark
                        className="nav__link-icon"
                        size={29}
                    />
                </NavLink>
            </div>
        </section>
        <section className="nav--bottom">
            <div className="nav__profile-container">
                <Link
                    to="/profile"
                    className="nav__profile-link size-transition"
                >
                    <img 
                        src="https://randomuser.me/api/portraits/women/37.jpg" 
                        alt="Your face"
                        className="nav__profile"
                    />
                </Link>
            </div>
        </section>
    </nav>
  
}

export default Nav
