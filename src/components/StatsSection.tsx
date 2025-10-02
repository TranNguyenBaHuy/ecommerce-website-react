import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faTicket,
  faCalendarCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    id: 1,
    icon: faUsers,
    value: "1M+",
    label: "Người dùng tin tưởng",
    color: "text-blue-400",
  },
  {
    id: 2,
    icon: faTicket,
    value: "100K+",
    label: "Vé đã bán",
    color: "text-[#2dc275]",
  },
  {
    id: 3,
    icon: faCalendarCheck,
    value: "500+",
    label: "Sự kiện mỗi tháng",
    color: "text-purple-400",
  },
  {
    id: 4,
    icon: faStar,
    value: "4.8/5",
    label: "Đánh giá trung bình",
    color: "text-amber-400",
  },
];

const StatsSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-[#1a1a1a] to-[#212121]">
      <div className="mx-30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center group hover:transform hover:scale-110 transition-all duration-300"
            >
              <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-gray-800 hover:border-[#2dc275] transition-colors duration-300">
                <div className={`${stat.color} mb-4`}>
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-5xl group-hover:animate-bounce"
                  />
                </div>
                <div className="text-white text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
