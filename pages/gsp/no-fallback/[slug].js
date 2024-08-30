import { useRouter } from "next/router";
import { NavLinks } from "../../../components/NavLinks";
import { RouterDebug } from "../../../components/RouterDebug";

export default function Page(props) {
  const router = useRouter();

  if (router.isFallback) return "Loading...";

  return (
    <>
      <p id="gsp">gsp page</p>
      <p id="props">{JSON.stringify(props)}</p>
      <RouterDebug />
      <NavLinks />
    </>
  );
}

export const getStaticProps = ({ params, locale, locales }) => {
  return {
    props: {
      random: Math.random() + Date.now(),
      params,
      locale,
      locales,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { slug: "first" } },
      "/gsp/no-fallback/second",
      { params: { slug: "first" }, locale: "en-US" },
      "/nl-NL/gsp/no-fallback/second",
      "/fr/gsp/no-fallback/first",
    ],
    fallback: false,
  };
};
