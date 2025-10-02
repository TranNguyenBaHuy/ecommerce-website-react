import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import type { Event } from "../constants/types/types";

interface TrendingSectionProps {
  events: Event[];
}

const TrendingSection = ({ events }: TrendingSectionProps) => {
  const trendingEvents = events.slice(0, 3);

  return (
    <div className="py-16 bg-[#212121]">
      <div className="mx-30">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faFire} className="text-orange-500 text-3xl animate-pulse" />
            <h2 className="text-3xl font-bold text-white">
              Đang hot nhất
            </h2>
          </div>
          <Link
            to="/all-events"
            className="text-[#2dc275] hover:text-amber-400 font-semibold flex items-center gap-2 group"
          >
            Xem tất cả
            <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {trendingEvents.map((event, index) => (
            <Link
              key={event.event_id}
              to={`/events/${event.event_id}`}
              className="group relative overflow-hidden rounded-2xl h-96 transform hover:scale-105 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={event.banner_url}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Trending Badge */}
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                <FontAwesomeIcon icon={faFire} />
                #{index + 1} Trending
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2 line-clamp-2 group-hover:text-[#2dc275] transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{event.start_date}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#2dc275] text-xl font-bold">
                    Từ {event.tickets[0]?.price.toLocaleString("de-DE")} đ
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-[#2dc275] transition-colors duration-300">
                    Đặt vé ngay
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
