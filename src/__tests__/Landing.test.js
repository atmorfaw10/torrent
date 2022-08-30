import React from "react";
import '@testing-library/jest-dom'
import Landing from "../components/Landing"
import { render, screen} from "@testing-library/react";

it("renders without crashing", () => {
    render(<Landing />);

    expect(screen.getByText("Torrent"))
});