import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBlog,
  faBook,
  faCamera,
  faCode,
  faEnvelope,
  faInfinity,
  faPeopleGroup,
  faPerson,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { buttonColorTransition } from "../utils/utils";
import NavbarOnScroll from "../components/NavbarOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-white">
      <StartFreeTrial />
      <NavbarOnScroll />
      <div className="bg-white">
        <img
          className="float-right"
          width={500}
          height={500}
          src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Symbol.png"
        />
        <div className="grid grid-cols-1 justify-items-left w-[40%] gap-8 ml-12 my-12">
          <div className="group bg-black hover:bg-yellow-400 rounded-full text-left pl-[1.5rem] pr-[2rem] py-2 text-white inline-block w-[350px]">
            {" "}
            <span className="group-hover:text-black">
              Shopify Editions | Winter '23:{" "}
            </span>
            <a href="#" className="text-yellow-600 group-hover:text-black">
              {" "}
              Explore +100 product updates
            </a>
          </div>
          <h1 className="text-4xl font-bold text-black">
            The global commerce platform
          </h1>
          <p className="text-sm text-black">
            Build your business with Shopify to sell online, offline, and
            everywhere in between.
          </p>
          <div className="h-400px flex flex-col">
            <div className="w-[430px] bg-white border-gray-400 rounded-full border-2">
              <form className="flex flex-row">
                <input
                  className="focus:outline-none h-12 rounded-full px-2 bg-white border-gray-400 text-black"
                  type="text"
                  placeholder="Enter your email address"
                />
                <span className="flex items-center ">
                  <button
                    className={`${buttonColorTransition} w-[180px] py-[4px] rounded-full`}
                  >
                    Start free trial
                  </button>
                </span>
              </form>
            </div>
            <div className="text-[10px]">
              Try Shopify free for 3 days, no credit card required. By entering
              your email, you agree to receive marketing emails from Shopify.
            </div>
          </div>
        </div>
        <Statistics />
        <Possibilities/>
        <ShopifySupport />
        <div className="bg-green-400 flex flex-col items-center">
          <div className="font-bold text-3xl my-8">Grow your business here</div>
          <div className="my-8">
            Whether you want to sell products down the street or around the
            world, we have all the tools you need.
          </div>
          <button
            className={`rounded-full px-4 py-2 my-8 mb-16 ${buttonColorTransition}`}
          >
            Start free trial
          </button>
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
}

const StartFreeTrial = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${
        open ? "" : "hidden"
      } bg-green-300 text-sm flex items-center justify-center h-8 relative`}
    >
      <div>
        Start a free trial and enjoy 3 months of Shopify for $1/month on select
        plans.&nbsp;{" "}
        <a href="#" className="font-bold underline">
          Sign up now
        </a>
      </div>
      <div
        className={`font-bold cursor-pointer absolute right-[10%]`}
        onClick={() => setOpen(false)}
      >
        x
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <>
      <div className="text-4xl font-bold mx-16 my-4 leading-normal mb-12 text-black">
        Discover why millions of entrepreneurs chose Shopify to build their
        business — <br />
        <span className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
          from hello world to IPO.
        </span>
      </div>
      <div className="flex flex-row gap-16 mx-16 my-4">
        {statisticsList.map(({ header, text }) => (
          <div className="border-l-8 border-blue-500 pl-2">
            <h1 className="text-4xl font-bold text-black"> {header}</h1>
            <p className="text-gray-500"> {text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const Possibilities = () => {
  return (
    <>
      <div className="uppercase mx-8 my-8 text-blue-400">
        Explore the world's largest commerce community
      </div>
      <div className="flex flex-row my-8 mx-8 gap-8">
        {possibilitiesList.map(({ icon, header, text }) => (
          <div className="bg-white shadow-md pl-4 pr-4 py-4 group">
            <div className="my-8">
              <FontAwesomeIcon size="lg" icon={icon} color="black" />
            </div>
            <h3 className="font-bold text-xl my-2">
              {header}&nbsp;
              <span className="transition ease-in delay-250 opacity-0 group-hover:opacity-100">
                &rarr;
              </span>
            </h3>
            <div className="text-gray-400 text-md">{text}</div>
          </div>
        ))}
      </div>
    </>
  );
};

const ShopifySupport = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center pt-12">
        <div className="text-green-400 uppercase text-lg">Shopify support</div>
        <div className="text-white text-5xl py-24 text-center px-24">
          The help you need, when you need it
        </div>
      </div>
      <div className="grid grid-rows-2 gap-2 grid-flow-col pb-24 mx-12">
        {informationList.map(({ icon, header, text, buttonText }) => (
          <div className="group text-white flex flex-col border-white bg-slate-900 pl-4 py-8 gap-4 rounded-lg border-gray-700 border-[1px]">
            <div>
              <FontAwesomeIcon color="white" size="lg" icon={icon} />
            </div>
            <div className="text-xl font-bold">{header}</div>
            <div className="">{text}</div>
            <button className="border-2 w-[128px] rounded-full bg-slate-700 group-hover:bg-slate-600">
              {buttonText}&nbsp;
              <span className="group-hover:translate-x-20 transition-all duration-300">
                &gt;
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

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

const statisticsList = [
  { header: "Millions", text: "of merchants worldwide" },
  { header: "170+", text: "countries represented" },
  { header: "10%", text: "of total US ecommerce" },
  { header: "$444b+USD", text: "global economic activity" },
];

const possibilitiesList = [
  {
    icon: faCamera,
    header: "Creators",
    text: "Turn followers into customers with commerce tools for creators",
  },
  {
    icon: faCode,
    header: "Developers",
    text: "Build the future of commerce with Shopify's powerful API",
  },
  {
    icon: faPerson,
    header: "Partners",
    text: "Offer your expertise to Shopify merchants all over the world",
  },
  {
    icon: faInfinity,
    header: "Plus",
    text: "A commerce solution for growing digital brands",
  },
  {
    icon: faEnvelope,
    header: "Enterprise",
    text: "The modern, composable stack for enterprise retail",
  },
];

const informationList = [
  {
    icon: faBlog,
    header: "Blog",
    text: "Get all the marketing and business strategy tips you need to help you run an online business",
    buttonText: "Read",
    buttonLink: "#",
  },
  {
    icon: faBook,
    header: "Online Courses",
    text: "Learn tried-and-tested business tips with instant access to lessons from successful entrepreneurs",
    buttonText: "Learn",
    buttonLink: "#",
  },
  {
    icon: faPeopleGroup,
    header: "Community",
    text: "Connect with a community of brands, partners, and fellow merchants who understand Shopify.",
    buttonText: "Discuss",
    buttonLink: "#",
  },
  {
    icon: faQuestion,
    header: "Help Center",
    text: "Find answers with a dedicated helpdesk resource full of articles and videos from our Support team",
    buttonText: "Get help",
    buttonLink: "#",
  },
];

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
