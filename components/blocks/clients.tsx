import { Container } from "../util/container";
import { Section } from "../util/section";
import Title from "../title";

import Audeara from "../../assets/img/client-logos/audeara.svg";
import Cru from "../../assets/img/client-logos/cru.svg";
import Novoplan from "../../assets/img/client-logos/novoplan.svg";
import Unilever from "../../assets/img/client-logos/unilever.svg";
import UnionLane from "../../assets/img/client-logos/union-lane.svg";
import ISim from "../../assets/img/client-logos/isimulate.svg";
import Always from "../../assets/img/client-logos/always.svg";
import ThreeB from "../../assets/img/client-logos/3b.svg";

type ClientStruct = {
  logo: JSX.Element;
  name: string;
};

const imageProps = {
  width: 100,
  height: 100,
};

const clientData: ClientStruct[] = [
  {
    logo: <Audeara />,
    name: "Audeara",
  },
  {
    logo: <Unilever {...imageProps} />,
    name: "Unilever",
  },
  {
    logo: <Cru {...imageProps} />,
    name: "Cru Software",
  },
  {
    logo: <UnionLane {...imageProps} />,
    name: "Union Lane",
  },
  {
    logo: <Novoplan {...imageProps} />,
    name: "Novoplan",
  },
  {
    logo: <ISim {...imageProps} />,
    name: "iSimulate",
  },
  {
    logo: <ThreeB {...imageProps} />,
    name: "3B",
  },
  {
    logo: <Always {...imageProps} />,
    name: "Always",
  },
];

type Props = {
  title?: string;
};

export const Clients = ({ title = "Our clients" }: Props) => {
  return (
    <Section>
      <Container className={`flex`} size="medium">
        <div className="flex flex-col justify-center">
          <Title title={title} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-8 dark:text-white">
          {clientData.map((client) => (
            <div
              key={client.name}
              className={`mb-12 justify-center items-center flex flex-col `}
            >
              <div className="hover:text-gold items-center justify-center fill-gray-1000 dark:fill-gray-50 pt-12 pb-4">
                {client.logo}
              </div>
              <div className="text-center w-full mt-4 text-gray-800 dark:text-gray-200">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
