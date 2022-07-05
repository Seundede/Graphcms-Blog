import React from "react";
import PostWidget from "../../components/PostWidget";
import Categories from "../../components/Categories";
import { getPosts, getPostDetails } from "../../services";
import PostDetail from "../../components/PostDetail";
import Author from "../../components/Author";
import CommentForm from "../../components/CommentForm";
import Comments from "../../components/Comments";

const PostDetails = ({ post }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <PostDetail post={post} />
      <Author author={post.author} />
      <CommentForm slug={post.slug} />
      <Comments slug={post.slug} />
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
