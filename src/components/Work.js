import image from "../assets/Picture.png";
import link from "../assets/link.png";
import { workData } from "../constants";
import { Tag } from "./Tag";
import { TitleSection } from "./TitleSection";



const ProjectPanel = ({ imageSrc, reverse = false }) => {
  const contentClass = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className={`flex flex-col max-w-[1152px] rounded-xl shadow ${contentClass} `}>
      <div className={`flex-1 p-12 bg-[#F9FAFB] border-r border-gray-100 ${reverse ? "" : "rounded-tl-lg"} rounded-bl-lg`}>
        <img
          src={imageSrc}
          alt="screen-image"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-6 p-12 flex-2 md:flex-1">
        <h3 className="text-xl font-semibold leading-7 text-gray-900">
          Fiskil
        </h3>
        <p className="text-base font-normal text-gray-600 font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra.
        </p>
        <div className="flex flex-wrap gap-2">
          {workData.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div>
          <img src={link} alt="link-icon" />
        </div>
      </div>
    </div>
  );
};

export const Work = () => {
  return (
    <div className="flex flex-col gap-12 py-20 px-9">
      <TitleSection
        title="Work"
        subtitle="Some of the noteworthy projects I have built:"
      />
      {
        [1,2,3].map((_,index) =>  <ProjectPanel imageSrc={image} reverse={index % 2 !== 0} /> )
      }
     
    </div>
  );
};
