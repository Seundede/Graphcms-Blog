import React from "react";
import PostWidget from "../../components/PostWidget";
import Categories from "../../components/Categories";
import { getPosts, getPostDetails } from "../../services";
import PostDetail from "../../components/PostDetail";
import Author from "../../components/Author";
import CommentForm from "../../components/CommentForm";
import Comments from "../../components/Comments";

const PostDetails = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
            <PostDetail />
            <Author />
            <CommentForm />
            <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const posts = (await getPostDetails()) || [];
  return {
    props: { posts },
  };
}

