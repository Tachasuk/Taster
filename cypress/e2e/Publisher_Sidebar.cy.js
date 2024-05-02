context('Actions', () => {
    before(() => {
        cy.visit('https://publisher.pukaad.com/dashboard?menu=0&text=null&select=null&tag=null&sort=%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%A1%E0%B8%94%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%B5%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87',{ timeout: 30000 })
        cy.viewport(1980,1080)
    })
    describe('check font',() => {
        // it('check test หัวข้อหลัก', () => {
        //     cy.viewport(1980,1080)
        //     cy.get('.pr-2 > :nth-child(1) > .menu-slide').click()
        //     cy.get('.mrk_checkdropdown > .mrk_icon_toggle').click({ multiple: true })
        //     cy.get('.pl-2').find('.text-base').should('be.visible')
        //     cy.get('[to="/dashboard"] > .text-base').should('have.css', 'font-family', 'Anuphan').should('have.css','line-height','20px').should('have.css', 'font-weight', '700')
        // })
        it('Check test หัวข้อรอง',() => {
            cy.viewport(1980,1080)
            // cy.get('.mrk_sub_menu').find('span').should('have.css','font-size','16px').should('have.css', 'font-weight', '700')
            cy.contains('สร้าง').click()
            cy.get('div[id="headlessui-dialog-panel-9"] .cursor-pointer > svg').click()
        })
    })

    // cy.get('.pr-4').find('button').then(($element) => {
    //     const elementName = $element.prop('tagName'); // หรือคุณสมบัติอื่น ๆ ที่ต้องการ
    //     cy.log('Element Name:', elementName);
    //   });

})