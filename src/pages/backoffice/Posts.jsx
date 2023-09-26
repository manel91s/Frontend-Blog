import usePosts from "../../hooks/usePosts";
import PreviewPost from "../../components/backoffice/PreviewPost";

const Posts = () => {
  const { posts } = usePosts();

  console.log(posts);
  return (
    <>
      <h1 className="text-4xl font-black">Posts</h1>

      <div className="bg-white shadow mt-10 rounded-lg">
        {posts.length ? (
          posts.map((post) => <PreviewPost key={post.id} post={post} />)
        ) : (
          <p>No hay posts</p>
        )}
      </div>
    </>
  );
};

export default Posts;
