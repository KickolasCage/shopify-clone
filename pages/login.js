import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  const Divider = () => (
    <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400 uppercase">or</span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>
  );

  return (    
    <div className="flex flex-row items-center justify-center py-[25%] text-black bg-white">
      <div className="flex flex-col justify-center gap-3 outline-none">
        <div className="font-bold text-[25px]">Log in</div>
        <div className="text-sm text-gray-500">Continue to Shopify</div>
        <form className="flex flex-col items-left gap-2">
          <input
            type="text"
            className="p-2 font-lg rounded-lg bg-white border-[1px]"
          />
          <button
            className="bg-green-400 p-2 font-lg rounded-lg font-bold text-white"
            type="submit"
          >
            Continue with Email
          </button>
        </form>
        <Divider />
        {continueWithServiceList.map(({ icon, text }) => (
          <button className="flex flex-row p-2 gap-2 items-center justify-center border-gray border-[1px] w-[300px]">
            <FontAwesomeIcon icon={icon} />
            Continue with {text}
          </button>
        ))}
        <div className="text-gray-600 text-sm">
          New to Shopify?
          <a href="/" className="text-green-600">
            &nbsp;Get started
          </a>
        </div>
        <div className="flex flex-row gap-2 text-gray-600 text-sm self-end">
          {info.map((text) => {
            return (
              <a href="#" className="text-gray hover:text-gray-800 self-end">
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const continueWithServiceList = [
  { icon: faApple, text: "Apple" },
  { icon: faFacebook, text: "Facebook" },
  { icon: faGoogle, text: "Google" },
];

const info = ["Help", "Privacy", "Terms"];
