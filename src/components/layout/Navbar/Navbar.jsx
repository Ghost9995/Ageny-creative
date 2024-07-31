import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Logo from "../../ui/Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <div className="py-[72px]">
      <header>
        <Container>
          <nav className="flex items-center justify-between">
            <Logo/>
            <NavbarLinks/>
            <Button className="border border-[#377DFF] text-[#377DFF] transition-all duration-50 ease-in-out font-bold hover:bg-[#377DFF] hover:text-white" text="Contact Us"/>
          </nav>
        </Container>
      </header>
      
    </div>
  );
};

export default Navbar;