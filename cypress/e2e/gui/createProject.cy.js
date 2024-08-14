import { faker } from '@faker-js/faker'

//Pode ser adicionado tanto no describe quanto no arquivo de configuração do cypress
const options = { env: { snapshotOnly: true } }

describe('Create Project', options,() =>{
    beforeEach(() =>{
        cy.api_deleteProjects()
        cy.login()
    })

    it('successfully', () =>{
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(10)
        }

        cy.gui_createProject(project)

        cy.url()
            .should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')

    })
})