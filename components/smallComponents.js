import { useState } from "react";
import { buttonColorTransition } from "@/utils/utils";

export const StartFreeTrial = () => {
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
        <a href="/login" className="font-bold underline">
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

export const EmailAddressForm = () => {
  return (
    <form className="flex flex-row border-black bg-white border-[1px] rounded-full w-[450px] mx-auto">
      <input
        className="focus:outline-none h-12 rounded-full px-4 bg-white text-black"
        type="text"
        placeholder="Enter your email address"
      />
      <span className="flex items-center">
        <button
          className={`${buttonColorTransition} w-[180px] py-[4px] rounded-full`}
        >
          Start free trial
        </button>
      </span>
    </form>
  );
};
