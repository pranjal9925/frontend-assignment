import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  const mockHandlePageChange = jest.fn();

  const setup = (page: number, totalPages: number) => {
    render(
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePageChange={mockHandlePageChange}
        rowsPerPage={5}
      />
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all buttons", () => {
    setup(0, 5); // Page 0 of 5

    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Last")).toBeInTheDocument();
  });

  it("disables 'First' and 'Prev' buttons on the first page", () => {
    setup(0, 5); // Page 0 of 5

    const firstButton = screen.getByText("First");
    const prevButton = screen.getByText("Prev");

    expect(firstButton).toBeDisabled();
    expect(prevButton).toBeDisabled();
  });

  it("disables 'Next' and 'Last' buttons on the last page", () => {
    setup(4, 5); // Page 4 of 5 (last page)

    const nextButton = screen.getByText("Next");
    const lastButton = screen.getByText("Last");

    expect(nextButton).toBeDisabled();
    expect(lastButton).toBeDisabled();
  });

  it("enables all buttons on a middle page", () => {
    setup(2, 5); // Page 2 of 5

    const firstButton = screen.getByText("First");
    const prevButton = screen.getByText("Prev");
    const nextButton = screen.getByText("Next");
    const lastButton = screen.getByText("Last");

    expect(firstButton).not.toBeDisabled();
    expect(prevButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
    expect(lastButton).not.toBeDisabled();
  });

  it("calls handlePageChange with the correct value when clicking 'First'", () => {
    setup(2, 5); // Page 2 of 5

    const firstButton = screen.getByText("First");
    fireEvent.click(firstButton);

    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(0);
  });

  it("calls handlePageChange with the correct value when clicking 'Prev'", () => {
    setup(2, 5); // Page 2 of 5

    const prevButton = screen.getByText("Prev");
    fireEvent.click(prevButton);

    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(1); // Page 1
  });

  it("calls handlePageChange with the correct value when clicking 'Next'", () => {
    setup(2, 5); // Page 2 of 5

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(3); // Page 3
  });

  it("calls handlePageChange with the correct value when clicking 'Last'", () => {
    setup(2, 5); // Page 2 of 5

    const lastButton = screen.getByText("Last");
    fireEvent.click(lastButton);

    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(4); // Page 4
  });

  it("does not call handlePageChange when clicking disabled buttons", () => {
    setup(0, 5); // Page 0 of 5 (first page)

    const firstButton = screen.getByText("First");
    const prevButton = screen.getByText("Prev");

    fireEvent.click(firstButton);
    fireEvent.click(prevButton);

    expect(mockHandlePageChange).not.toHaveBeenCalled();
  });
});
