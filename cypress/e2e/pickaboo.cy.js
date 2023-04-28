describe('Automation on pickaboo', () => {

  // Function to login with the given credentials
  function login(email, password) {
    cy.contains('Login').click()
    cy.get('input[placeholder="Mobile Number/Email"]').type(email)
    cy.get('input[placeholder="Password"]').type(password)
    cy.get('span.MuiButton-label').click()
    cy.contains('My Account').should('be.visible')
  }

  // Function to logout the current user
  function logout(){
    cy.contains('My Account',{timeout:10000}).click()
    cy.contains('Log Out').click()
    cy.contains('Login').should('be.visible')
    cy.wait(5000)
  }

  // Function to navigate to the homepage
  function navigate_homepage(){
    cy.viewport(1920, 1080) // expanding the webpage in full screen since webelement might collapse in small screen
    cy.visit('https://www.pickaboo.com/')

    // Try to click the close button if it exists, but don't fail the test if it doesn't
    cy.get('#rcc-confirm-button').click() //click on 'I Understand' button at the bottom
    cy.get('.close-btn', { timeout: 5000 }).eq(1).click()
  }

  beforeEach(() => {
    // to make sure there is no previous sessions or cookies left, since it might create issues while authenticating
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
  })

  it('Add a watch to cart', () => {
    navigate_homepage()
    login('foysal0322@gmail.com','TestP@ss123')
    cy.get('input.searchInput.form-control').eq(0).type('watch') //search for product
    cy.wait(5000)         // wait 5 sec to load the suggestion query
    cy.contains('in Watch').click()
    cy.contains('Search Result for "watch"').should('be.visible')
    cy.get('.product-title',{timeout:5000}).eq(0).click() // click on the first product
    cy.wait(5000)
    cy.contains('ADD TO CART').click()
    cy.wait(5000)
    // cy.get('.bobble').contains('1').should('be.visible') // validating with cart's no
    cy.contains('cart').click()
    cy.wait(6000)
    cy.get('.save-button').contains('Remove').click() // removing the product from the cart
    cy.wait(6000)
    cy.contains('Your cart is empty').should('be.visible')
    logout()
  })

  it('Update first name',() =>{
    navigate_homepage()
    login('foysal0322@gmail.com','TestP@ss123')
    cy.contains('My Account').click() // click on my account
    cy.wait(3000)
    cy.contains('Manage Account').click()
    cy.contains('My Account').should('be.visible')

    // update the first name 
    cy.contains('Edit').click()
    cy.get('input[placeholder="Enter your first name"]').clear().type('Foysal updated')
    cy.xpath("//div[@class='Button__StyledBtn-sc-55nib8-0 fZtEtb dc-btn']//a").click()
    cy.wait(3000)

    // reset the name
    cy.contains('Edit').click()
    cy.get('input[placeholder="Enter your first name"]').clear().type('Foysal')
    cy.xpath("//div[@class='Button__StyledBtn-sc-55nib8-0 fZtEtb dc-btn']//a").click()
    cy.wait(3000)

    logout()

})



it('Navigate to about us',() =>{
  navigate_homepage()
  cy.wait(5000)
  cy.contains('About Us').click()
  cy.title().should('eq','Get to Know About Us | pickaboo.com')
})

})
