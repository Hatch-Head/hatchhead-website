import { parseISO, format } from "date-fns";

type Props = {
  dateString?: string | Date;
  format?: string;
  className?: string;
};

const DateFormatter = ({
  dateString,
  format: dateFormat = "LLLL d, yyyy",
  className = "",
}: Props) => {
  if (!dateString) return null;
  const date = dateString instanceof Date ? dateString : parseISO(dateString);
  return (
    <time dateTime={dateString.toString()} className={className}>
      {format(date, dateFormat)}
    </time>
  );
};

export default DateFormatter;
