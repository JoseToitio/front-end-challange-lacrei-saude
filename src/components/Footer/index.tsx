import Image from "next/image";
import logo from "@/app/public/images/Vector.png";
import icons from "@/app/public/images/Icons.png";
import { Container, Copyright, Divider, Helpers, HelpersContainer, Socials } from "./style";

interface ILinks {
  title: string;
  links: string[];
};

const links: ILinks[] = [
  {
    title: 'Lacrei Saúde',
    links: [
      "Quem Somos",
      "Propósito",
      "Missão, Visão e Valor",
      "Acessibilidade",
    ],
  },
  {
    title: 'Saúde',
    links:  ["Buscar atendimento", "Oferecer atendimento"]
  },
  {
    title: 'Segurança e Privacidade',
    links:  [
      "Política de Privacidade",
      "Termos de Uso",
      "Direitos de Titular",
    ],
  }
];

const FooterItems: React.FC<ILinks> = link => {
  return <Helpers>
    <p>{link.title}</p>
    {link.links.map((items, index) => <span key={index}>{items}</span>)}
  </Helpers>
}

export const Footer = () => {
  return (
    <>
    <Container>
    <Divider />
      <HelpersContainer>
      <Socials>
        <Image src={logo} alt="logo" />
        <Image src={icons} alt="icons" width={240} height={48} />
      </Socials>
        {links.map((link, key) => (
          <FooterItems key={String(key)} {...link} />
        ))}
      </HelpersContainer>
      <Divider />
    </Container>
    <Copyright>
      <p>A Lacrei não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.</p>
      <p>Em caso de problemas psicológicos, ligue para 188 (CVV) ou acesse o site www.cvv.org.br</p>
      <p>Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ: 51.265.351/0001-65</p>
    </Copyright>
    </>
  );
};
