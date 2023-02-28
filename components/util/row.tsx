type Props = {
  children: React.ReactNode;
  reverse?: boolean;
};

const Row = ({ children, reverse = false }: Props) => (
  <div
    className={`md:flex md:space-x-8 md:space-y-0 space-y-8 justify-center ${
      reverse ? " md:flex-row-reverse" : ""
    }`}
  >
    {children}
  </div>
);

export default Row;
