import { render } from "@testing-library/react";
import App from "./App";

test("Testing works!", () => {
    const { getByTestId } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId(/home-container/i)).toBeInTheDocument();
});

test("Carousel Wrapper", () => {
    const { getByTestId } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId(/carousel-wrapper/i)).toBeInTheDocument();
});

test("Carousel Loading", () => {
    const { getByTestId } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId(/carousel-loading/i)).toBeInTheDocument();
});

test("Carousel Image", () => {
    const { getByAltText } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    setTimeout(function () {
        expect(getByAltText(/carousel-image/i)).toBeInTheDocument();
      }, 0);
});
