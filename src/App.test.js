//we need to make a test that will render both the search bar and the pokemonlist, aka we are rendering the <App /> . this gonna be hard, we are going to use the character list demo pinned in chrome rn. goodluck tomorrow alex.

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('search should filter our pokemon, updating our state and returning one specific pokemon', async () => {
  //render our App
  render(<App />);
  // find our text box
  const input = screen.getByRole('textbox');
  //simulate user typing in pikachu
  userEvent.type(input, 'pikachu');
  const value = input.value;
  console.log('value', value);
  return waitFor(() => {
    //WE NEED A PIKACHU
    const result = screen.getAllByRole('listitem');
    expect(result[0].textContent.trim()).toEqual('pikachu');
    screen.debug();
  });
});
