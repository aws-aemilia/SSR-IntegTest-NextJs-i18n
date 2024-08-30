import { useRouter } from "next/router";

export function RouterDebug() {
  const router = useRouter();

  return (
    <>
      <h2>Router Props</h2>
      <ul>
        <li>locale: {router.locale}</li>
        <li>locales: {JSON.stringify(router.locales)}</li>
        <li>query: {JSON.stringify(router.query)}</li>
        <li>pathname: {router.pathname}</li>
        <li>asPath: {router.asPath}</li>
      </ul>
    </>
  );
}
