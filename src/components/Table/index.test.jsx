import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Table from "./index";

describe("[Unit] - Table Component Test Group", () => {
  const mockData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
  ];

  const requiredColumns = [
    { key: "id", heading: "ID" },
    { key: "name", heading: "Name" },
  ];

  test("render table with correct data", () => {
    const onPageChangeMock = vi.fn();

    render(<Table
      data={mockData}
      requiredColumns={requiredColumns}
      itemsPerPage={2}
      currentPage={1}
      onPageChange={onPageChangeMock} />);

    requiredColumns.forEach(column => {
      expect(screen.getByText(column.heading)).toBeInTheDocument();
    });

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });


  test("verify pagination is working as per expectation", async () => {
    const onPageChangeMock = vi.fn();

    render(<Table
      data={mockData}
      requiredColumns={requiredColumns}
      itemsPerPage={2}
      currentPage={1}
      onPageChange={onPageChangeMock} />);


    await userEvent.click(screen.getByText("Next"));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });


  test("previous button should be disabled on first page", () => {
    const onPageChangeMock = vi.fn();

    render(<Table
      data={mockData}
      requiredColumns={requiredColumns}
      itemsPerPage={2}
      currentPage={1}
      onPageChange={onPageChangeMock} />);

    expect(screen.getByText("Previous")).toBeDisabled();
  });


  test("next button should be disabled on last page", () => {
    const onPageChangeMock = vi.fn();

    render(<Table
      data={mockData}
      requiredColumns={requiredColumns}
      itemsPerPage={2}
      currentPage={3}
      onPageChange={onPageChangeMock} />);

    expect(screen.getByText("Next")).toBeDisabled();
  });
});