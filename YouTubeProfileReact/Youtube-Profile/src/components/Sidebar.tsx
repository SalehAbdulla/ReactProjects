import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 w-20 h-screen bg-[#1a1c1e] text-white">

      <div className="flex flex-col items-center justify-between p-4 h-full">

        <div className="top">
          <FaHome className="mb-5" size={18} />
          <FaSearch className="mb-5" size={18} />
          <FaUser className="mb-5" size={18} />
        </div>

        <div className="bottom">
          <IoMdSettings className="mb-5" size={18} />
          <FaUser className="mb-5" size={18} />
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;
