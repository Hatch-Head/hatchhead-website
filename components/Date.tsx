import { parseISO, format } from "date-fns";

type Props = {
  dateString: string | Date;
  format?: string;
  className?: string;
};

const DateFormatter = ({
  dateString,
  format: dateFormat = "LLLL d, yyyy",
  className = "",
}: Props) => {
  const date = dateString instanceof Date ? dateString : parseISO(dateString);
  console.log("d", date, dateString);
  return (
    <time dateTime={dateString.toString()} className={className}>
      {format(date, dateFormat)}
    </time>
  );
};

export default DateFormatter;
