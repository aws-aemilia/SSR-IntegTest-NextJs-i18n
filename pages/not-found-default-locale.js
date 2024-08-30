import { useRouter } from "next/router";
import { NavLinks } from "../components/NavLinks";
import { RouterDebug } from "../components/RouterDebug";

export default function Page(props) {
  const router = useRouter();

  return (
    <>
      <p id="not-found-default-locale">notfound default locale</p>
      <p id="props">{JSON.stringify(props)}</p>
      <RouterDebug />
      <NavLinks />
    </>
  );
}

export const getStaticProps = ({ defaultLocale, locale, locales }) => {
  if (locale === defaultLocale || locale === "nl") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locale,
      locales,
    },
  };
};
