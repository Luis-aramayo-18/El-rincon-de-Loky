import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header flex justify-center items-center flex-col">
        <div className="w-5/12 h-5/12 flex justify-center items-center">
          <img className="" src="../../public/Img/logo-nav.png" alt="" />
        </div>

        <nav className="flex justify-center items-center mt-2">
          <div>
            <ul className="flex flex-col gap-2">
              <li>
                <div className="flex items-center gap-1 text-white font-extralight text-sm">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "navlink"
                    }
                    to="/"
                  ><i class="bx bx-home-alt-2"></i>
                    HOME
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1 text-white font-extralight text-sm">
                  
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "navlink"
                    }
                    to="/about"
                  >
                    <i class="bx bx-coffee"></i>
                    ABOUT
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1 text-white font-extralight text-sm">
                  
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "navlink"
                    }
                    to="/services"
                  >
                    <i class="bx bx-cut"></i>
                    SERVICES
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1 text-white font-extralight text-sm">
                  
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "navlink"
                    }
                    to="/gallery"
                  >
                    <i class="bx bx-camera"></i>
                    GALLERY
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1 text-white font-extralight text-sm">
                  
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "navlink"
                    }
                    to="/contact"
                  >
                    <i class="bx bx-at"></i>
                    CONTACT
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="login-btn mt-5">
          <Link to="/login">INGRESAR</Link>
        </div>

        {/* <div className="container-socials flex justify-center gap-2 mt-4">
          <div className="flex justify-center items-center">
            <a className="flex" href="">
              <i class="bx bxl-instagram"></i>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a className="flex" href="">
              <i class="bx bxl-facebook"></i>
            </a> 
          </div>
          <div className="flex justify-center items-center">
            <a className="flex" href="">
              <i class="bx bxl-gmail"></i>
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Header;
