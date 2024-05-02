context('Actions', () => {
    // before(() => {
    //   Cypress.session.getCurrentSessionData()
    // })
    beforeEach(() => {
      cy.visit('https://pukaad.com/settings/security-and-log')
      cy.viewport(1980, 1080)
      cy.get('.ng-untouched').type('test@gmail.com')
      cy.get('.edit-btn > .Body-medium').click()
      cy.get('.Body-Serif-medium').clear().type('test12345')
      cy.get(':nth-child(1) > .fa-circle-check').should('exist')
      cy.get(':nth-child(2) > .fa-circle-check').should('exist')
      cy.get('.button-form > .v-btn').should('be.enabled')
      cy.get('.button-form > .v-btn').click()
      cy.get('.toast-message').should('have.text',' เพิ่มอีเมลสำเร็จ! ')
      cy.wait(200)
      cy.get('.toast-close-button > .ng-tns-c115-0').click()
      
      
      // cy.visit('https://example.cypress.io/commands/actions')
    })
    it('check email false' ,() => {
        // check font
        cy.get('.Body-medium').should('have.css', 'font-family', 'Sarabun-Regular');
        //font +เพิ่มอีเมล รูปแบบเมลไม่ถูก
        cy.get(':nth-child(1) > .contact-container > .v-btn > .Body-medium').click()
        cy.get('.ng-untouched').type('deday')
        //font 
        cy.get('.Label-Serif-medium').should('have.text',' รูปแบบไม่ถูกต้องงง ').should('have.css','font-family','Sarabun-Regular')
        cy.get('.ng-invalid').should('have.css', 'border-color', 'rgb(211, 47, 47)')
        cy.get('.ng-untouched').clear().type('deday@gmailcom')
        //font 
        cy.get('.Label-Serif-medium').should('have.text',' รูปแบบไม่ถูกต้อง ').should('have.css','font-family','Sarabun-Regular')
        cy.get('.ng-invalid').should('have.css', 'border-color', 'rgb(211, 47, 47)')
        cy.get('.ng-invalid').clear().type('deda**ygmail.com')
        //font 
        cy.get('.Label-Serif-medium').should('have.text',' รูปแบบไม่ถูกต้อง ').should('have.css','font-family','Sarabun-Regular')
        cy.get('.ng-invalid').should('have.css', 'border-color', 'rgb(211, 47, 47)')
        cy.get('.ng-untouched').clear()
        //font 
        cy.get('.Label-Serif-medium').should('have.text',' จำเป็นต้องกรอกข้อมูล ').should('have.css','font-family','Sarabun-Regular')
        cy.get('.ng-invalid').should('have.css', 'border-color', 'rgb(211, 47, 47)')
        cy.get('.v-btn-disable').should('be.disabled')
        cy.get('.ng-invalid').should('exist')
        cy.get('.v-btn-black').click()
    })
    it('check email true no otp', () => {
        // อีเมล รูปแบบถูกต้องเมลหลัก
        // cy.get('.ng-untouched').type('test@gmail.com')
        // cy.get('.edit-btn > .Body-medium').click()
        // cy.get('.Body-Serif-medium').clear().type('test12345')
        // cy.get(':nth-child(1) > .fa-circle-check').should('exist')
        // cy.get(':nth-child(2) > .fa-circle-check').should('exist')
        // cy.get('.button-form > .v-btn').should('be.enabled')
        // cy.get('.button-form > .v-btn').click()
        // cy.get('.toast-message').should('have.text',' เพิ่มอีเมลสำเร็จ! ')
        // cy.wait(2000)
        // เมลลอง
        cy.get(':nth-child(1) > .contact-container > .v-btn > .Body-medium').click()
        cy.get('.ng-untouched').type('deday@gmail.com').should('have.value','deday@gmail.com')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(75, 156, 211)')
        cy.get('.v-btn-black').click()
        cy.get('.ng-untouched').should('not.exist')
        cy.get(':nth-child(1) > .contact-container > .v-btn > .Body-medium').click()
        cy.get('.ng-untouched').type('deday@gmail.com').should('have.value','deday@gmail.com')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(75, 156, 211)')
        cy.get('.edit-btn > .v-btn-primary').click()


        // flow รหัสผ่าน
        cy.get('.pass-input > .Body-medium').type('deday')
        cy.get('.button-form > .v-btn').click()
        // flow ส่งเมลยืนยัน
        cy.get('.m-body > .v-btn').click()
        cy.get('.authen-otp > .ng-valid').type('111111')
        cy.get('.button-form > .v-btn').click()
        cy.contains('deday@gmail.com').should('exist')
        cy.get('.ng-tns-c115-1.ng-trigger > .toast-message').should('have.text',' เพิ่มอีเมลสำเร็จ! ')
        cy.wait(200)
        cy.get('.toast-close-button > .ng-tns-c115-1').click()
        //เมล ซ่ำ
        cy.get(':nth-child(1) > .contact-container > .v-btn > .Body-medium').click()
        cy.get('.ng-untouched').type('deday@gmail.com').should('have.value','deday@gmail.com')
        cy.get('.edit-btn > .v-btn-primary').click()
        cy.get('.Label-Serif-medium').should('have.text',' อีเมลนี้มีผู้ใช้อยู่แล้ว ').should('have.css','font-family','Sarabun-Regular')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(211, 47, 47)')
        cy.get('.v-btn-black').click()
        //check สลับอีเมล 
        cy.get('.contact-tool > :nth-child(2)').click()
        cy.get(':nth-child(1) > .contact-container > .contact-list > :nth-child(1) > .contact-detail > .contact-box > .Body-medium').should('have.text','deday@gmail.com')
        cy.get('.ng-tns-c115-2.ng-trigger > .toast-message').should('have.text',' เปลี่ยนอีเมลสำเร็จ! ')
        // ลบอีเมล
        cy.get(':nth-child(2) > .contact-detail > .contact-tool > :nth-child(1)').click()
        cy.get('[style="display: flex; gap: 10px; width: 100%;"] > :nth-child(2)').click()
        cy.contains('devileyeg@gmail.com').should('not.exist')
        cy.get('.ng-tns-c115-3.ng-trigger > .toast-message').should('have.text',' ลบอีเมลสำเร็จ! ')
    })
    it('check enable 2fa + disable', () => {
        cy.get('.v-slider').click()
        cy.get('.m-footer > .v-btn').click()
        cy.get('.ng-valid').type('111111')
        cy.get('.button-form > .v-btn').click()
        cy.get('.ng-tns-c115-1.ng-trigger > .toast-message').should('have.text',' เปิดการยืนยันตัวตนแบบสองชั้นสำเร็จ! ')
        cy.wait(200)
        cy.get('.toast-close-button > .ng-tns-c115-1').click()
        // //check disable 2fa
        cy.get('.v-slider').click()
        cy.get('.pass-input > .Body-medium').type('Dedayx22222')
        cy.get('.button-form > .v-btn').click()
        cy.get('.ng-animating > .toast-message').should('have.text',' ปิดการยืนยันตัวตนแบบสองชั้นสำเร็จ! ')
        cy.wait(200)
        cy.get('.toast-close-button > .ng-tns-c115-2').click()
    })
    it('check phone Alert + แก้ไขเบอร์หลัก',() => {
        cy.get(':nth-child(5) > .contact-container > .contact-list > :nth-child(1) > .contact-detail > .contact-tool > .Body-medium').click()
        // check ไม่กรอกข้อมูล
        cy.get('.ng-pristine').clear()
        cy.get('.Label-Serif-medium').should('have.text',' จำเป็นต้องกรอกข้อมูล ').should('have.css','font-family','Sarabun-Regular')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(211, 47, 47)')
        // check กรอกไม่ถูก
        cy.get('.ng-dirty').type('088')
        cy.get('.Label-Serif-medium').should('have.text',' รูปแบบไม่ถูกต้อง ').should('have.css','font-family','Sarabun-Regular')
        cy.get('.ng-dirty').clear().type('123456789')
        cy.get('.ng-dirty').clear().type('2222222222')
        // check กรอกถูก + check กรอบช่องกรอก
        cy.get('.ng-dirty').clear().type('660930910078')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(75, 156, 211)')
        cy.wait(200)
        cy.get('.ng-dirty').clear().type('66930910078')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(75, 156, 211)')
        cy.wait(200)
        cy.get('.ng-dirty').clear().type('+660930910078')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(75, 156, 211)')
        cy.wait(200)
        cy.get('.ng-dirty').clear().type('+66930910078')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(75, 156, 211)')
        cy.get('.edit-btn > .v-btn-primary').click()
        cy.get('.ng-animating > .toast-message').should('have.text',' แก้ไขเบอร์โทรศัพท์สำเร็จ! ')
        cy.wait(200)
        cy.get('.toast-close-button > .ng-tns-c115-1').click()
        // เช็ค ว่ากดบันทึกแล้ว เบอร์โทรศัพท์เปลี่ยหรือไม่
        cy.get(':nth-child(5) > .contact-container > .contact-list > :nth-child(1) > .contact-detail > .contact-box > .Body-medium').should('have.text', '(+66) 93 091 0078')



        cy.get(':nth-child(5) > .contact-container > .v-btn > .Body-medium').click()
        cy.get('.ng-untouched').type('088')
        cy.get('.Label-Serif-medium').should('have.text',' รูปแบบไม่ถูกต้อง ').should('have.css','font-family','Sarabun-Regular')
        cy.get('.ng-dirty').clear().type('123456789')
        cy.get('.ng-dirty').clear().type('2222222222')
        cy.get('.ng-dirty').clear().type('0930910078')
        cy.get('.edit-btn > .v-btn-primary').click()
        cy.get('.Label-Serif-medium').should('have.text', ' เบอร์โทรศัพท์นี้มีผู้ใช้อยู่แล้ว ').should('have.css','font-family','Sarabun-Regular')
        
        // check กรอกถูก + check กรอบช่องกรอก
        cy.get('.ng-dirty').clear().type('660930910079')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(75, 156, 211)')
        cy.wait(200)
        cy.get('.ng-dirty').clear().type('66930910079')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(75, 156, 211)')
        cy.wait(200)
        cy.get('.ng-dirty').clear().type('+660930910079')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(75, 156, 211)')
        cy.wait(200)
        cy.get('.ng-dirty').clear().type('+66930910079')
        cy.get('.ng-dirty').should('have.css', 'border-color', 'rgb(75, 156, 211)')
        cy.get('.edit-btn > .v-btn-primary').click()
        // check toast
        cy.get('.ng-animating > .toast-message').should('have.text',' เพิ่มเบอร์โทรศัพท์สำเร็จ! ')
        cy.wait(200)
        cy.get('.toast-close-button > .ng-tns-c115-2').click()
        cy.get(':nth-child(5) > .contact-container > .contact-list > :nth-child(2) > .contact-detail > .contact-box > .Body-medium').should('have.text', '(+66) 93 091 0079')
        cy.get(':nth-child(5) > .contact-container > .contact-list > :nth-child(2) > .contact-detail > .contact-tool > :nth-child(2)').click()
        cy.get('.ng-tns-c115-3.ng-trigger > .toast-message').should('have.text',' เปลี่ยนเบอร์โทรศัพท์สำเร็จ! ')
        cy.wait(200)
        cy.get('.toast-close-button > .ng-tns-c115-3').click()
        cy.get(':nth-child(5) > .contact-container > .contact-list > :nth-child(1) > .contact-detail > .contact-box > .Body-medium').should('have.text','(+66) 93 091 0079')
        // //ลบ เบอร์ 
        cy.get(':nth-child(5) > .contact-container > .contact-list > :nth-child(2) > .contact-detail > .contact-tool > :nth-child(1)').click()
        cy.get('[style="display: flex; gap: 10px; width: 100%;"] > :nth-child(2)').click()
        cy.get('.ng-tns-c115-4.ng-trigger > .toast-message').should('have.text',' ลบเบอร์โทรศัพท์สำเร็จ! ')
        cy.wait(200)
        cy.get('.toast-close-button > .ng-tns-c115-4').click()
        cy.contains(':nth-child(5) > .contact-container > .contact-list > :nth-child(2) > .contact-detail').should('not.exist')
    })
    it('check password', () => {
      cy.get('.label-with-edit > .Body-medium').click()
      cy.get('.pass-input > .Body-medium').type('deday').should('have.value','deday')
      cy.get('.fa-eye-slash').click()
      // cy.wait(1000)
      cy.get('.fa-eye').click()
      // cy.wait(1000)
      cy.get('.button-form > .v-btn').click()
      cy.get('.Body-Serif-medium').type('deday')
      // check alert false 8 - 20
      cy.get(':nth-child(2) > :nth-child(1) > .fa-solid').should('exist')
      // check alert false ตัวเลขและอักษร
      cy.get(':nth-child(2) > .fa-solid').should('exist')
      cy.get('.button-form > .v-btn').should('be.disabled')
      // check alert false เกิน 8 ตัว และ มีแค่ตัวอีกษร
      cy.get('.Body-Serif-medium').clear().type('dddddddddddddddd')
      cy.get(':nth-child(1) > .fa-circle-check').should('exist')
      cy.get(':nth-child(2) > .fa-solid').should('exist')
      cy.get('.button-form > .v-btn').should('be.disabled')
      // check alert false ไม่เกิน 8 ตัว มีทั้งตัวอักษรและตัวเลข
      cy.get('.Body-Serif-medium').clear().type('dddd444')
      cy.get(':nth-child(1) > :nth-child(1) > .fa-solid').should('exist')
      cy.get(':nth-child(2) > .fa-circle-check').should('exist')
      cy.get('.button-form > .v-btn').should('be.disabled')
      // check alert false พยายามเกิน 20 ตัวอักษร
      cy.get('.Body-Serif-medium').clear().type('ddddddddddddddddddddddddddddddddddddddddddddd').should('have.value','dddddddddddddddddddd')
      cy.get(':nth-child(1) > .fa-circle-check').should('exist')
      cy.get(':nth-child(2) > .fa-solid').should('exist')
      cy.get('.button-form > .v-btn').should('be.disabled')

      // h=check text
      cy.get('.m-container').should('be.visible').within(($div) => {
        cy.get('.Body-medium-prominent').should('have.css', 'font-family', 'Anuphan-SemiBold');
        cy.get('.Label-Serif-medium').should('have.css', 'font-family', 'Sarabun-Regular');
       
      })

      // check alert true 
      cy.get('.Body-Serif-medium').clear().type('test12345')
      cy.get(':nth-child(1) > .fa-circle-check').should('exist')
      cy.get(':nth-child(2) > .fa-circle-check').should('exist')
      cy.get('.button-form > .v-btn').should('be.enabled')
      cy.get('.button-form > .v-btn').click()
      cy.get('.toast-message').should('have.text',' เปลี่ยนรหัสผ่านสำเร็จ! ')
    } )
})