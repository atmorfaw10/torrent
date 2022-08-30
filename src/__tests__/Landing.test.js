import React from "react";
import '@testing-library/jest-dom'
import Landing from "../components/Landing"
import { render, screen, cleanup} from "@testing-library/react";

afterEach(cleanup)

describe('Landing page', () => {
    it('should take a snapshot', () => {
        const {asFragment} = render(<Landing />);
        expect(asFragment(<Landing />)).toMatchSnapshot();
    });

    it('should render an image' , () => {
        render(<Landing />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('alt', 'landing');
    });

    it('should find the text paragraph texts on the screen', () => {
        render(<Landing />);
        const firstText = screen.getByText('Feel the Music');
        const secondText = screen.getByText('Stream over 82 million tracks with one click');
        expect(firstText).toBeInTheDocument();
        expect(secondText).toBeInTheDocument();
    });

    // it('should render a button with the class of landing-buttn', () => {
    //     render(<Landing />);
    //     const landingButton = screen.getByRole('button', { name: /landing-buttn/i });
    //     expect(landingButton).toHaveClass('landing-buttn');
    // });
});