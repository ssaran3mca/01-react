import { render } from '@testing-library/react';
import Contact from '../Contact';

const ContectTest = () => {
    render(<Contact />)
    const heading = screen.getByRole('heading');
    expect(heading).toByInTheDocument();
}