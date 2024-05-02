

const Postname = 'TESTBASE'
const Postnamefail = 'Fail'
const Place = 'เจ๊ดา สถานีรถไฟบุรีรัมย์'
const Detail = 'TESTBASE12345678912345678'
const DetailFail = 'Fail'
const ColorBlue = 'rgb(201, 232, 255)'
const ColorP = 'rgb(230, 222, 255)'
const ColorPink = 'rgb(255, 230, 244)'
const ColorRed = 'rgb(255, 209, 211)'
const ColorO =  'rgb(255, 218, 195)'
const ColorY = 'rgb(255, 245, 194)'
const ColorG = 'rgb(222, 255, 225)'




// select element
const headtitle = '.box-input-title-child'
const detail = '.box-input-title'
const headtitle_input = '#inputTitle'
const detail_input = '#inputDetail'
const place_input = '#inputPlace'
context('Actions', () => {
    before(() => {
        cy.visit('https://publisher.pukaad.com/inventory/announce')
    })
    describe('Check Title',() => {

        // describe('Headtitle',() => {

        //     describe('Check error',() => {
        //         it('ไม่กรอกข้อมูล',() => {
        //             cy.get(headtitle).click()
        //             cy.contains('สร้างประกาศทั่วไป').click()
        //             cy.contains('จำเป็นต้องกรอกข้อมูลให้ครบ')
        //         })
        //         it('กรอกข้อมูลไม่ถึง 5',() => {
        //             cy.get(headtitle_input).type('1')
        //             cy.get('.relative').find('.bg-previews-card').should('have.text','1')
        //             cy.contains('กรุณากรอกอย่างน้อย 5 ตัวอักษร')
        //             cy.get(headtitle_input).clear().type('1234')
        //             cy.get('.relative').find('.bg-previews-card').should('have.text','1234')
        //             cy.contains('กรุณากรอกอย่างน้อย 5 ตัวอักษร')
        //         })
        //         it('เลือกแต่สี',() => {
        //             cy.get(headtitle_input).clear()
        //             cy.get('.bg-add-media').click()
        //             cy.get('.flex .items-center')
        //             .find('.box-color-type')
        //             .get('[style="background-color: rgb(230, 222, 255); box-shadow: none;"]').click()
        //             .get('.relative')
        //             .find('.bg-previews-card')
        //             .should('have.css','background-color','rgb(230, 222, 255)')
        //         })
        //         it('รูปภาพเกิน',() => {
        //             cy.get('.mr-2').click()
        //             for (var i = 1; i < 101; i++) {
        //                 cy.get("#smallFileInput").selectFile('image1.jpg',{force: true})    // force ture 
        //             }
        //             cy.get('[aria-labelledby="swal2-title"]')
        //             cy.contains('ผิดพลาด !')
        //             cy.contains('จำนวนรูปของท่านเกินจำนวนที่กำหนด')
        //             cy.get('.swal2-confirm').click()
        //             cy.get('[aria-labelledby="swal2-title"]').should('exist')
        //         })
        //         it('check error ลบรูปทั้งหมด',() => {
        //             for (var i = 1; i < 100; i++) {
        //                 cy.get(`.1st-group > .grid > :nth-child(${1})`).click({ multiple: true })
        //                 cy.get('.action-media > .absolute > :nth-child(3)').click()
        //                 cy.log(i) // check จำนวนรูป
        //                 }
        //         })
        //     }) // Headtitle error
        //     describe('Input Headtitle',() => {
        //         it('กรอกข้อมูลเป็น text ครบ 5 ตัวอักษร หรือ มากกว่า ',() => {
        //             cy.get(headtitle_input).clear().type('12345').should('have.value','12345')
        //             cy.get('.relative').find('.bg-previews-card').should('have.text','12345')
        //             cy.get(headtitle_input).clear().type('123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345').should('have.value','123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345')
        //             cy.get('.relative').find('.bg-previews-card').should('have.text','123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345')
        //             cy.get(headtitle_input).clear()
        //         })
        //         it('ใส่รูป เกิน 1 รูปหรือมากกกว่านั้นและไม่เกิน 99 รูป',() => {
        //             cy.get('.mr-2').click()
        //             for (var i = 1; i < 3; i++) {
        //                 cy.get("#smallFileInput").selectFile('image1.jpg',{force: true})    // force ture 
        //             }
        //             // ลบรูป 
        //             for (var i = 1; i < 2; i++) {
        //                 cy.get(`.1st-group > .grid > :nth-child(${1})`).click({ multiple: true })
        //                 cy.get('.action-media > .absolute > :nth-child(3)').click()
        //                 }
        //         })
        //     }) // Headtitle input
        // }) // Headtitle



        // describe('Detail',() => {
        //    describe('Check error',() => {
        //         it('ไม่กรอกข้อมูล',() => {
        //             cy.get(detail).click()
        //             cy.contains('สร้างประกาศทั่วไป').click()
        //             cy.contains('จำเป็นต้องกรอกข้อมูลให้ครบ')
        //         })
        //         it('กรอกข้อมูลไม่ ถึง 25 ตัวอักษร',() => {
        //             cy.get(detail_input).click().type('123456')
        //             cy.contains('กรุณากรอกอย่างน้อย 25 ตัวอักษร')
        //         })
        //    }) // error
        //    describe('Check input',() => {
        //         it('กรอกข้อมูลครบ 25 หรือมากกว่า',() => {
        //             cy.get(detail_input).clear().click().type('1234567890123456789012345')
        //             cy.get('.preview-text').contains('1234567890123456789012345')
        //             cy.get(detail_input).clear().click().type('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890')
        //             cy.get('.preview-text').contains('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890')
        //         })
        //    })
        // }) // Detail
        // describe('Place',() => {
        //     describe('Check input',() => {
        //         it('ทดสอบ ค้นหา',() => {
        //             cy.get(place_input).click()
        //             cy.get('#nuid-1').type('เจ๊ดา')
        //             cy.contains('เจ๊ดา').click()
        //         })
        //     }) // Check input Place
        // }) // Place
        describe('Direc',() => {
            describe('Check input',() => {
                it('ทดสอบ ค้นหา หมวดหมู่',() => {
                    cy.get('#dropCate').click().type('ลาย')
                    cy.contains('ลาย').click()
                })
            })
        })
    })  // Des หลัก  
})

   // it('Check Title Color',() => {
        //     cy.viewport(1980,1080)
        //     cy.get('#inputTitle').click().type(Postname)
        //     cy.get('.relative').find('.bg-previews-card').contains(Postname).should('have.text',Postname)
        //     cy.get('.flex .items-center')
        //     .find('.box-color-type')
        //     .get('[style="background-color: rgb(230, 222, 255); box-shadow: none;"]').click()
        //     .get('.relative')
        //     .find('.bg-previews-card')
        //     .should('have.css','background-color',ColorP)
        // })
        
        // it('Check Detail',() => {
        //     cy.viewport(1980,1080)
        //     cy.get('#inputDetail').click().type(Detail)
        //     //cy.get('.box-input-title').should('have.css','border-color','rgb(211 ,47 ,47)')  // กรณีนี้ ยังเป็น rgb(255, 0, 0)
        // })
        // it('Check Place',() => {
        //     cy.viewport(1980,1080)
        //     cy.get('#inputPlace').click()
        //     cy.get('#nuid-1').click().type(Place)    
        //     cy.get('#headlessui-dialog-panel-5').contains(Place).click()
        //     cy.get('.p-1').find('.items-center').contains(Place)
        //     cy.get('.relative').find('#placename').contains(Place).should('have.text',Place)
        // })
        // it('Check Dropcate',() => {
        //     cy.viewport(1980,1080)
        //     cy.get('#dropCate').click()
        //     cy.get('.shadow-inner').contains('เสื้อผ้าและแฟชั่น').click()  
        // })
        // it('Check Tage',() => { 
        //     cy.viewport(1980,1080)
        //     cy.get('textarea.sarabun').click()
        //     cy.get('div.flex .flex-wrap').contains('กางเกงทำงาน').click()
        //     cy.contains('กางเกงทำงาน')
        // })
        // it('Check Ex',() => {
        //     cy.viewport(1980,1080)
        //     cy.get('button').contains('+ ตัวเลือก').click()
        //     cy.get('#nuid-2').type('ลำโพง')
        //     cy.get('#headlessui-dialog-panel-10').contains('ลำโพง').click()
        //     cy.contains('ลำโพง')
        // })
        // it('Check button',() => {
        //     cy.viewport(1980,1080)
        //     cy.contains('บันทึกและเผยแพร่').should('have.css','background-color','rgb(211, 47, 47)') // กรณีนี้ยังเป้น 'rgb(247, 247, 247)'
        //     cy.contains('บันทึกแบบร่าง').should('have.css','background-color','rgb(227, 242, 253')
        // })
        // it('Check All Error',() => {
        //     cy.get('#inputTitle').click().clear().type('d')
        //     cy.get('.box-input-title-child')
        // })

                        // for (var i = 1; i < 101; i++) {
                //     cy.get("#smallFileInput").selectFile('image1.jpg',{force: true})    // force ture 
                // }
                  // cy.get(headtitle).click().should('have.css','border-color','rgb(75, 156, 211)')  // check color border
            //     cy.get('.box-input-title-child') // check error color border
            //    .should('have.css','color','rgb(211, 47, 47)')  // check font error color