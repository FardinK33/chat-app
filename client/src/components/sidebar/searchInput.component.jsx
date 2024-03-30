import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex items-center gap-2 py-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search User"
        className="input bg-dark-purple bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
      />
      <button
        className="btn btn-circle border-[purple-light-bg] border-4 border-opacity-50 bg-purple-complimentry text-white"
        type="submit"
      >
        <IoIosSearch />
      </button>
    </form>
  );
};

export default SearchInput;
