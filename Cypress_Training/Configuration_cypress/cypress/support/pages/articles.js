class articlesPage {
    constructor(){
        this.banner = '.lighter';
    }
    verifyArticle = (article) => {
        cy.get(this.banner).contains(article); 
    }
}
export default new articlesPage();