import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sidebar from "./_Sidebar";

describe('[ LAYOUT ] _Sidebar component', () => {
    it('Is rendering', () => {
        render(<Sidebar />);
    });

    it('Is toggling', async () => {
        render(<Sidebar />);
        await userEvent.click(screen.getByTestId('button'));
        expect(screen.getByTestId('aside')).toHaveClass('collapsed');
    });
});