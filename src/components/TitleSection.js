import { Tag } from "./Tag";

export const TitleSection = ({ title, subtitle }) => (
  <div className="flex flex-col items-center gap-4">
    <Tag>{title}</Tag>
    <p className="max-w-[576px] text-center font-inter text-[20px] font-normal leading-7 text-[#4B5563]">
      {subtitle}
    </p>
  </div>
);
