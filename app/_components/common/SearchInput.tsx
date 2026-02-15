import { useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";

type SearchInputProps = {
  searchIsVisible?: boolean;
  onCloseSearch: () => void;
};

const SearchInput = ({ searchIsVisible, onCloseSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [searchIsVisible]);
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="search"
        className="w-2/3 rounded-l-md bg-white  border-2 border-black p-2 m-2 mr-0 border-r-0 b text-xl focus:border-none"
      />
      <button className=" text-xl bg-light-primary-1 text-white font-bold p-3 ml-0 rounded-r-md border-2 border-black border-l-0">
        <FiSearch></FiSearch>
      </button>
      <button className=" text-xl rounded-md ml-2" onClick={onCloseSearch}>
        X
      </button>
    </>
  );
};

export default SearchInput;
