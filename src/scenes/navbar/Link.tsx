import { SelectedPage, baseProps } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type LinkProps = baseProps & {
  page: string;
  selectedPage: SelectedPage;
};

const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
