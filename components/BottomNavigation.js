import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNavigation = () => {
  return (
    <div className="bg-black">
      <hr className="bg-white px-12" />
      <div className="p-12 flex flex-row justify-around">
        <div className="text-white flex justify-self-start items-center gap-4 text-[12px]">
          {miscInformationList.map(({ text, link }) => (
            <a href={link}>{text}</a>
          ))}
        </div>
        <div className="flex flex-row items-center gap-5 my-4">
          {socialNetworksList.map(({ icon, link }) => (
            <a href={link}>
              <FontAwesomeIcon color="white" size="lg" icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const socialNetworksList = [
  { icon: faFacebook, link: "#" },
  { icon: faTwitter, link: "#" },
  { icon: faYoutube, link: "#" },
  { icon: faInstagram, link: "#" },
  { icon: faPinterest, link: "#" },
  { icon: faTiktok, link: "#" },
];

const miscInformationList = [
  { text: "Terms of service", link: "#" },
  { text: "Privacy Police", link: "#" },
  { text: "Sitemap", link: "#" },
];

export default BottomNavigation;
