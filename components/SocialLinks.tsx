import { useSettings } from "../hooks/useSettings";

const SocialLinks = () => {
  const settings = useSettings();
  const { social } = settings;
  const renderLinks = () => {
    const els = [];
    for (let key in social) {
      const network = social[key];
      els.push(
        <li key={key} className="py-1">
          <a
            href={network.url}
            aria-label={`Hatch Head on ${network.name}`}
            className="flex hover:text-priamry dark:hover:text-gold font-mono"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-2">{network.icon}</span> {network.name}
          </a>
        </li>
      );
    }
    return els;
  };

  return (
    <nav>
      <ul>{renderLinks()}</ul>
    </nav>
  );
};

export default SocialLinks;
