

    let deckId:string;
    export const getNewDeck = async ()=>{
        const res = await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");

        if (!res.ok){
            throw {
                message:'Failed to fetch deck',
                statusText:res.statusText,
                status: res.status
            }
        }
        const deck = await res.json();
        deckId = deck.deck_id;

        console.log('deck',deck);


        console.log('deckId',deckId);
    
        return deck;
       
    }


    // Getting card from the deck

    export const getNewCard = async()=>{
        const res = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);

        if(!res.ok){
            throw{
                message:'Failed to draw card',
                statusText:res.statusText,
                status: res.status
            }
        }

        const card = await res.json();

        console.log('card',card);

        return card;
    }


