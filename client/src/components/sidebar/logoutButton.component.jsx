import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {loading ? (
        <button disabled>Loading...</button>
      ) : (
        <button
          className="btn btn-circle border-[purple-light-bg] border-4 border-opacity-50 bg-purple-complimentry text-white"
          onClick={logout}
        >
          <RiLogoutBoxLine />
        </button>
      )}
    </div>
  );
};

export default LogoutButton;
