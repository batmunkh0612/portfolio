import upwork from "../assets/logo-upwork.png";
import { experienceData } from "../constants";
import { TitleSection } from "./TitleSection";


const JobDescription = ({ title, children, dateRange }) => (
  <div className="flex flex-col md:flex-row justify-between gap-12 max-w-[896px] p-8 rounded-xl m-auto shadow">
    <img src={upwork} alt="Upwork logo" className="self-start" />
    <div className="flex flex-col gap-4 max-w-[384px]">
      <h3 className="text-xl font-semibold leading-7 text-left text-gray-900">
        {title}
      </h3>
      <ul className="flex flex-col gap-1 ml-5 list-disc">
        {children}
      </ul>
    </div>
    <p className="font-inter text-base font-normal text-[#4B5563]">
      {dateRange}
    </p>
  </div>
);

export const Experience = () => {
  return (
    <div className="flex flex-col gap-12 py-20 px-9">
       <TitleSection
        title="Experience"
        subtitle="Here is a quick summary of my most recent experiences:"
      />
      {
        experienceData.map(({title, dataRange, description}, index) => (
          <JobDescription key={title + index + Math.random()} title={title} dateRange={dataRange} >
            {
              description.map((desc, index) => (
                <li key={desc + index + Math.random()} className="font-inter text-base font-normal leading-6 text-[#4B5563]">
                  {desc}
                </li>
              ))
            }
          </JobDescription>
        ))
      }
    </div>
  );
};

