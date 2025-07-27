import { BsGithub } from "react-icons/bs";
import logo from "/public/logo.png";

const Navbar = () => {
  return (
    <nav className="py-4 px-8 flex justify-between items-center container mx-auto">
      <a href="#" className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="size-10 rounded-full" />
        <span className="text-white text-2xl uppercase">@rof1yev</span>
      </a>

      <a href="https://github.com/rof1yev" target="_blank">
        <BsGithub
          size={24}
          className="hover:cursor-pointer hover:opacity-90 transition-colors"
          color="white"
        />
      </a>
    </nav>
  );
};

export default Navbar;
