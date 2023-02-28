import Tags from "../components/Tags";

type Props = {
  client: string;
  year: number;
  website: string;
  tags?: string[];
};

const JobTable = ({ client, year, website, tags = [] }: Props) => (
  <div className="flex">
    <table className="align-top w-full">
      <tr>
        <th className="py-2">Client</th>
        <td>{client}</td>
      </tr>
      <tr className="prose">
        <th className="py-2">Year</th>
        <td>{year}</td>
      </tr>
      <tr className="prose">
        <th className="py-2">Website</th>
        <td>{website}</td>
      </tr>
      <tr className="prose align-top">
        <th className="py-2">What we did</th>
        <td className="py-2 px-4">
          <Tags center={false} tags={tags} />
        </td>
      </tr>
    </table>
  </div>
);

export default JobTable;
