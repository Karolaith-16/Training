describe("test the calculator operation", function(){

    beforeEach(function(){
        cy.visit("./calculator/calculator.html");
    })
    //Sum
    it("sum 0 + 0", function(){
        cy.get("#btn0").click();
        cy.get("#btnSum").click();
        cy.get("#btn0").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '0');
    })
    it("button sum ", function(){
        cy.get("#btnSum").click();
        cy.get('#textview').should('contain', '+');
    })
    it("write x + y", function(){
        cy.get("#btn8").click();
        cy.get("#btn2").click();
        cy.get("#btnSum").click();
        cy.get("#btn9").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '91');
    })
    it("write + x =", function(){
        cy.get("#btnSum").click();
        cy.get("#btn6").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '6');
    })
    it("sum of negative numbers", function(){
        cy.get("#btnSub").click();
        cy.get("#btn6").click();
        cy.get("#btnSum").click();
        cy.get("#btnSub").click();
        cy.get("#btn7").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '-13');
    })

    //Subtraction
    it("subtraction 0 - 0", function(){
        cy.get("#btn0").click();
        cy.get("#btnSub").click();
        cy.get("#btn0").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '0');
    })
    it("button subtraction ", function(){
        cy.get("#btnSub").click();
        cy.get('#textview').should('contain', '-');
    })
    it("write x - y", function(){
        cy.get("#btn8").click();
        cy.get("#btnSub").click();
        cy.get("#btn9").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '-1');
    })
    it("write - x =", function(){
        cy.get("#btnSub").click();
        cy.get("#btn6").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '-6');
    })
    it("subtraction of negative numbers", function(){
        cy.get("#btnSub").click();
        cy.get("#btn6").click();
        cy.get("#btnSub").click();
        cy.get("#btnPar").click();
        cy.get("#btnSub").click();
        cy.get("#btn7").click();
        cy.get("#btnPar2").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '1');
    })

    //Multiplication
    it("multiplication 0 * 0", function(){
        cy.get("#btn0").click();
        cy.get("#btnMul").click();
        cy.get("#btn0").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '0');
    })
    it("button multiplication ", function(){
        cy.get("#btnMul").click();
        cy.get('#textview').should('contain', '*');
    })
    it("write x * y", function(){
        cy.get("#btn8").click();
        cy.get("#btnMul").click();
        cy.get("#btn7").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '56');
    })

    it("multiplication of negative numbers", function(){
        cy.get("#btnSub").click();
        cy.get("#btn3").click();
        cy.get("#btnMul").click();
        cy.get("#btnSub").click();
        cy.get("#btn4").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '12');
    })
    it("multiplication -x * y", function(){
        cy.get("#btnSub").click();
        cy.get("#btn8").click();
        cy.get("#btnMul").click();
        cy.get("#btn4").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '-32');
    })


    //Division
    it("Division 0 / 0", function(){
        cy.get("#btn0").click();
        cy.get("#btnDiv").click();
        cy.get("#btn0").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', 'NaN');
    })
    it("button Division ", function(){
        cy.get("#btnDiv").click();
        cy.get('#textview').should('contain', '/');

    })
    it("write x / y", function(){
        cy.get("#btn6").click();
        cy.get("#btnDiv").click();
        cy.get("#btn2").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '3');
    })

    it("Division of negative numbers", function(){
        cy.get("#btnSub").click();
        cy.get("#btn6").click();
        cy.get("#btnDiv").click();
        cy.get("#btnSub").click();
        cy.get("#btn2").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '3');
    })
    it("Division -x / y", function(){
        cy.get("#btnSub").click();
        cy.get("#btn6").click();
        cy.get("#btnDiv").click();
        cy.get("#btn2").click();
        cy.get("#btnEql").click();
        cy.get('#textview').should('contain', '-3');
    })

    //number
    it("button operation", function(){
        for (var number = 0; number <= 9; number++) {
            cy.get(`#btn${number}`).click();
            cy.get(`#textview`).should('contain', `${number}`);
        }
    })
})