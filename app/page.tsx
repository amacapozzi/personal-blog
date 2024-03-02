import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Navbar from "components/Navbar";
import Tags from "components/Tags";
import { PostListCard } from "components/Posts";

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  return <main></main>;
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="grid grid-cols-1 gap-5">
      <header>
        <Navbar />
      </header>
      <span className="text-white text-xl font-semibold">
      Últimos artículos
      </span>
      {posts.map((post, idx) => (
        <div key={idx} className="grid grid-cols-1 gap-5">
          <Tags />
          <PostListCard title={post.title} description={post.description} date={post.date} url={post.url} />
        </div>
      ))}
    </div>
  );
}
