import Head from 'next/head'
import PostCard from '../components/PostCard';
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";

const posts = [
  { title: "nkcdajidahbjcp", excerpt: "jbcahihckjhcbkc" },
  { title: "nnamed isndkd", excerpt: "jldjndldj x" },
];
export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
