
describe('Login', () =>{
  //Teste de login de usuário
  it('successfully', () =>{
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
  
})

