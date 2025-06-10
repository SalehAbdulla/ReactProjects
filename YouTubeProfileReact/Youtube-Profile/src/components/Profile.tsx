import { useState } from "react";
import { BiCamera } from "react-icons/bi";

const Profile = () => {
  const [banner, setBanner] = useState("https://placehold.co/1500x400");
  const [profileImg, setProfileImg] = useState("https://placehold.co/100");

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setBanner(URL.createObjectURL(files[0]));
    }
  };

  return (
    <section className="flex w-screen  ml-20 relative">
      <img
        src={banner}
        className="w-full h-60 object-cover"
        alt="cover-img"
      />

      <label
        htmlFor="banner-upload"
        className="flex items-center justify-center absolute w-10 h-10 rounded-full right-2 top-2 bg-gray-800 hover:bg-gray-600 text-white p-2 cursor-pointer"
      >
        <BiCamera size={18} />
        <input
          type="file"
          id="banner-upload"
          hidden
          accept="image/*"
          onChange={handleBannerChange}
        />
      </label>


    </section>
  );
};

export default Profile;
