import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface HeaderProps {
  onLoginClick?: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#2dc275] to-[#25a563] shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="mx-30">
        {/* Main nav */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://salt.tkbcdn.com/ts/ds/32/dc/a2/7871f1207e8c4c2747698b5aa6d15a56.png"
              alt="tkbvnpay"
              width="127"
              height="41"
              className="drop-shadow-lg"
            />
          </Link>
          
          {/* Search */}
          <div className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
            <FontAwesomeIcon 
              icon={faMagnifyingGlass} 
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                searchFocused ? 'text-[#2dc275]' : 'text-gray-400'
              }`}
            />
            <input
              type="text"
              placeholder="Tìm kiếm sự kiện, nghệ sĩ..."
              className="bg-white pl-12 pr-4 py-3 rounded-lg w-[24rem] focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 shadow-md hover:shadow-lg"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {/* Nav menu */}
          <nav className="flex gap-6 items-center font-semibold">
            <Link 
              to="/my-tickets" 
              className="hover:text-amber-400 text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              <FontAwesomeIcon icon={faTicket} className="group-hover:rotate-12 transition-transform duration-300" />
              Vé của tôi
            </Link>
            <Link 
              to="/about" 
              className="hover:text-amber-400 text-white transition-colors duration-300"
            >
              Về chúng tôi
            </Link>
            <button
              onClick={onLoginClick}
              className="bg-white text-[#2dc275] hover:bg-amber-400 hover:text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faUser} />
              Đăng nhập | Đăng ký
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
