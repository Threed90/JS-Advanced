function getCard(face, suit){
    
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if(!faces.includes(face)){
        throw new Error();
    }

    let suits = {
        'S' : '\u2660',
        'H' : '\u2665',
        'D' : '\u2666',
        'C' : 'u2663'
    };

    let resultObj = {
        face,
        suit,
        toString(){
            return `${this.face}${suits[this.suit]}`;
        }
    }

    return resultObj;
}


console.log(getCard('1', 'C').toString());
