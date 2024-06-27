import icon from "../assets/icon.png";

export const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-[2px] px-20 py-6">
      <img src={icon} alt="c-icon" className="size-4" />
      <p>2023 | Designed and coded with ❤️️ by Sagar Shah</p>
    </div>
  );
};
