export class InsuredClass {
    id: number = 0;
    accountnumber: number = 0;
    agentname: String = "";
    policynumber: number = 0;
    policypremium: number = 0;
    questions: Object = [];
    claim: Object = {};
    constructor(id: number, accountnumber: number, agentname: String, policynumber: number, policypremium: number, questions: object, claim: object) {
        this.id = id;
        this.accountnumber = accountnumber;
        this.agentname = agentname;
        this.policynumber = policynumber;
        this.policypremium=policypremium;
        this.questions = questions;
        this.claim = claim;
    }
}