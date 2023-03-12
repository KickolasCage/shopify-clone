import { faCircleInfo, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resources = ({ open }) => {
    return (
        <div
          className={`text-black ${
            open ? "flex" : "hidden"
          }  flex flex-row gap-10 justify-center px-5 py-2 bg-white`}
        >
          {solutionsTable.map(({ header, items }, ind) => {
            return (
              <div key={ind} className="flex flex-row">
                <div className={`flex flex-col gap-6 ${ind == 3 ? "bg-gray-300 px-5 pb-5" : ""}`}>
                  <div className={`text-lg border-b-gray -mb-1 ${ind == 4 ? "mt-2" : ""}`}>
                    <b>{header}</b>
                  </div>
                  <hr className="-mb-2 bg-black" />
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
      );
};

export default Resources;

const solutionsTable = [
  {
    header: <span><FontAwesomeIcon icon={faCircleInfo}/> Help and support</span>,
    items: [
      { text: "Help and support", secondaryText: "Get 24/7 support" },
      { text: "How-to guides", secondaryText: "Read in-depth business guides" },
      { text: "Business Courses", secondaryText: "Learn from proven experts" },
    ],
  },
  {
    header: <span><FontAwesomeIcon icon={faCircleInfo}/> Popular topics</span>,
    items: [
      {
        text: "What is Shopify?",
        secondaryText: "How our commerce platform works",
      },
      {
        text: "Shopify Editions",
        secondaryText: "New, innovative Shopify products",
      },
      {
        text: "Founder stories",
        secondaryText: "Learn from successful merchants",
      },
    ],
  },
  {
    header: <div>&nbsp;</div>,
    items: [
      {
        text: "Marketing",
        secondaryText: "Build a marketing plan",
      },
      {
        text: "Ecommerce SEO",
        secondaryText: "Improve your search ranking",
      },
      {
        text: "Social media strategy",
        secondaryText: "Turn social into scales",
      },
    ],
  },
  {
    header: "Essential Tools",
    items: [
      {
        text: "Business name generator",
        secondaryText: "",
      },
      {
        text: "Logo maker",
        secondaryText: "",
      },
      {
        text: "Stock photography",
        secondaryText: "",
      },
      {
        text: "Business Plan Template",
        secondaryText: "",
      },{
        text: "Link in bio tool",
        secondaryText: "",
      },{
        text: "QR code generator",
        secondaryText: "",
      },

    ],
  },
];
