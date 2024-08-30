import Link from "next/link";

export function NavLinks() {
  return (
    <>
      <h2>Links</h2>
      <ul>
        <li>
          <Link href="/">to /</Link>
        </li>
        <li>
          <Link href="/another">to /another</Link>
        </li>
        <li>
          <Link href="/gsp">to /gsp</Link>
        </li>
        <li>
          <Link href="/gsp/fallback/first">to /gsp/fallback/first</Link>
        </li>
        <li>
          <Link href="/gsp/fallback/hello">to /gsp/fallback/hello</Link>
        </li>
        <li>
          <Link href="/gsp/no-fallback/first">to /gsp/no-fallback/first</Link>
        </li>
        <li>
          <Link href="/gssp">/gssp</Link>
        </li>
        <li>
          <Link href="/gssp/first">to /gssp/first</Link>
        </li>
      </ul>
    </>
  );
}
