context('Actions', () => {
    before(() => {
        cy.visit('https://pukaad.com/place-detail/1',{ timeout: 30000 })
        
    })
    describe('check font',() => {
        it('Body-medium',() => {
            cy.viewport(1980,1080)
            cy.get('.Body-medium').should('have.css','font-family','Sarabun-Regular').should('have.css','font-size','14px').should('have.css','line-height','20px')
        })
        it('Serif-medium',() => {
            cy.viewport(1980,1080)
            cy.get('.Label-Serif-medium').should('have.css','font-family','Sarabun-Regular').should('have.css','font-size','14px').should('have.css','line-height','18.2px')
        })
        it('Body-smaill',() => {
            cy.viewport(1980,1080)
            cy.get('.Body-small').should('have.css','font-family','Sarabun-Regular').should('have.css','font-size','12px').should('have.css','line-height','16px')
        })
        it('Headline-medium',() => {
            cy.viewport(1980,1080)
            cy.get('.Headline-medium-prominent').should('have.css', 'font-family', 'Anuphan-Bold').should('have.css','font-size','26px').should('have.css','line-height','32px')
        })
        it('Title-medium',() => {
            cy.viewport(1980,1080)
            cy.get('.Title-medium-prominent').should('have.css', 'font-family', 'Anuphan-SemiBold').should('have.css','font-size','20px').should('have.css','line-height','24px')
        })
    })
})