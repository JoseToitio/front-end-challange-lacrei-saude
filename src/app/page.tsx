"use client";

import { Header } from "@/components/Header";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 138px;
  margin-right: 138px;
`;

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header />
    </Container>
  );
}
