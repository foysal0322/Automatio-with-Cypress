
describe('Automation on Prothon Alo', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
  })

  it('Login', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.pickaboo.com/')

    // Try to click the close button if it exists, but don't fail the test if it doesn't
    try {
      cy.get('.close-btn', { timeout: 5000 }).eq(1).click()
    } catch (error) {
      // Do nothing if the element is not found
    }

    cy.contains('Login').click()
    cy.get('input[placeholder="Mobile Number/Email"]').type('foysal0322@gmail.com')
    cy.get('input[placeholder="Password"]').type('TestP@ss123')
    cy.get('span.MuiButton-label').click()
    // cy.should('have.text','My Account')
    cy.contains('My Account',{timeout:10000}).click()
    cy.contains('Log Out').click()
    cy.contains('Login').should('be.visible')
  })
})
