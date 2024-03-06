import logo from "@/app/public/images/logo_lacrei_saude.png";
import { Container, Helper } from "./style";
import Image from "next/image";

export const Header = () => {
  return (
    <Container>
      <Image src={logo} alt="logo" />
      <Helper>
        <p>Quem Somos</p>
        <p>Ajuda</p>
        <button>Entrar</button>
      </Helper>
    </Container>
  );
};
