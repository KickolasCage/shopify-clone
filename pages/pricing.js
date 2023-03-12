import BottomNavigation from "../components/BottomNavigation";
import NavbarOnScroll from "../components/NavbarOnScroll";
import Questions from "../components/QuestionSection";
import {
  StartFreeTrial,
  EmailAddressForm,
} from "../components/smallComponents";
import {
  faCheck,
  faLocation,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Marquee from "../components/Marquee";

export default function Pricing() {
  return (
    <div className="flex flex-col align-middle justify-center">
      <StartFreeTrial />
      <NavbarOnScroll />
      <div className="flex flex-col justify-center align-middle mx-auto my-5 gap-2">
        <div className="font-bold text-4xl">
          Set up your store, pick a plan later
        </div>
        <div className="text-md flex flex-column justify-center">
          Try Shopify free for 3 days, no credit card required
        </div>
        <EmailAddressForm />
        <div className="text-[10px] flex flex-column justify-center">
          By entering your email, you agree to receive marketing emails from
          Shopify.
        </div>
      </div>
      <PaymentPlans />
      <div className="font-bold text-4xl mx-auto text-center mt-4">
        Alternative solutions for your <br />
        business
      </div>
      <div className="flex flex-row align-middle flex-wrap gap-6 justify-center my-6">
        <div className="w-[450px] rounded-md align-middle  bg-gradient-to-r from-cyan-300 to-blue-300 py-[0.5px]">
          <div className="flex justify-center text-[10px] font-bold my-1">
            Get 3 months of Starter for $1/mo
          </div>
          <div className="flex flex-col justify-center gap-3 bg-white mx-1 mb-1 rounded-bl-md rounded-br-md">
            <div className="mx-auto font-bold text-4xl mt-3">Starter</div>
            <div className="mx-auto line-through text-sm">$5</div>
            <div className="mx-auto font-bold text-xl">$1 USD/month</div>
            <div className="mx-auto text-sm">
              Sell products through social and messaging apps
            </div>
            <button className="font-bold mx-auto bg-black text-white text-sm py-2 px-24 rounded-full mb-2">
              Explore Starter
            </button>
          </div>
        </div>

        <div className="bg-black w-[450px] rounded-md text-white flex flex-col align-middle gap-5">
          <div className="mx-auto font-bold text-3xl mt-9">Shopify Plus</div>
          <div className="mx-auto font-bold text-xl">
            {" "}
            Starting at $2,000 USD/month
          </div>
          <div className="mx-auto text-sm mb-3">
            All-in-one solution for high-volume businesses
          </div>
          <button className="font-bold mx-auto bg-white text-black text-sm py-2 px-24 rounded-full mb-2">
            Explore Plus
          </button>
        </div>

        <div className="w-[450px] rounded-md  bg-gradient-to-r from-cyan-300 to-blue-300 flex flex-col align-middle justify-center gap-4">
          <div className="mx-auto font-bold text-3xl mt-9">
            Commerce Components
          </div>
          <div className="mx-auto font-bold text-xl">
            Choose your components
          </div>
          <div className="mx-auto text-sm mb-3">
            Modular pricing based on component usage
          </div>
          <button className="font-bold mx-auto bg-white text-black text-sm py-2 px-24 rounded-full mb-2">
            Contact sales
          </button>
        </div>
      </div>
      <Marquee />
      <div className="bg-black py-12 flex flex-col justify-start">
        {questionSections.map((questions) => (
          <Questions {...questions} />
        ))}
      </div>
      <div className="bg-gradient-to-r from-cyan-300 to-cyan-300 via-blue-300 flex flex-col gap-4 py-24 px-5 text-center tracking-wider">
        <div className="mx-auto font-bold text-5xl leading-normal">
          Everything you need to sell online, all in one place
        </div>
        <div className="mx-auto">
          Whether you’re building a website, managing inventory, or responding
          to customers, you can do it all with Shopify.
        </div>
        <EmailAddressForm />
        <div className="mx-auto text-sm">
          Try Shopify free for 3 days, no credit card required. By entering your
          email, you agree to receive marketing emails from Shopify.
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

const PaymentPlanBasic = ({ isMonthly }) => {
  return (
    <div className="flex flex-row align-middle flex-wrap justify-center my-6">
      <div className="w-[300px] rounded-md align-middle  bg-gradient-to-r from-cyan-300 to-blue-300 py-[0.5px]">
        <div className="flex justify-center text-[10px] font-bold my-1">
          Most Popular
        </div>
        <div className="flex flex-col justify-center align-middle gap-3 bg-gray-100 mx-1 mb-1 rounded-bl-md rounded-br-md">
          <div className="mx-auto font-bold text-4xl mt-3">Basic</div>
          <div className="mx-auto text-gray text-sm mt-3 text-center mb-3">
            Everything you need to create your store, ship products, and process
            payments{" "}
          </div>
          <div className="mx-auto">
            <div className="mx-auto text-gray-500 text-md text-center">
              {isMonthly ? (
                <span className="line-through">'32$'</span>
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
            <sup className="text-md text-gray-500">USD $</sup>
            <span className="font-bold text-4xl">
              {isMonthly ? "24" : "32"}
            </span>
            <sub className="text-md text-gray-500">/mo</sub>
          </div>
          <div className="mx-auto text-sm text-gray-500 mb-5">
            {isMonthly ? "billed yearly" : "$1/month for first three months"}
          </div>
          <div className="ml-10 font-bold text-sm">
            What's included on Basic:
          </div>
          <ul className="mx-auto text-sm font-light">
            <li>
              <FontAwesomeIcon icon={faCheck} /> Basic reports
            </li>
            <li>
              <FontAwesomeIcon icon={faLocation} /> Up to 1,000 inventory
              locations
            </li>
            <li>
              <FontAwesomeIcon icon={faPerson} /> 2 staff accounts
            </li>
          </ul>
          <button className="font-bold mx-auto bg-black text-white text-sm py-2 px-24 rounded-full mb-5">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentPlanTemplate = ({
  isMonthly,
  name,
  desc,
  monthly,
  yearly,
  specifics,
  numOfStuff,
}) => {
  return (
    <div className="flex flex-row align-middle flex-wrap justify-center my-6 ">
      <div className="w-[300px] rounded-md align-middle border-black border-[1px]">
        <div className="flex justify-center text-[10px] font-bold my-1">
          &nbsp;
        </div>
        <div className="flex flex-col justify-center align-middle gap-3 bg-white mx-1 mb-1 rounded-bl-md rounded-br-md">
          <div className="mx-auto font-bold text-4xl mt-3">{name}</div>
          <div className="mx-auto text-gray text-sm mt-3 text-center mb-3">
            {desc}
          </div>
          <div className="mx-auto">
            <div className="mx-auto text-gray-500 text-md text-center">
              {isMonthly ? (
                <span className="line-through">${yearly}</span>
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
            <sup className="text-md text-gray-500">USD $</sup>
            <span className="font-bold text-4xl">
              {isMonthly ? monthly : yearly}
            </span>
            <sub className="text-md text-gray-500">/mo</sub>
          </div>
          <div className="mx-auto text-sm text-gray-500 mb-5">
            {isMonthly ? "billed yearly" : "$1/month for first three months"}
          </div>
          <div className="ml-10 font-bold text-sm">
            What's included on {name}:
          </div>
          <ul className="mx-auto text-sm font-light">
            <li>
              <FontAwesomeIcon icon={faCheck} /> {specifics}
            </li>
            <li>
              <FontAwesomeIcon icon={faLocation} /> Up to 1,000 inventory
              locations
            </li>
            <li>
              <FontAwesomeIcon icon={faPerson} /> {numOfStuff} staff accounts
            </li>
          </ul>
          <button className="font-bold mx-auto bg-white text-black text-sm py-2 px-24 rounded-full mb-5 border-black border-[1px]">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentPlans = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const baseStyle =
    "my-1 py-2 px-2 rounded-full transition ease-in duration-300";
  const buttonStyleNotChosen = baseStyle;
  const buttonStyleChosen = baseStyle.concat(
    " bg-black text-white rounded-full"
  );

  return (
    <div className="mx-auto">
      <div className="my-10 flex flex-row align-middle justify-between">
        <div className="w-[450px] bg-gray-100 rounded-md px-5 py-1 border-black border-[1px]">
          <div className="flex flex-row">
            <div className="rounded-full mr-5 my-auto">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="font-bold">
              Extend your free trial for $1/mo on your first 3 months when
              billed monthly
            </div>
          </div>
        </div>
        <div className="flex flex-row align-middle my-2 w-[250px] justify-center gap-3  border-blue-400 border-[1px] rounded-full text-sm">
          <div
            onClick={() => setIsMonthly(true)}
            className={isMonthly ? buttonStyleChosen : buttonStyleNotChosen}
          >
            Monthly
          </div>
          <div
            onClick={() => setIsMonthly(false)}
            className={isMonthly ? buttonStyleNotChosen : buttonStyleChosen}
          >
            Yearly (Save 25%)
          </div>
        </div>
      </div>
      <div className="mx-auto  flex align-middle gap-3 flex-wrap justify-center">
        <PaymentPlanBasic isMonthly={isMonthly} />
        {paymentPlans.map((desc) => (
          <PaymentPlanTemplate isMonthly={isMonthly} {...desc} />
        ))}
      </div>
      <div className="text-center text-sm text-gray-500">
        Prices may vary by your store location.
      </div>
    </div>
  );
};

const paymentPlans = [
  {
    name: "Shopify",
    desc: "Level up your business with professional reporting and more staff accounts",
    monthly: "69",
    yearly: "92",
    specifics: "Professional reports",
    numOfStuff: "5",
  },
  {
    name: "Advanced",
    desc: "Get the best of Shopify with custom reporting and our lowest transaction fees",
    monthly: "299",
    yearly: "399",
    specifics: "Custom report builder",
    numOfStuff: "15",
  },
];

const plans = [
  {
    icon: "",
    header: "Online store",
    text: "Build an online store with Shopify’s robust ecommerce platform—no coding required.",
  },
  {
    icon: "",
    header: "Sales channels",
    text: "Promote and sell your products on multiple sales channels all from within Shopify.",
  },
  {
    icon: "",
    header: "Point of sale",
    text: "Shopify’s all-in-one POS system comes with inventory tracking, staff management, and more.",
  },
  {
    icon: "",
    header: "24/7 support",
    text: "Shopify offers 24/7 email and English live chat support on all Shopify plans.",
  },
];

const questionSections = [
  {
    header: "Payment questions",
    questions: [
      {
        summary: "Are there any transaction fees?",
        text: "There are no transaction fees for stores using Shopify Payments. If you choose a third-party payment provider, there will be additional fees of 2%, 1% or 0.5% for our Basic Shopify, Shopify, and Advanced Shopify plans, respectively.",
      },
      {
        summary: "What is a third-party payment provider?",
        text: "A third-party payment provider (also knows as a payment processor or payment gateway) lets you accept online payments. Learn more about supported third-party payment providers.",
      },
      {
        summary: "Are there any credit card fees?",
        text: "Shopify charges a small fee to allow you to accept major credit cards, such as Visa and Mastercard, as payment in your store. These fees vary depending on the plan that you choose.",
      },
    ],
  },
  {
    header: "General questions",
    questions: [
      {
        summary: "How much does Shopify cost?",
        text: "You can try Shopify free for 3 days, no credit card required. After your trial expires, choose a plan that suits the size and stage of your business.",
      },
      {
        summary: "How long are your contracts?",
        text: "All Shopify plans are month to month unless you sign up for a yearly plan.",
      },
      {
        summary: "Can i cancel my account at any time?",
        text: "Yes, if you ever decide that Shopify isn't the best ecommerce platform for your business, simply cancel your account.",
      },
      {
        summary: "Can I change my plan later on?",
        text: "Absolutely, you can upgrade or downgrade your plan at any time.",
      },
    ],
  },
  {
    header: "Store setup questions",
    questions: [
      {
        summary: "Is there are a setup fee?",
        text: "No, there are no setup fees on any of our plans.",
      },
      {
        summary: "Can I use my own domain name with Shopify?",
        text: "Yes, you can purchase a domain name within Shopify, or use an existing one that you own. We also provide a forever free myshopify.com domain name to all stores when they sign up.",
      },
      {
        summary: "Do I get free web hosting when I open an online store?",
        text: "Yes, Shopify includes secure, unlimited ecommerce hosting on all plans except Starter. You can also use the Buy Button to add ecommerce to any existing website.",
      },
      {
        summary: "What are your bandwidth fees?",
        text: "There are none. All Shopify plans include unlimited bandwidth for free.",
      },
    ],
  },
];
