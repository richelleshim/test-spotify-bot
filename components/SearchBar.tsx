import Search from "@mui/icons-material/Search";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex items-center px-3 gap-1">
      <div className="border-b-2 border-blue-600 h-[50px] flex-center">
        <Search className="text-white outline-none" />
      </div>
      <div className="border-b-2 border-gray-300 flex-center h-[50px]">
        <input placeholder="Search a project..." className="input" />
      </div>
    </div>
  );
};

{
  /* <Image src="/Loading.svg" width={400} height={0} alt="hello" />
   */
}

export default SearchBar;
