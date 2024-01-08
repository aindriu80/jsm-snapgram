import ProfileCard from "@/components/shared/ProfileCard";
import { useGetRecentPosts } from "@/lib/react-query/queries";
import { Models } from "appwrite";

const Profile = () => {
  const { data: posts } = useGetRecentPosts();
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Profile Page</h2>

          {posts?.documents.map((post: Models.Document) => (
            <ProfileCard post={post} key={post.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
