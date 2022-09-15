import { FC } from "react";
import Head from "next/head";
import { NavBar } from "../ui";

interface LayoutProps {
  children?: JSX.Element;
  title?: string;
}
const routes = [
  { href: "/", text: "Home" },
  { href: "/favorites", text: "Favorites" },
];
export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Jair Prada" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <NavBar routes={routes} />

      <main style={{ margin: "30px 0px" }}>{children}</main>

      <footer></footer>
    </>
  );
};
