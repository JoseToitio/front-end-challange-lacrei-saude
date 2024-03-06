"use client";

import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 138px;
  margin-right: 138px;
`;

export default function Home(): JSX.Element {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
    {isClient && <Container>
      <Header />
      <MainContent />
    </Container>}
    </>
  );
}
