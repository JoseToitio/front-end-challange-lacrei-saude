import { Title, Background, Container, ContainerTitle } from "./styles";
import logo from "@/app/public/images/LOGO_LACREI.png";
import Image from "next/image";

export const CardCapa = (): JSX.Element => {
  return (
    <Background>
      <Container>
        <ContainerTitle>
          <Title>Desafio</Title>
          <Title>Front end</Title>
        </ContainerTitle>
        <Image src={logo} alt="logo" width={198} height={198} />
      </Container>
    </Background>
  );
};
