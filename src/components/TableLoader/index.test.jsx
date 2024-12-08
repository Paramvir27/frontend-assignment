// frontend-assignment/src/components/TableLoader/TableLoader.test.jsx
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import TableLoader from "./index";

describe("[Unit] - TableLoader Component Test Group", () => {
  test("renders <TableLoader/> component", () => {
    render(<TableLoader rowCount={5} columnHeadings={[]} />);
  });

  test("renders the correct number of rows", () => {
    const { container } = render(<TableLoader rowCount={3} columnHeadings={[{ key: "1", heading: "Column 1" }]} />);
    const rows = container.querySelectorAll("tbody tr");
    expect(rows.length).toBe(3);
  });

  test("renders the correct number of columns", () => {
    const columnHeadings = [
      { key: "1", heading: "Column 1" },
      { key: "2", heading: "Column 2" },
    ];

    const { container } = render(<TableLoader rowCount={2} columnHeadings={columnHeadings} />);
    const cells = container.querySelectorAll("tbody td");
    expect(cells.length).toBe(2 * columnHeadings.length);
  });

  test("renders the correct column headings", () => {
    const columnHeadings = [
      { key: "1", heading: "Column 1" },
      { key: "2", heading: "Column 2" },
    ];
    const { getByText } = render(<TableLoader rowCount={1} columnHeadings={columnHeadings} />);
    columnHeadings.forEach(column => {
      expect(getByText(column.heading)).toBeInTheDocument();
    });
  });
});