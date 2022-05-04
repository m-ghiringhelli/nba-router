import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('displays the correct team detail when clicking', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // grab team to be clicked
    const hornets = await screen.findByAltText(/hornets/i, {}, {timeout: 5000});
    
    // click on team
    fireEvent.click(hornets);

    // display correct team
    const teamName = await screen.findByText(/charlotte/i, {}, {timeout: 5000});
    expect(teamName).toBeInTheDocument();
  });

  it('displays the correct team and returns to home when clicking back', async () => {
    render(
      <MemoryRouter initialEntries={['/', '/team/5']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );
    // check initial state
    screen.getByText(/loading/i);
    
    // verify the correct team is displayed
    const logo = await screen.findByAltText(/hornets/i, {}, {timeout: 5000});
    expect(logo).toBeInTheDocument();
    
    // grab the back link
    const back = screen.getByText(/view/i);
    fireEvent.click(back);

    // verify it shows home page by checking for 30 rendered images
    const logos = await screen.findAllByAltText(/logo/i, {}, {timeout: 5000});
    expect(logos.length).toBe(30);
  })
})