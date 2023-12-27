import { GrSearch } from "react-icons/gr";
import { RiListSettingsLine } from "react-icons/ri";
const Header = () => {
  return (
    <header className="w-full bg-green-600 rounded-xl">
      <form className="w-full flex p-3">
        <div className="w-full relative items-center align-items-center">
          <input
            type="text"
            placeholder="Pesquise novas receitas"
            className="bg-transparent ml-[50px] text-lg w-11/12 outline-none text-white placeholder-gray-300"
          />
          <GrSearch
            className="absolute left-2 top-0 text-white text-3xl 
"
          />
        </div>
        <RiListSettingsLine className="text-3xl text-white cursor-pointer hover:text-amber-300" />
      </form>
    </header>
  );
};

export default Header;
