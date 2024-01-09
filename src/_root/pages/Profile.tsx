import { useParams, useLocation } from "react-router-dom";
import ProfileCard from "@/components/shared/ProfileCard";
import { useUserContext } from "@/context/AuthContext";
import { useGetUserById } from "@/lib/react-query/queries";
import { GridPostList } from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";

interface StabBlockProps {
  value: string | number;
  label: string;
}

const Profile = () => {
  const { id } = useParams();
  const { user } = useUserContext();

  const { data: currentUser } = useGetUserById(id || "");
  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="home-container">
      <div className="home-posts">
        <h2 className="h3-bold md:h2-bold text-left w-full">Profile Page</h2>

        <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
          <img
            src={
              currentUser.imageUrl || "/assets/icons/profile-placeholder.svg"
            }
            alt="profile"
            className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
          />
          {currentUser.username}
        </div>
      </div>
    </div>
  );
};

export default Profile;
