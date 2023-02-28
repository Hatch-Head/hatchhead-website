import { Container } from "../util/container";

type Props = {
  title: string;
  content: string;
  className?: string;
};

const SectionHeading = ({ title, content, className = "" }: Props) => (
  <header className={className}>
    <Container>
      <h1 className="text-2xl md:text-3xl text-neutral dark:text-neutral-0 font-bold mb-4">
        {title}
      </h1>
      <p className="text-base md:text-lg md:max-w-2xl">{content}</p>
    </Container>
  </header>
);

export default SectionHeading;
