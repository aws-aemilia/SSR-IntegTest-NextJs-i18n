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

export const getStaticPaths = ({ locales }) => {
  const paths = [];

  for (const locale of locales) {
    paths.push({ params: { slug: "first" }, locale });
    paths.push({ params: { slug: "second" }, locale });
  }

  return {
    // the default locale will be used since one isn't defined here
    paths,
    fallback: true,
  };
};
