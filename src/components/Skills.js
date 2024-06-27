import { skillsData } from "../constants";
import { TitleSection } from "./TitleSection";

const Skill = ({ data }) => {
  const { text, image } = data;
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={image} alt={text} />
      <p className="font-inter text-[18px] font-normal leading-7 text-[#4B5563]">
        {text}
      </p>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="flex flex-col gap-12 px-4 py-16 md:py-20 md:px-9">
      <TitleSection title="Skills" subtitle="The skills, tools and technologies I am really good at:" />
      <div className="flex flex-wrap gap-[56px] md:gap-[76px] justify-center">
        {skillsData.map((data, index) => (
          <Skill data={data} key={data.text + index}/>
        ))}
      </div>
    </div>
  );
};
