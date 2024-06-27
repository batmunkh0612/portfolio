import email from "../assets/email.png";
import call from "../assets/call.png";
import copy from "../assets/copy.png";
import { SocialLinks } from "./SocialLinks";
import { TitleSection } from "./TitleSection";

const ContactInfoItem = ({ icon, text, altText }) => (
  <div className="flex justify-center gap-5">
    <img src={icon} alt={altText} className="size-8" />
    <h3 className="text-xl tracking-tight text-gray-900 font--semibold md:text-4xl font-inter ">
      {text}
    </h3>
    <img src={copy} alt="copy-icon" className="p-[6px] size-11" />
  </div>
);

export const ContactMe = () => {
  return (
    <div className="flex flex-col gap-12 py-20 px-9">
      <TitleSection
        title="Get in touch"
        subtitle={` What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.`}
      />
      <div className="flex flex-col justify-center gap-4">
        <ContactInfoItem
          icon={email}
          altText="email-icon"
          text="reachsagarshah@gmail.com"
        />
        <ContactInfoItem
          icon={call}
          altText="call-icon"
          text="+91 8980500565"
        />
      </div>
      <div className="flex flex-col gap-2 m-auto">
        <p>You may also find me on these platforms!</p>
        <SocialLinks styles="flex justify-center" />
      </div>
    </div>
  );
};
