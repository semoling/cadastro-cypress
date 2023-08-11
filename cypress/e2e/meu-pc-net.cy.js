describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://meupc.net/')
    
   cy.wait(1000)
   cy.get('.navbar-burger').click()
   cy.get('ul.menu-list')
   .children('li')
   .children('a[href="https://meupc.net/cadastro"]')
   .click()
   cy.get('input[name="nome"]').type('batata')
   cy.get('input[name="email"]').type('batata.frita@jajaq.com')
   cy.get('input[placeholder="Defina uma senha"]').type('Fritaaaaaaa')
   cy.get('input[type="checkbox"]').check( {force:true})
   cy.contains('Cadastrar-se').click()
   cy.contains('Escolha seu nome de usuário').should('be.visible')

  })
})