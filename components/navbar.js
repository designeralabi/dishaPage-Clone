import Image from "next/image";
import Country from "./country";
const navbar = () => {
  return (
    <div className="flex justify-between items-center px-16">
      <Image
        priority
        src="/assets/Disha-logo-text.svg"
        width={100}
        height={100}
        alt="disha_logo"
      />
      <ul className="flex justify-evenly w-2/5 text-sm">
        <li>Features</li>
        <li>Learn</li>
        <li>Pricing</li>
        <li>Community</li>
        <li>Explore</li>
      </ul>
      <div className="flex justify-between items-center text-sm outline-none w-1/4">
        <Country />
        <button className="outline-none w-28 h-11 flex justify-center items-center bg-black font-medium">
          Log in
        </button>
        <button className="bg-gradient-to-tr from-disha-orange-dark to-disha-orange-light p-3 hover:bg-disha-hover rounded-lg w-28 h-11 flex justify-center items-center outline-none font-medium">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default navbar;
