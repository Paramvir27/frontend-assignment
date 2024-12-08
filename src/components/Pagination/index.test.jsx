import { describe, it, expect, afterEach, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./index";

describe("[Unit] Pagination Component Test Group", () => {
  const mockOnPageChange = vi.fn();
  const mockOnPrevious = vi.fn();
  const mockOnNext = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with given props", () => {
    const { getByText } = render(
      <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} onPrevious={mockOnPrevious} onNext={mockOnNext} />
    );

    expect(getByText("Previous")).toBeInTheDocument();
    expect(getByText("Next")).toBeInTheDocument();
    expect(getByText("Page 1")).toBeInTheDocument();
  });

  it("disables Previous button on the first page", () => {
    const { getByText } = render(
      <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} onPrevious={mockOnPrevious} onNext={mockOnNext} />
    );

    const previousButton = getByText("Previous");
    expect(previousButton).toBeDisabled();
  });

  it("disables Next button on the last page", () => {
    const { getByText } = render(
      <Pagination currentPage={5} totalPages={5} onPageChange={mockOnPageChange} onPrevious={mockOnPrevious} onNext={mockOnNext} />
    );

    const nextButton = getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  it("calls onPrevious when Previous button is clicked", () => {
    const { getByText } = render(
      <Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} onPrevious={mockOnPrevious} onNext={mockOnNext} />
    );

    fireEvent.click(getByText("Previous"));
    expect(mockOnPrevious).toHaveBeenCalledTimes(1);
  });

  it("calls onNext when Next button is clicked", () => {
    const { getByText } = render(
      <Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} onPrevious={mockOnPrevious} onNext={mockOnNext} />
    );

    fireEvent.click(getByText("Next"));
    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });
});