describe('Demo Web Shop - Add Product to Cart', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false);
    cy.visit('http://demowebshop.tricentis.com/');
  });

  it('searches and adds a product to cart', () => {
    // Search for a product
    cy.get('#small-searchterms').type('laptop');
    cy.get('input[value="Search"]').click();

    // Click the first product
    cy.get('.product-item').first().find('.product-title a').click();

    // Wait for product page to load
    cy.get('.product-name').should('be.visible');

    // Click Add to Cart (updated)
    cy.get('input[id^="add-to-cart-button"]').should('be.visible').click();

    // Confirm success notification
    cy.get('.bar-notification.success')
      .should('contain', 'The product has been added to your shopping cart');

    // Go to cart and check item is added
    cy.get('#topcartlink .cart-label').click();
    cy.get('.cart-item-row').should('exist');

    // Agree T&C and click checkout
    cy.get('#termsofservice').click();
    cy.get('#checkout').click();

    //click on checkout as a guest button
    cy.get('.checkout-as-guest-button').click()
  });
});