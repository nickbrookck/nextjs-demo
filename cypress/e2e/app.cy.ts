describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Really simple');
    cy.findByTestId('next-page-button').click();
    cy.get('h2').should('contain.text', 'next page');
    cy.findByTestId('search-box').type('Hello');
    cy.findByTestId('back-button');
  })
})
