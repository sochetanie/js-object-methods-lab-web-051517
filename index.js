// code solution here
class President {
    constructor(name, x, y, z) {
        this.name = name 
        this.politicalParty = x
        this.yearsInOffice = y
        this.homeState = z
    }

    veto() {return 'NO!'}

    passBill() {return 'You can do that!'}

    doCharity() {return 'I like to help people.'}

    conductPressInterview() {return 'I am proud to be an American.'}

    sayHi() {
        return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
    }

}

var george = new President('George Washington')
var abraham  = new President('Abraham Lincoln')
var richard = new President('Richard Nixon')
var jimmy = new President('Jimmy Carter')