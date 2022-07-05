import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineDateRange } from 'react-icons/md'
const PostCard = ({ post }) => {

  return (
    <div className="shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src={post.featuredimage.url}
          alt={post.title}
          layout="fill"
          className="w-full object-cover absolute h-80 rounded-t-lg lg:rounded-lg "
        />
      </div>
      <h1 className="transition duration-100 text-center mb-8 cursor-pointer  hover:text-orange-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            src={post.author.picture.url}
            alt={post.author.name}
            className="align-middle rounded-full"
            width={30}
            height={30}
          />

          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <MdOutlineDateRange className="h-6 w-6 inline mr-2 text-orange-600" />

          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-20">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block   bg-orange-700 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
