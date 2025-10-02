import { events } from "../constants/mocks/mockEventData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../components/Base/ResponsiveBase/Carousel";
import EventCard from "../components/EventCard";
import { getDisplayPrice } from "../components/utils/getDisplayPrice";
import EventSection from "../components/EventSection";
import TrendingSection from "../components/TrendingSection";

const Home = () => {
  return (
    <div className="w-full mx-auto bg-[#212121]">
      {/* TRENDING SECTION */}
      <TrendingSection events={events} />

      <div className="py-8">
        <div className="mx-30">
          {/* SPECIAL SECTION*/}
          <div className="mx-auto mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">
                Sự kiện đặc biệt
              </h2>
              <div className="h-1 flex-grow ml-6 bg-gradient-to-r from-[#2dc275] to-transparent rounded-full"></div>
            </div>
            <Carousel
              swipeable
              draggable
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="transform 1500ms ease-in-out"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="mx-2"
              partialVisible={false}
            >
              {events.map((event) => {
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
            </Carousel>
          </div>
          
          {/* UPCOMING SECTION */}
          <EventSection title="Sắp diễn ra" data={events} />
    
          {/* FOR YOU SECTION */}
          <EventSection title="Dành cho bạn" data={events.slice(2, 8)} />
    
          {/* ANOTHER SECTION */}
          <EventSection title="Sự kiện nổi bật" data={events.slice(8, 10)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
