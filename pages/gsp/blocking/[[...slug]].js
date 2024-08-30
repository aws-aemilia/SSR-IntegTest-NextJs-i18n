import Link from "next/link";

const Slug = (props) => {
  return (
    <div>
      <p id="props">{JSON.stringify(props)}</p>
      <Link href="/gsp/blocking/hallo-wereld" locale={"nl-NL"}>
        /nl-NL/gsp/blocking/hallo-wereld
      </Link>
      <br />
      <Link href="/gsp/blocking/42" locale={"nl-NL"}>
        /nl-NL/gsp/blocking/42
      </Link>
      <br />
      <Link href="/gsp/blocking/hallo-welt" locale={"fr"}>
        /fr/gsp/blocking/hallo-welt
      </Link>
      <br />
      <Link href="/gsp/blocking/42" locale={"fr"}>
        /fr/gsp/blocking/42
      </Link>
    </div>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      random: Math.random() + Date.now(),
      catchall: "yes",
    },
    revalidate: 1,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Slug;
