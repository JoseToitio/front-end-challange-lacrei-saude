import Image from "next/image";
import { Buttons, Container, ContainerButtons, DescriptionTitle, Rectangle, Title, TitleContainer } from "./style";
import logo from "@/app/public/images/Imagem 2I.jpg";
export const MainContent = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Junte-se à nossa comunidade</Title>
        <Rectangle />
        <DescriptionTitle>
          Encontre atendimento clínico de qualidade ou entre para o time de
          profissionais da Lacrei Saúde.{" "}
        </DescriptionTitle>
        <ContainerButtons>
          <Buttons background>Buscar atendimento</Buttons>
          <Buttons background={false}>Oferecer atendimento</Buttons>
        </ContainerButtons>
      </TitleContainer>
      <Image src={logo} alt="image_doctor" />
    </Container>
  );
};
