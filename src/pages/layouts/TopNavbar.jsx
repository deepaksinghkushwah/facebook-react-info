import { Link } from "react-router-dom";
import { useUserStore } from "../../store/useStore";

const TopNavbar = () => {
  const token = useUserStore((state) => state.token);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              {/* dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </a>
                <ul className="dropdown-menu">
                  {token != null ? (
                    <>
                    <li className="nav-item">
                        <Link to="/profile" className="dropdown-item">
                          Profile
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/facebook-page" className="dropdown-item">
                          Page 1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/facebook-page" className="dropdown-item">
                        Page 2
                        </Link>
                      </li>
                      

                     
                      {/* <li className="nav-item">
                        <Link
                          to="#"
                          onClick={handleLogout}
                          className="dropdown-item"
                        >
                          Logout
                        </Link>
                      </li> */}
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <Link to="/login" className="dropdown-item">
                          Login
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
