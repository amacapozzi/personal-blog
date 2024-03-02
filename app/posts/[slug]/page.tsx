import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { parseDate } from "utils/helper";
import MainLayout from "layouts/main.layout";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const Content = getMDXComponent(post.body.code);

  return (
    <MainLayout>
    <article className="py-8 mx-auto max-w-4xl">
      <div className="flex flex-row items-start gap-4">
        <img loading="lazy" width={80} height={80} src={"https://midu.dev/images/tags/javascript.png"} alt="post-image" />
        <div className="flex flex-col items-start">
        <h1 className="font-semibold text-gray-200">{post.title}</h1>
        <span className="text-gray-400">{parseDate(post.date)}</span>
        </div>
      </div>
      <section className="mt-10 text-gray-200">
       <Content/>
      </section>
    </article>
    </MainLayout>
  );
};

export default PostLayout;
