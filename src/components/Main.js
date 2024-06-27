import { mainStyles } from "../constants";
import { SocialLinks } from "./SocialLinks";
import { Profile } from "./Profile";
import hireIcon from "../assets/hire.png";
import locationIcon from "../assets/location.png";
import profilePic from "../assets/Profile.png";


const BioSection = () => (
  <div className="flex flex-col gap-2">
    <h1 className="font-inter text-6xl font-bold leading-[72px] tracking-tighter text-left text-[#111827]">
      Hi, I’m Sagar 👋
    </h1>
    <p className="font-inter text-base font-normal leading-6 text-left text-[#4B5563]">
    I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
    </p>
  </div>
);

const LocationStatus = () => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-2">
      <img src={locationIcon} alt="Location" />
      <p className="font-inter text-base font-normal text-[#4B5563]">Ahmedabad, India</p>
    </div>
    <div className="flex gap-2">
      <img src={hireIcon} alt="Availability" />
      <p className="font-inter text-base font-normal text-[#4B5563]">Available for new projects</p>
    </div>
  </div>
);

export const Main = () => {
  return (
    <div className="flex flex-col-reverse gap-12 px-4 py-16 md:py-20 md:flex-row md:px-9">
      <div className="flex flex-col flex-1 gap-12">
        <BioSection />
        <LocationStatus />
        <SocialLinks styles="flex" />
      </div>
      <div className="flex justify-center md:justify-end ">
        <Profile styles={mainStyles} imageSrc={profilePic} />
      </div>
    </div>
  );
};
