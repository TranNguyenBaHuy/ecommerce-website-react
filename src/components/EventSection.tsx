import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { getDisplayPrice } from "./utils/getDisplayPrice";
import type { Event } from "../constants/types/types";

interface EventSectionProps {
  title: string;
  data: Event[];
}

const EventSection = ({ title, data }: EventSectionProps) => {
  return (
    <div className="mt-12">
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl text-white font-bold">{title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#2dc275] to-transparent rounded-full"></div>
        </div>
        <Link 
          to="/all-events" 
          className="text-white hover:text-[#2dc275] font-semibold flex items-center gap-2 group transition-colors duration-300"
        >
          Xem thêm
          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.slice(0, 4).map((event) => {
          return (
            <EventCard
              event_id={event.event_id}
              key={event.event_id}
              banner_url={event.banner_url}
              title={event.title}
              date={event.start_date}
              location={event.location}
              price={getDisplayPrice(event.tickets)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventSection;
