import React from 'react';
import Home from './page';

describe('<Home />', () => {
  it('renders component and header', () => {
    // Mount the React component for the Home page
    cy.mount(<Home />);

    // The page should contain a p tag starts with Get started...
    cy.get('p').contains(/^get started.*/i);
  });
});
