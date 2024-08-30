import { NavLinks } from "../../components/NavLinks";
import { RouterDebug } from "../../components/RouterDebug";

export default function Dynamic(props) {
  return (
    <>
      <p>dynamic page</p>
      <RouterDebug />
      <NavLinks />
    </>
  );
}
