import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

type SearchBarProps = {
  searchIsVisible?: boolean;
  onCloseSearch: () => void;
};

const SearchBar = ({ onCloseSearch, searchIsVisible }: SearchBarProps) => {
  return (
    <div className=" flex-col">
      <div
        className={` flex flex-center w-screen  bg-white z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-700 ease-out origin-right rounded-md px-4 shadow-sm shadow-light-primary-3
        
        ${searchIsVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 transition-normal duration-200"}`}
      >
        <SearchInput
          onCloseSearch={onCloseSearch}
          searchIsVisible={searchIsVisible}
        />

        <SearchResults />
      </div>
    </div>
  );
};

export default SearchBar;
