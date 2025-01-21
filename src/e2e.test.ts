import { getSuggestions } from './';

describe('E2E', () => { 
  it('sone', () => {
    const suggestions = getSuggestions('next week');

    console.log(suggestions);
  })
})