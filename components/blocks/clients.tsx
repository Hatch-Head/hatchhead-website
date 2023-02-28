import { Container } from "../util/container";
import { Section } from "../util/section";
import Title from "../title";

import Audeara from "../../assets/img/client-logos/audeara.svg";
import Cru from "../../assets/img/client-logos/cru.svg";
import Novoplan from "../../assets/img/client-logos/novoplan.svg";
import Unilever from "../../assets/img/client-logos/unilever.svg";
import UnionLane from "../../assets/img/client-logos/union-lane.svg";
import ISim from "../../assets/img/client-logos/isimulate.svg";

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
    logo: <Unilever {...imageProps} />,
    name: "Always",
  },
];

type Props = {
  title?: string;
};

export const Clients = ({ title = "Clients we’ve partnered with" }: Props) => {
  return (
    <Section>
      <Container
        className={`flex`}
        //data-tinafield={`${parentField}.body`}
        size="medium"
      >
        <div className="flex flex-col justify-center">
          <Title title={title} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 dark:text-white">
          {clientData.map((client) => (
            <div key={client.name} className={`mb-12 justify-center `}>
              <div className="hover:text-gold p-12 h-[200px] items-center justify-center fill-gray-1000 dark:fill-gray-50">
                {client.logo}
              </div>
              <div className="text-center w-full mt-4 text-gray-500">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
