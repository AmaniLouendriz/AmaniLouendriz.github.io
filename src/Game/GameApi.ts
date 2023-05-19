
    export const getNewDeck = async ()=>{
        const res = await fetch("https://www.deckofcardsapi.com/api/deck/new/");

        if (!res.ok){
            throw {
                message:'Failed to fetch cards',
                statusText:res.statusText,
                status: res.status
            }
        }
        const data = await res.json();

        console.log('cards',data);
    
        return data;
       
    }


