context('Actions', () => {
    before(() => {
        cy.visit('https://publisher.pukaad.com/inventory/announce')
    })  // before
    describe('Testcase',() => {

        describe('Headtitle',() => {

        it('Case 01 / H true',() => {
            cy.get('#inputTitle').click().type('Headtitle test').should('have.value','Headtitle test')
            cy.get('.relative').find('.preview-text').contains('Headtitle test').should('have.text','Headtitle test')
            cy.get('.relative').find('.bg-previews-card').should('have.css','background-color','rgb(201, 232, 255)')
        })
        it('Case 02 / H error 5',() => {
            cy.get('#inputTitle').click().clear().type('Head').should('have.value','Head')
            //cy.get('.box-input-title-child').should('have.css','border-color','rgb(211, 47, 47)')
            cy.contains('กรุณากรอกอย่างน้อย 5 ตัวอักษร').should('have.text','กรุณากรอกอย่างน้อย 5 ตัวอักษร')
            cy.get('.relative').find('.preview-text').contains('Head').should('have.text','Head')
            cy.get('.relative').find('.bg-previews-card').should('have.css','background-color','rgb(201, 232, 255)')
        })
        it('Case 03 / H error 0',() => {
            cy.get('#inputTitle').click().clear()
            cy.contains('สร้างประกาศทั่วไป').click()
            //cy.get('.box-input-title-child').should('have.css','border-color','rgb(211, 47, 47)')
            cy.contains('จำเป็นต้องกรอกข้อมูลให้ครบ').should('have.text','จำเป็นต้องกรอกข้อมูลให้ครบ')
        })
        it('Case 04 / H true + color ',() => {
            cy.get('#inputTitle').click().type('Headtitle test').should('have.value','Headtitle test')
            cy.get('.relative').find('.preview-text').contains('Headtitle test').should('have.text','Headtitle test')
            cy.get('.box-input-title-child').find('.box-color-type').get('[style*="background-color: rgb(255, 230, 244);"]').click()
            cy.get('.relative').find('.bg-previews-card').should('have.css','background-color','rgb(255, 230, 244)')
            
        })
    }) // Headtitle

        describe('Detail', () => {
            before(() => {
                cy.get('#inputTitle').clear()
            })
            it('Case 05 / D true',() => {
                cy.get('#inputDetail').click().type('DatatestDatatestDatatestDatatestDatatestDatatestDatatestDatatestDatatestDatatest').should('have.value','DatatestDatatestDatatestDatatestDatatestDatatestDatatestDatatestDatatestDatatest')
            }) 
            it('Case 06 / D error 25',() => {
                cy.get('#inputDetail').click().clear().type('Test error 25')
                //cy.get('.box-input-title').should('have.css','border-color','rgb(211, 47, 47)') 
                cy.contains('กรุณากรอกอย่างน้อย 25 ตัวอักษร').should('have.text','กรุณากรอกอย่างน้อย 25 ตัวอักษร ')
            })                                                                                         
            it('Case 07 / D error 0',() => {
                cy.get('#inputDetail').click().clear()
                cy.contains('สร้างประกาศทั่วไป').click()
                cy.get('.pl-2').contains('จำเป็นต้องกรอกข้อมูลให้ครบ').should('have.text','จำเป็นต้องกรอกข้อมูลให้ครบ')
            })
        })
    })
}) // context


// it('Case 01 / H true',() => {
//     cy.get('#inputTitle').click().type('Headtitle test').should('have.value','Headtitle test')
//     cy.get('.relative').find('.preview-text').contains('Headtitle test').should('have.text','Headtitle test')
//     cy.get('.relative').find('.bg-previews-card').should('have.css','background-color','rgb(201, 232, 255)')
// })
// it('Case 02 / H error 5',() => {
//     cy.get('#inputTitle').click().clear().type('Head').should('have.value','Head')
//     //cy.get('.box-input-title-child').should('have.css','border-color','rgb(211, 47, 47)')
//     cy.contains('กรุณากรอกอย่างน้อย 5 ตัวอักษร').should('have.text','กรุณากรอกอย่างน้อย 5 ตัวอักษร')
//     cy.get('.relative').find('.preview-text').contains('Head').should('have.text','Head')
//     cy.get('.relative').find('.bg-previews-card').should('have.css','background-color','rgb(201, 232, 255)')
// })
// it('Case 03 / H error 0',() => {
//     cy.get('#inputTitle').click().clear()
//     cy.contains('สร้างประกาศทั่วไป').click()
//     //cy.get('.box-input-title-child').should('have.css','border-color','rgb(211, 47, 47)')
//     cy.contains('จำเป็นต้องกรอกข้อมูลให้ครบ').should('have.text','จำเป็นต้องกรอกข้อมูลให้ครบ')
// })
// it('Case 04 / H true + color ',() => {
//     cy.get('#inputTitle').click().type('Headtitle test').should('have.value','Headtitle test')
//     cy.get('.relative').find('.preview-text').contains('Headtitle test').should('have.text','Headtitle test')
//     cy.get('.box-input-title-child').find('.box-color-type').get('[style*="background-color: rgb(255, 230, 244);"]').click()
//     cy.get('.relative').find('.bg-previews-card').should('have.css','background-color','rgb(255, 230, 244)')
    
// })