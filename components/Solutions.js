import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faMailBulk,
  faMarker,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Solutions = ({ open }) => {
  return (
    <div className={`bg-white flex flex-col px-auto ${open ? "flex" : "hidden"}`}>
      <div
        className={`text-black bg-white 
        flex flex-row gap-10 justify-center py-5`}
      >
        {solutionsTable.map(({ header, items }, ind) => {
          return (
            <div key={ind} className={`flex flex-row w-[200px]`}>
              <div className={`flex flex-col gap-6`}>
                <div className="text-lg border-b-gray -mb-1">
                  <b>{header}</b>
                </div>
                <hr className="-mb-2" />
                {items.map(({ text, secondaryText }, ind) => (
                  <div key={ind}>
                    <a href="#">
                      <div>
                        <b>{text}</b>
                      </div>
                      <div className="text-sm text-gray-500 hover:text-black">
                        {secondaryText}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-100 px-auto flex flex-row gap-10 items-center justify-center py-5">
        {bottomRow.map(({ text, secondaryText }, ind) => (
          <div key={ind} className="w-[200px] border-r-gray-300 border-r-2 last:border-r-0">
            <a href="#">
              <div>
                <b>{text}</b>
              </div>
              <div className="text-sm text-gray-500 hover:text-black">
                {secondaryText}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const solutionsTable = [
  {
    header: (
      <span>
        <FontAwesomeIcon icon={faHammer} /> Start
      </span>
    ),
    items: [
      { text: "Start your business", secondaryText: "Build your brand" },
      { text: "Create your website", secondaryText: "Online store editor" },
      { text: "Customize your store", secondaryText: "Store themes" },
    ],
  },
  {
    header: (
      <span>
        <FontAwesomeIcon icon={faMailBulk} /> Sell
      </span>
    ),
    items: [
      { text: "Sell your products", secondaryText: "Sell online or in person" },
      { text: "Check out customers", secondaryText: "World class checkout" },
      { text: "Sell online", secondaryText: "Grow your business online" },
    ],
  },
  {
    header: (
      <span>
        <FontAwesomeIcon icon={faMarker} /> Market
      </span>
    ),
    items: [
      {
        text: "Market your business",
        secondaryText: "Reach & retain customers",
      },
      {
        text: "Market across social",
        secondaryText: "Social media integrations",
      },
      { text: "Chat with customers", secondaryText: "Shopify inbox" },
    ],
  },
  {
    header: (
      <span>
        <FontAwesomeIcon icon={faHouse} /> Manage
      </span>
    ),
    items: [
      {
        text: "Manage your business",
        secondaryText: "Track sales, orders & analytics",
      },
      {
        text: "Ship orders faster",
        secondaryText: "Shopify shipping solution",
      },
      {
        text: "Manage your stock & orders",
        secondaryText: "Inventory & order management",
      },
    ],
  },
];

const bottomRow = [
  {
    text: "Shopify Developers",
    secondaryText: "Build with Shopify's API's",
  },
  {
    text: "Plus",
    secondaryText: "A commerce solution for growing digital brands",
  },
  {
    text: "Enterprise",
    secondaryText: "The composable stack for enterprise retail",
  },
  {
    text: "All products",
    secondaryText: "Explore all Shopify products & features",
  },
];

export default Solutions;
