
    export const getNewDeck = async ()=>{
        const res = await fetch("https://www.deckofcardsapi.com/api/deck/new/");

        if (!res.ok){
            throw {
                message:'Failed to fetch deck',
                statusText:res.statusText,
                status: res.status
            }
        }
        const deck = await res.json();

        console.log('deck',deck);
    
        return deck;
       
    }


