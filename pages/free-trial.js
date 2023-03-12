import {
  faArrowAltCircleDown,
  faCalendar,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FreeTrial() {
  return (
    <div className="mb-20">
      <div class="flex flex-col justify-center items-center bg-white text-black pt-20 mx-10">
        <div className="italic text-3xl font-bold">shopify</div>
        <div className="text-4xl text-center">
          <b>Bring your ideas to life for $1/month</b>
        </div>
        <div className="text-[15px] text-center">
          The future of business is yours to shape. Sign up for a free trial and
          enjoy 3 months of Shopify for $1/month on select plans.
        </div>
        <div className="w-[250px] my-3 bg-white border-gray-400 rounded-full border-2">
          <form className="flex flex-row">
            <input
              className="focus:outline-none h-12 rounded-full px-1 bg-white border-gray-400 text-black text-[10px] mr-5"
              type="text"
              placeholder="Enter your email address"
            />
            <span className="flex items-center ">
              <button className="text-white bg-black w-[70px] py-[5px] px-[10px]  rounded-full text-[10px]">
                Start free trial
              </button>
            </span>
          </form>
        </div>
        <div className="text-[8px]">
          Try Shopify free for 3 days, no credit card required. By entering your
          email, you agree to receive marketing emails from Shopify.
        </div>
        <div>Placeholder</div>
      </div>
      <div className="my-5 flex flex-row items-center justify-center gap-5">
        {capabilitiesList.map((capability) => <CapabilitiesListItem {...capability}/>)}
      </div>
    </div>
  );
}

const CapabilitiesListItem = ({ icon, header, text }) => {
  const CustomIcon = ({ icon }) => (
    <div class="flex flex-col items-center justify-center bg-green-700 w-[30px] h-[30px] rounded-full">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
  return (
    <div className="flex flex-col item-start w-20 gap-5">
      <CustomIcon icon={icon} />
      <div className="text-sm font-bold">{header}</div>
      <div className="text-[10px]">{text}</div>
    </div>
  );
};

const capabilitiesList = [
  {
    icon: faArrowAltCircleDown,
    header: "Customizable templates",
    text: "Free website designs to launch your store quickly and easily.",
  },
  {
    icon: faCalendar,
    header: "All in one",
    text: "Shopify takes care of everything from marketing and payments to secure transactions and shipping.",
  },
  {
    icon: faLock,
    header: "A safe and efficient platform",
    text: "Millions of users trust Shopify to manage their online stores.",
  },
];
