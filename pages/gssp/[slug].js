import { useRouter } from "next/router";
import { NavLinks } from "../../components/NavLinks";
import { RouterDebug } from "../../components/RouterDebug";

export default function Page(props) {
  const router = useRouter();

  return (
    <>
      <p id="gssp">gssp page</p>
      <p id="props">{JSON.stringify(props)}</p>
      <RouterDebug />
      <NavLinks />
    </>
  );
}

export const getServerSideProps = ({ params, locale, locales }) => {
  return {
    props: {
      params,
      locale,
      locales,
    },
  };
};
