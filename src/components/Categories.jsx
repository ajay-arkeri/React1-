import { CategoryCard } from "../components";
import {
  BsVectorPen,
  BsFiletypeHtml,
  BsSunrise,
  BsCamera,
  BsDatabase,
  BsHeartPulse,
} from "react-icons/bs";
import { AiOutlinePhone, AiOutlineBulb } from "react-icons/ai";
import { LiaSuitcaseSolid, LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CiMusicNote1, CiMoneyBill } from "react-icons/ci";

const Categories = () => {
  return (
    <div className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1480px] m-auto  max-w-[600px] ">
        <h1 className="md:leading-[72px] text-3xl font-bold ">
          Most <span className="text-[#20B486]">Popular Categories</span>
        </h1>
        <p className=" text-lg text-gray-900 ">
          Various versions have evolved over the years, sometimes by accident.
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-2 py-12 gap-4">
          <CategoryCard icons={<BsVectorPen size={30} />} category="Design" />
          <CategoryCard
            icons={<BsFiletypeHtml size={30} />}
            category="Development"
          />
          <CategoryCard
            icons={<AiOutlinePhone size={30} />}
            category="Marketing"
          />
          <CategoryCard
            icons={<LiaSuitcaseSolid size={30} />}
            category="Business"
          />
          <CategoryCard icons={<BsSunrise size={30} />} category="Lifestyle" />
          <CategoryCard icons={<BsCamera size={30} />} category="Photography" />
          <CategoryCard icons={<CiMusicNote1 size={30} />} category="Music" />
          <CategoryCard
            icons={<BsDatabase size={30} />}
            category="Data Science"
          />
          <CategoryCard
            icons={<AiOutlineBulb size={30} />}
            category="Personal Development"
          />
          <CategoryCard
            icons={<BsHeartPulse size={30} />}
            category="Health and Fitness"
          />
          <CategoryCard icons={<CiMoneyBill size={30} />} category="Finance" />
          <CategoryCard
            icons={<LiaChalkboardTeacherSolid size={30} />}
            category="Teaching"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
