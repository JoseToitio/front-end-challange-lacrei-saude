import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Home Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const title = screen.getByText("Junte-se à nossa comunidade");
    const description = screen.getByText("Encontre atendimento clínico de qualidade ou entre para o time de profissionais da Lacrei Saúde.");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
