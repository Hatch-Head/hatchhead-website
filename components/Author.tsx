import { type Author } from "../lib/service";
import Image from "next/image";
import DateFormatter from "./Date";
import Avatar from "./Avatar";
type Props = {
  author: Author;
  time: string;
  date: string | Date;
  className?: string;
};

const AuthorComponent = ({ author, time, date, className }: Props) => (
  <div className={className}>
    <div className="flex space-x-4 items-center">
      <Avatar src={author.avatar} name={author.name} />
      <div className="text-neutral-700 contrast-more:text-neutral-900">
        <span>{author.name}</span>
        <div className="text-xs font-bold">
          <span className="mr-8">{time}</span> Published{" "}
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  </div>
);

export default AuthorComponent;
