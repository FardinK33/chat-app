import { RiLogoutBoxLine } from "react-icons/ri";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <button className="btn btn-circle border-[purple-light-bg] border-4 border-opacity-50 bg-purple-complimentry text-white">
        <RiLogoutBoxLine />
      </button>
    </div>
  );
};

export default LogoutButton;
