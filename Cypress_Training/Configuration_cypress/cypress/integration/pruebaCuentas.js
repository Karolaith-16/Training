describe("Cuentas", function(){
    var a = 1;
    it("Vamos a ver una igualdad ", function(){
        expect(1==2,"Ambos terminos tienen que ser iguales y no lo son").to.equal(true);
    })
    it("Vamos a ver que no sea una igualdad ", function(){
        expect(1==2).to.equal(false);
    })
    it("Vamos a ver que la resta este bien ", function(){
        expect(1-5,"Aqui se espera uncero").to.equal(0);
    })
    it("Vamos a ver que la resta NO este bien ", function(){
        expect(1-1).to.not.equal(2);
    })
    it("Tiene que ser verdadero", function(){
        expect(2==2).to.be.true;
    })
    it("Tiene que ser falso", function(){
        expect(2==1).to.be.false;
    })
    it("La variable existe", function(){
        expect(a).to.exist;
    })
    it("Es menor que 10", function(){
        expect(a).to.be.lessThan(10);
    })
    it("Es mayor que 10", function(){
        expect(25).to.be.greaterThan(10);
    })

})