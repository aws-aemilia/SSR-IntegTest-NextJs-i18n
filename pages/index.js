import { NavLinks } from "../components/NavLinks";
import { RouterDebug } from "../components/RouterDebug";

export default function Page(props) {
  return (
    <>
      <h1>home page</h1>
      <p>Page Props: {JSON.stringify(props)}</p>

      <RouterDebug />
      <NavLinks />
    </>
  );
}

export const getStaticProps = ({ locale, locales }) => {
  return {
    props: {
      random: Math.random() + Date.now(),
      locale,
      locales,
    },
    revalidate: 1,
  };
};
