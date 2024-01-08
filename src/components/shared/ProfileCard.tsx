import { Models } from "appwrite";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <>
      <div>{post.creator.name}</div>
    </>
  );
};

export default PostCard;
