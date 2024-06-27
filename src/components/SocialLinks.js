import figmaIcon from "../assets/figma.png";
import twitterIcon from "../assets/twitter.png";
import githubIcon from "../assets/github.png";

export const SocialLinks = ({ styles }) => (
  <div className={styles}>
    <a href="/github">
      <img src={githubIcon} alt="GitHub" />
    </a>
    <a href="/twitter">
      <img src={twitterIcon} alt="Twitter" />
    </a>
    <a href="/figma">
      <img src={figmaIcon} alt="Figma" />
    </a>
  </div>
);
