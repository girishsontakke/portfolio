import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import RotatingCard from "../RotatingCard.component";

describe("RotatingCard", () => {
  test("frontComponent render on screen", () => {
    const FrontComponent = () => <div>Front Component</div>;
    const BackComponent = () => <div>Back Component</div>;
    render(
      <RotatingCard
        frontComponent={<FrontComponent />}
        backComponent={<BackComponent />}
      />
    );
    const frontElement = screen.getByText(/front\scomponent/i);
    expect(frontElement).toBeInTheDocument();
  });
  test("backComponent render on screen", () => {
    const FrontComponent = () => <div>Front Component</div>;
    const BackComponent = () => <div>Back Component</div>;
    render(
      <RotatingCard
        frontComponent={<FrontComponent />}
        backComponent={<BackComponent />}
      />
    );
    const backElement = screen.getByText(/back\scomponent/i);
    expect(backElement).toBeInTheDocument();
  });
  test("backComponent not visible on screen", () => {
    const FrontComponent = () => <div>Front Component</div>;
    const BackComponent = () => <div>Back Component</div>;
    render(
      <RotatingCard
        frontComponent={<FrontComponent />}
        backComponent={<BackComponent />}
      />
    );
    const backElement = screen.getByText(/back\scomponent/i);
    expect(backElement).toBeInTheDocument();
    expect(backElement.parentElement).toHaveClass(
      "wrapper__card__backComponent"
    );
  });
});
