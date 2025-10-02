import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="mx-30 relative z-10">
        <div className="flex items-center justify-center gap-4">
          <FontAwesomeIcon icon={faGift} className="text-2xl animate-bounce" />
          <p className="text-center font-bold text-lg">
            🎉 Giảm giá 20% cho đơn hàng đầu tiên! Sử dụng mã:{" "}
            <span className="bg-white text-orange-500 px-3 py-1 rounded-md font-mono">
              FIRST20
            </span>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
            aria-label="Close banner"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
