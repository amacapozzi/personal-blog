import Link from "next/link";
import { parseDate } from "utils/helper";

interface Props {
  title: string;
  description: string;
  date: string;
  url: string;
}

export const PostListCard: React.FC<Props> = ({
  title,
  description,
  date,
  url,
}) => {
  return (
    <Link
      href={url}
      id="shadow-blueHover"
      className="rounded-lg px-4 p-3 bg-blue-950 w-[800px] cursor-pointer hover:-rotate-3 transition-all duration-300"
    >
      <div className="my-3">
        <span className="uppercase text-gray-400 text-sm">
          {parseDate(date)}
        </span>
      </div>
      <div className="flex justify-between gap-3 my-5 items-center">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-white text-2xl font-medium tracking-tight">
            {title}
          </h1>
          <span className="text-gray-300">{description}</span>
        </div>
        <div className="flex-shrink-0 h-full">
          <img loading="lazy"
            className="rounded-lg h-full w-[250px] object-cover"
            src="https://3.bp.blogspot.com/-JxYjZjRXIh4/VDWJoJPtYuI/AAAAAAACVDM/C9r2wraqtlQ/s1600/paisajes%2Bnaturales%2Bfotos%2Bnuevas%2B(10).jpg"
          />
        </div>
      </div>
    </Link>
  );
};
