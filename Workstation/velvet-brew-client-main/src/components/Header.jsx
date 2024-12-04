import logo from "../assets/more/logo1.png";
import headerBg from "../assets/more/15.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Header = () => {
  const { user, loading,logOut } = useContext(AuthContext);
  console.log(user, loading);
  return (
    <header className="bg-header-bg">
      <div className="max-w-7xl mx-auto md:p-2 lg:p-3 bg-div-bg flex justify-between">
        <div className=" flex justify-center items-center ">
          <div>
            <img className="w-8" src={logo} alt="logo" />
          </div>
          <div>
            <h2 className="font-rancho text-2xl md:text-3xl lg:text-4xl text-white">
              Velvet Brew
            </h2>
          </div>
        </div>
        <ul className=" text-white flex gap-3 font-rancho text-xl md:text-2xl lg:text-3xl ">
          {user ? (
            <>
              <Link to={"/users"} className="hover:text-orange-400">
                Users
              </Link>
              <button onClick={logOut}>Logout</button>
            </>
          ) : (
            <>
              <Link to={"/login"} className="hover:text-orange-400">
                Login
              </Link>
              <Link to={"/register"} className="hover:text-orange-400">
                Register
              </Link>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
