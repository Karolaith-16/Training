describe("formas de encontar un elemento", function(){
    it ("Buscar en el buscador", function(){
        cy.visit("http://automationpractice.com/index.php");
        cy.get(".search_query.form-control.ac_input").type("Hola "); //Buscamos por clase
        cy.get("#search_query_top").type("Como te va ");// BUscamos po id
        cy.get("[name='search_query']").type("Me va muy bien ") //Bucando por otra propiedad
        cy.get("[placeholder='Search']").clear();//Borra lo que esta en el elemento 
    })
})