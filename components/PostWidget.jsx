import moment from "moment";
import React, { useEffect, useState } from "react";
import { getRecentPost, getSimilarPosts } from "../services";
import Link from "next/link";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPost().then((result) => setRelatedPosts(result));
    }
  }, [slug, categories]);

  return (
    <div className="shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold borber-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            {/** <img alt={post.title} h60 w60 className="align-middle rounded-full" src={post.featuredimage.url} />*/}
          </div>
          <div className="flex-grow ml-4 ">
            <p className="text-gray-500 font-xs">
            {moment(post.createdAt).format('MMM DD, YYYY')} </p>
            <Link href={`/post/${post.slug}`} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
