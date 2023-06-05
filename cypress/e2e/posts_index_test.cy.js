describe('access to posts#index page', () => {
  beforeEach(() => {
    cy.visit('/posts');
  });

  it('url check', () => {
    cy.url().should('eq', 'http://localhost:5000/posts');
  });
});