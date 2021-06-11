export class Claim {
    claimNumber: number = 0;
    claimReason: String = "";
    accidentLocationStreet: String = "";
    accidentCity: String = "";
    accidentState: String = "";
    zipCode: number = 0;
    claimType: String = "";

    constructor(claimNumber: number,
        claimReason: String,
        accidentLocationStreet: String,
        accidentCity: String,
        accidentState: String,
        zipCode: number,
        claimType: String) {
        this.claimNumber = claimNumber;
        this.claimReason = claimReason;
        this.accidentLocationStreet = accidentLocationStreet;
        this.accidentCity = accidentCity;
        this.accidentState = accidentState;
        this.zipCode = zipCode;
        this.claimType = claimType;
    }
}
