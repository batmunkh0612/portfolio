import { Profile } from "./Profile";
import Pic from "../assets/Pic.png";
import { aboutData, aboutStyle, listData } from "../constants";
import { Tag } from "./Tag";

const Paragraph = ({ children }) => (
  <p className="font-inter text-base font-normal leading-6 text-left text-[#4B5563]">
    {children}
  </p>
);

const ListItem = ({ children }) => (
  <li className="font-inter text-base font-normal leading-6 text-left text-[#4B5563] w-[calc(50%-20px)]">
    {children}
  </li>
);

export const About = () => {
  return (
    <div className="flex flex-col gap-12 py-20 px-9">
      <div className="m-auto">
        <Tag>About me</Tag>
      </div>
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="flex-1">
          <Profile imageSrc={Pic} styles={aboutStyle} />
        </div>
        <div className="flex flex-col flex-1 gap-6">
          <h3 className="font-inter text-2xl font-semibold leading-9 tracking-tighter text-left text-[#111827]">
            Curious about me? Here you have it:
          </h3>
          <div className="flex flex-col gap-4">
            {aboutData.map((data, index) => (
              <Paragraph key={data + index + Math.random()}>{data}</Paragraph>
            ))}
            <ul className="flex flex-wrap list-disc gap-[20px] p-[15px] w-full">
              {listData.map((data, index) => (
                <ListItem key={data + index + Math.random()}>{data}</ListItem>
              ))}
            </ul>
            <Paragraph>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};
