import Head from "next/head";
import { useRouter } from "next/router";
import { getURL } from "../../utils/utils";
type OGType = "article";

type Props = {
  title: string;
  description: string;
  image: string;
  url?: string;
  type?: OGType;
};

const OGTags = ({
  description,
  image,
  url,
  title,
  type = "article",
}: Props) => {
  const { pathname } = useRouter();
  const imagePath = getURL(image);
  const path = getURL(pathname);
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imagePath} />
      <meta property="og:url" content={path} />
      <meta name="twitter:card" content={imagePath} />
    </Head>
  );
};
export default OGTags;
