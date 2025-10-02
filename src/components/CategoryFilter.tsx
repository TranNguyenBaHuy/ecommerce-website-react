import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faFutbol,
  faPalette,
  faTheaterMasks,
  faGraduationCap,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { id: "music", name: "Âm nhạc", icon: faMusic, color: "bg-purple-500" },
  { id: "sports", name: "Thể thao", icon: faFutbol, color: "bg-blue-500" },
  { id: "art", name: "Nghệ thuật", icon: faPalette, color: "bg-pink-500" },
  { id: "theater", name: "Sân khấu", icon: faTheaterMasks, color: "bg-red-500" },
  { id: "education", name: "Giáo dục", icon: faGraduationCap, color: "bg-green-500" },
  { id: "food", name: "Ẩm thực", icon: faUtensils, color: "bg-orange-500" },
];

const CategoryFilter = () => {
  return (
    <div className="py-12 bg-[#1a1a1a]">
      <div className="mx-30">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Khám phá theo danh mục
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className="group relative bg-[#2a2a2a] hover:bg-[#2dc275] rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`${category.color} group-hover:bg-white w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300`}>
                  <FontAwesomeIcon
                    icon={category.icon}
                    className="text-white group-hover:text-[#2dc275] text-2xl transition-colors duration-300"
                  />
                </div>
                <span className="text-white font-semibold text-sm text-center">
                  {category.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
