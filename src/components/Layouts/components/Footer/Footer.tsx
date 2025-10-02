import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import bctLogo from "../../../../assets/bct-registered.svg";

const Footer = () => {
  return (
    <>
      {/* Main Footer Links */}
      <div className="w-full mx-auto bg-[#2a2a2a]">
        <div className="mx-30 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link to="/" className="inline-block mb-4">
                <img
                  src="https://salt.tkbcdn.com/ts/ds/32/dc/a2/7871f1207e8c4c2747698b5aa6d15a56.png"
                  alt="tkbvnpay"
                  width="127"
                  height="41"
                />
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Nền tảng đặt vé sự kiện hàng đầu Việt Nam
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Liên kết</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                  >
                    Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/all-events"
                    className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                  >
                    Sự kiện
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-tickets"
                    className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                  >
                    Vé của tôi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Hỗ trợ</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                  >
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                  >
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                  >
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#2dc275] transition-colors duration-300"
                  >
                    Hướng dẫn thanh toán
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Liên hệ</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[#2dc275] mt-1"
                  />
                  <span className="text-sm">
                    123 Đường ABC, Quận 1, TP.HCM
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <FontAwesomeIcon icon={faPhone} className="text-[#2dc275]" />
                  <span className="text-sm">1900 1234</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[#2dc275]"
                  />
                  <span className="text-sm">support@ticketbox.vn</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="w-full mx-auto bg-[#1d1d1d]">
        <div className="mx-30 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="text-sm text-gray-400">
              <p className="mb-1">Công ty TNHH TicketBox Clone</p>
              <p className="mb-1">
                Đại diện theo pháp luật: Trịnh Trần Phương Tuấn
              </p>
              <p>Mã số đăng ký thuế: 123456</p>
            </div>
            <div>
              <a
                target="_blank"
                href="http://online.gov.vn/Home/WebDetails/23180"
                className="inline-block hover:opacity-80 transition-opacity duration-300"
              >
                <img src={bctLogo} width={150} alt="confirm" />
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
            © 2025 TicketBox. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
