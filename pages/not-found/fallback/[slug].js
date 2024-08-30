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
  if (locale === "en" || locale === "nl") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      params,
      locale,
      locales,
    },
  };
};

export const getStaticPaths = () => {
  return {
    // the default locale will be used since one isn't defined here
    paths: ["first", "second"].map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  };
};
