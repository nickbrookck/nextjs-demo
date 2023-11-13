describe('list search page', () => {
  it('should allow searching', () => {
    cy.visit('/');
    // Break this!
    cy.get('h1').should('contain.text', 'Really simpleX');
    cy.findByTestId('next-page-button').click();
    cy.get('h2').should('contain.text', 'next page');
    cy.findByTestId('search-box').type('Hello');
    cy.findByTestId('back-button');
  })
})


