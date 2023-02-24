const Solutions = ({ open }) => {
  return (
    <div
      className={`text-black bg-white ${
        open ? "flex" : "hidden"
      }  flex flex-row gap-10 justify-center py-5 transition-all ease-linear duration-100`}
    >
      {solutionsTable.map(({ header, items }, ind) => {
        return (
          <div key={ind} className={`flex flex-row`}>
            <div
              className={`flex flex-col gap-6`}
            >
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
  );
};

const solutionsTable = [
  {
    header: "Start",
    items: [
      { text: "Start your business", secondaryText: "Build your brand" },
      { text: "Create your website", secondaryText: "Online store editor" },
      { text: "Customize your store", secondaryText: "Store themes" },
    ],
  },
  {
    header: "Sell",
    items: [
      { text: "Sell your products", secondaryText: "Sell online or in person" },
      { text: "Check out customers", secondaryText: "World class checkout" },
      { text: "Sell online", secondaryText: "Grow your business online" },
    ],
  },
  {
    header: "Market",
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
    header: "Manage",
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

export default Solutions;
