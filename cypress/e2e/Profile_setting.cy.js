context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://pukaad.com/settings/personal-detail')
    cy.viewport(1980, 1080)
    // cy.visit('https://example.cypress.io/commands/actions')
  })
      
    //font Anuphan-Regular
  


    it('Test ยกเลิก+check alert+check ยกเลิกแล้ว text ไม่เปลี่ยน ', () => {
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear()
      cy.get('.text-field-basic > .Body-large').should('have.css', 'border-color', 'rgb(211, 47, 47)')
      cy.get('.Label-medium').should('have.css','color', 'rgb(211, 47, 47)').should('have.css','font-family','Anuphan-Regular')
      cy.get(':nth-child(1) > .detail-edit-column > .edit-btn > .v-btn-black').click()
      cy.get(':nth-child(1) > .detail-column > .detail-data').should('have.text', 'DeECommand') 
    })
    it('Test check 50 max', () => {
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear().type('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',{delay: 50}).invoke('val').should('have.length','50')
    })
    it('Test เว้นวรรคด้านหน้า ', () => {
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear().type(' DEDAY')
      cy.wait(500)
      cy.get('.Label-medium').should('have.text','รูปแบบไม่ถูกต้อง')
      cy.get('.v-btn-primary').click()
      cy.contains('แก้ไขชื่อโปรไฟล์').should('not.exist')
    })
    it('Test เว้นวรรคติดกัน ', () => {
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear().type('DE  DAY')
      cy.wait(500)
      cy.get('.Label-medium').should('have.text','รูปแบบไม่ถูกต้อง')
      cy.get('.v-btn-primary').click()
      cy.contains('แก้ไขชื่อโปรไฟล์').should('not.exist')
    })
    it('Test Emoji ตัวแรก', () => {
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear().type('🤣Surachai')
      cy.wait(500)
      cy.get('.Label-medium').should('have.text','รูปแบบไม่ถูกต้อง')
      cy.get('.v-btn-primary').click()
      cy.contains('แก้ไขชื่อโปรไฟล์').should('not.exist')
    })
    it('Test ตัวอักษรไม่ครบ', () => {
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear().type('DEDA')
      cy.wait(500)
      cy.get('.Label-medium').should('have.text','กรุณากรอกอย่างน้อย 5 ตัวอักษร')
      cy.get('.v-btn-primary').click()
      cy.contains('แก้ไขชื่อโปรไฟล์').should('not.exist')
    })

    it('Test เพศ Check alert ', () => {
        cy.get(':nth-child(2) > .detail-column > .detail-edit').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.select-basic > .Label-large').should('have.css','color','rgb(211, 47, 47)')
        cy.get('.select-basic > .Label-large').should('have.text','โปรดเลือก')
        cy.wait(500)
      })
      it('Test เพศ Check select เพศ ', () => {
        cy.get(':nth-child(2) > .detail-column > .detail-edit').click()
        cy.get('.dropdown-toggle').click()
     
        cy.get('.select-menu > :nth-child(1)').click()
 
        cy.get('.dropdown-toggle > .Body-large').should('have.text','ชาย')
    
        cy.get('.v-btn-primary').click()
        cy.get(':nth-child(2) > .detail-column > .detail-data').should('have.text', 'ชาย')
   
        cy.get(':nth-child(2) > .detail-column > .detail-edit').click()
        cy.get('.dropdown-toggle > .Body-large').should('have.text','ชาย')
      
        cy.get('.dropdown-toggle').click()
   
        cy.get('.select-menu > :nth-child(3)').click()
   
        cy.get('.dropdown-toggle > .Body-large').should('have.text','หญิง')
  
        cy.get('.v-btn-primary').click()
        cy.get(':nth-child(2) > .detail-column > .detail-data').should('have.text', 'หญิง')
      })
      it('Test เพศ check ยกเลิกแล้วกดแก้ไข กรณีผิด', () => {
        cy.get(':nth-child(2) > .detail-column > .detail-edit').click()
        
        cy.get('.dropdown-toggle').click()
      
        cy.get('.select-menu > :nth-child(1)').click()
     
        cy.get('.v-btn-primary').click()
   
        cy.get(':nth-child(2) > .detail-column > .detail-edit').click()
      
        cy.get('.dropdown-toggle').click()
       
        cy.get('.select-menu > :nth-child(3)').click()
      
        cy.get('.v-btn-black').click()
        
        cy.get(':nth-child(2) > .detail-column > .detail-edit').click()

        //check ว่า ถ้าเราเลือกแล้วกดยกเลิกแล้วตัวที่เราเลือกจะยังเปลี่ยนไหม
        cy.get('.dropdown-toggle > .Body-large').should('have.text','ชาย')
        cy.wait(500)
      })
      it('Date check ',() =>{
      cy.get(':nth-child(3) > .detail-column > .detail-edit').click()
      cy.get('div.v-calendar-input').click()
      cy.get('[aria-label="Friday, February 2, 2024"] > .btn-light',{delay: 200}).click()
      cy.get('.v-btn-primary').click()
      cy.get(':nth-child(3) > .detail-column > .detail-data').should('have.text','2-January-2024')
      cy.get(':nth-child(3) > .detail-column > .detail-edit').click()
      cy.get('div.v-calendar-input').click()
      cy.get('[aria-label="Saturday, February 17, 2024"] > .btn-light').click()
      cy.get('.v-btn-black').click()
      cy.get(':nth-child(3) > .detail-column > .detail-data').should('have.text','2-January-2024')
      cy.get(':nth-child(3) > .detail-column > .detail-edit').click()
      //check ว่า ถ้าเราเลือกแล้วกดยกเลิกแล้วตัวที่เราเลือกจะยังเปลี่ยนไหม
      cy.get('div.v-calendar-input > .Body-medium').should('have.text','2-January-2024')
      })

      it('Date check ',() =>{
        cy.get(':nth-child(4) > .detail-column > .detail-edit').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.tag-select-row > :nth-child(1)',{delay: 200}).click()
        cy.get('.tag-select-row > :nth-child(2)',{delay: 200}).click()
        cy.get('.tag-select-row > :nth-child(3)').click()
        cy.get('.v-btn-primary').click()
        cy.get('.interest-warp > :nth-child(3)').should('have.text' ,' ถักไหมพรม ')
        cy.get('.interest-warp > :nth-child(2)').should('have.text' ,' เดิน-วิ่งมาราธอน ')
        cy.get('.interest-warp > :nth-child(1)').should('have.text' ,' ปลูกต้นไม้ ')
        cy.get(':nth-child(4) > .detail-column > .detail-edit').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.tag-select-row > :nth-child(4)',{delay: 200}).click()
        cy.get('.tag-select-row > :nth-child(5)',{delay: 200}).click()
        cy.get('.v-btn-black').click()
        cy.get(':nth-child(4) > .detail-column > .detail-edit').click()
        cy.get('.dropdown-toggle').click()
        //check ว่าการเลือกแล้วกดยกเลิก ตัวที่เราเลือกมันจะยังเลือกอยู่ไหม
        cy.get(':nth-child(4) > .icon-checked').should('not.exist') 
        cy.get(':nth-child(5) > .icon-checked').should('not.exist')
        cy.get('.v-btn-primary').click()
       })





    it('Test ถูกฟอร์ม', () => {
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear().type('De Day',{delay: 200}).should('have.value','De Day')
      cy.wait(500)
      cy.get('.v-btn-primary').click()
      cy.get(':nth-child(1) > .detail-column > .detail-data').should('have.text', 'De Day')
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear().type('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',{delay: 200}).should('have.value','DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD')
      cy.wait(500)
      cy.get('.v-btn-primary').click()
      cy.get(':nth-child(1) > .detail-column > .detail-data').should('have.text', 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD')
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear().type('DeDay🤣Surachai',{delay: 200}).should('have.value','DeDay🤣Surachai')
      cy.wait(500)
      cy.get('.v-btn-primary').click()
      cy.get(':nth-child(1) > .detail-column > .detail-data').should('have.text', 'DeDay🤣Surachai')
    })

    


    it('Test Check alert',() => {
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear()
      cy.get('.text-field-basic > .Body-large').should('have.css', 'border-color', 'rgb(211, 47, 47)')
      cy.get('.Label-medium').should('have.css','color', 'rgb(211, 47, 47)')
    })


        it('Test ข้อมูลบัญชี',() => {
    //   //Profile name
      cy.get(':nth-child(1) > .detail-column > .detail-edit').click()
      cy.get('.text-field-basic > .Body-large').clear().type('De Day',{delay: 200}).should('have.value','De Day')
      cy.get('.v-btn-primary').click()
      //Type
      cy.get(':nth-child(2) > .detail-column > .detail-edit').click()
      cy.get('.dropdown-toggle').click()
      cy.get('.select-menu > :nth-child(1)',{delay: 200}).click()
      cy.get('.v-btn-primary').click()
      // Date
      cy.get(':nth-child(3) > .detail-column > .detail-edit').click()
      cy.get('div.v-calendar-input').click()
      cy.get('[aria-label="Friday, February 2, 2024"] > .btn-light',{delay: 200}).click()
      cy.get('.v-btn-primary').click()
      // Farvorite
      cy.get(':nth-child(4) > .detail-column > .detail-edit').click()
      cy.get('.dropdown-toggle').click()
      cy.get('.tag-select-row > :nth-child(1)',{delay: 200}).click()
      cy.get('.tag-select-row > :nth-child(2)',{delay: 200}).click()
      cy.get('.tag-select-row > :nth-child(3)').click()
      cy.get('.v-btn-primary').click()
      //Check
      cy.get(':nth-child(1) > .detail-column > .detail-data').should('have.text', 'De Day')
      cy.get(':nth-child(2) > .detail-column > .detail-data').should('have.text', 'ชาย')
      cy.get(':nth-child(3) > .detail-column > .detail-data').should('have.text','2-January-2024')
      cy.get('.interest-warp > :nth-child(3)').should('have.text' ,' ถักไหมพรม ')
      cy.get('.interest-warp > :nth-child(2)').should('have.text' ,' เดิน-วิ่งมาราธอน ')
      cy.get('.interest-warp > :nth-child(1)').should('have.text' ,' ปลูกต้นไม้ ')
    })
  })
