type Props = {
  tags?: string[];
  center?: boolean;
};

const Tags = ({ tags = [], center = true }: Props) => (
  <div
    className={`flex space-x-1 pt-2 w-full items-start ${
      center && "justify-center"
    }`}
  >
    {tags.map((tag) => (
      <div
        key={tag}
        className={`font-mono z-1 relative border-2 border-gray-900 dark:border-gray-50 flex items-center px-4 py-2 text-xs transition duration-150 ease-out rounded-full transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap text-gray-900 grow-0 dark:text-gray-50`}
      >
        {tag}
      </div>
    ))}
  </div>
);

export default Tags;
