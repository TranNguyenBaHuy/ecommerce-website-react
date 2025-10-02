import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type EventProps = {
  banner_url: string;
  title: string;
  date: string;
  location: string;
  price: number | null;
  event_id: string;
};

const EventCard: React.FC<EventProps> = ({
  event_id,
  banner_url,
  title,
  date,
  price,
}) => {
  return (
    <Link to={`/events/${event_id}`}>
      <div className="group max-w-3xl bg-[#2a2a2a] rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[#2dc275]/20 transition-all duration-500 h-full flex flex-col transform hover:-translate-y-2 border border-gray-800 hover:border-[#2dc275]">
        <div className="relative overflow-hidden">
          <img
            src={banner_url}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-4 flex flex-col justify-between flex-grow">
          <h3 className="text-md font-semibold mb-2 text-white line-clamp-2 min-h-[3rem] group-hover:text-[#2dc275] transition-colors duration-300">
            {title}
          </h3>
          <div className="space-y-2">
            <p className="text-md text-[#2dc275] text-1xl font-bold line-clamp-1">
              Từ {price?.toLocaleString("de-DE")} đ
            </p>
            <p className="text-sm text-gray-400 line-clamp-1 flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendar} className="text-[#2dc275]" /> 
              {date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
