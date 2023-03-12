import Solutions from "./Solutions";
import Resources from "./Resources";
import { buttonColorTransition } from "@/utils/utils";
import { useEffect, useState } from "react";

const StartFreeTrial = () => {
  const [chosenDropdown, setChosenDropdown] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll < heightToHideFrom && chosenDropdown == '') {      
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div
      className={`${
        isVisible ? "fixed" : "hidden"
      } top-0 left-0 right-0 border-blue border-b-2 mb-2`}
    >
      <nav className="text-black flex h-16 bg-white items-center justify-between px-16">
        <div className="flex flex-row items-center gap-2">
          <b>Shopify</b>
          <div
            className="cursor-pointer"
            onClick={() =>
              setChosenDropdown(
                chosenDropdown == "Solutions" ? "" : "Solutions"
              )
            }
          >
            Solutions
          </div>
          <div><a href="/pricing">Pricing</a></div>
          <div
            className="cursor-pointer"
            onClick={() =>
              setChosenDropdown(
                chosenDropdown == "Resources" ? "" : "Resources"
              )
            }
          >
            Resources
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <a href="/login" className="text-black">
            Log in
          </a>
          <button className={`rounded-full py-2 px-2 ${buttonColorTransition}`}>
            <a href="#" className="py-2">
              Start free trial
            </a>
          </button>
        </div>
      </nav>
      <Solutions open={chosenDropdown == "Solutions"} />
      <Resources open={chosenDropdown == "Resources"} />
    </div>
  );
};

export default StartFreeTrial;
