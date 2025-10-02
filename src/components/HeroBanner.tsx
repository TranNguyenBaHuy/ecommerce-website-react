import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faCalendarDays, faFire } from "@fortawesome/free-solid-svg-icons";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#2dc275] to-[#25a563] overflow-hidden">
      <div className="mx-30 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <FontAwesomeIcon icon={faFire} className="text-amber-400 mr-2" />
              Nền tảng đặt vé sự kiện hàng đầu
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Khám phá sự kiện
              <span className="block text-amber-400">tuyệt vời nhất</span>
            </h1>
            
            <p className="text-lg text-white/90 max-w-xl">
              Tìm kiếm và đặt vé cho hàng ngàn sự kiện âm nhạc, thể thao, nghệ thuật và giải trí trên toàn quốc
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/all-events"
                className="bg-white text-[#2dc275] px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faTicket} className="mr-2" />
                Khám phá ngay
              </Link>
              
              <Link
                to="/all-events"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#2dc275] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                Xem lịch sự kiện
              </Link>
            </div>
          </div>
          
          {/* Right Content - Decorative */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
              
              {/* Floating Cards */}
              <div className="relative z-10 space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-400 p-4 rounded-xl">
                      <FontAwesomeIcon icon={faTicket} className="text-white text-2xl" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Tổng vé đã bán</p>
                      <p className="text-white text-2xl font-bold">100K+</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300 ml-12">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-4 rounded-xl">
                      <FontAwesomeIcon icon={faCalendarDays} className="text-[#2dc275] text-2xl" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Sự kiện đang diễn ra</p>
                      <p className="text-white text-2xl font-bold">500+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#212121"/>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
