function printCars(cards){
    try{
        let cardDeck = cards.map(e => {
            let face = e.substring(0, e.length - 1);
            let suit = e.substring(e.length-1);
            
            return getCard(face, suit).toString();
        }).join(' ');

        console.log(cardDeck);
    } catch(err){
        
        console.log(err.message);
    }

    function getCard(face, suit){
    
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            'S' : '\u2660',
            'H' : '\u2665',
            'D' : '\u2666',
            'C' : '\u2663'
        };
    
        if(!faces.includes(face) || !suits[suit]){
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        let resultObj = {
            face,
            suit,
            toString(){
                return `${this.face}${suits[this.suit]}`;
            }
        }
    
        return resultObj;
    }
}

printCars(['5S', '3D', 'QD', '1C']);