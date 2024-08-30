import { useRouter } from "next/router";
import { NavLinks } from "../../components/NavLinks";
import { RouterDebug } from "../../components/RouterDebug";

export default function Page(props) {
  const router = useRouter();

  return (
    <>
      <p id="not-found">/not-found page</p>
      <p id="props">{JSON.stringify(props)}</p>
      <RouterDebug />
      <NavLinks />
    </>
  );
}

export const getStaticProps = ({ locale, locales }) => {
  if (locale === "en" || locale === "nl") {
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
