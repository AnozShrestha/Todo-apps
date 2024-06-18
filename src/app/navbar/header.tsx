import { Button } from "../../components/ui/button";
import Navbar from "./navbar-list";

export default function Header() {
  return (
    <div>
      <header>
        <Navbar />
        <Button>Download App</Button>
      </header>
    </div>
  );
}
