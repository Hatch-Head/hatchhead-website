import Link from "next/link";
import slugify from "slugify";

type Props = {
  tags?: string[];
  center?: boolean;
  linkPrefix?: string;
};

const Tags = ({ tags = [], center = true, linkPrefix }: Props) => {
  const style =
    "font-mono z-1 relative mb-4 border-2 border-gray-900 dark:border-gray-50 flex items-center px-4 py-1 text-xs transition duration-150 ease-out rounded-full transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap text-gray-900 grow-0 dark:text-gray-50";

  return (
    <div
      className={`flex space-x-3 pt-2 w-full items-start flex-wrap ${
        center === true && "justify-center"
      }`}
    >
      {tags.map((tag) => {
        const slug = slugify(tag);
        return linkPrefix !== undefined ? (
          <Link
            key={tag}
            href={`/${linkPrefix}/${slug}`}
            className={style}
            suppressHydrationWarning
          >
            {tag}
          </Link>
        ) : (
          <div key={tag} className={style} suppressHydrationWarning>
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
