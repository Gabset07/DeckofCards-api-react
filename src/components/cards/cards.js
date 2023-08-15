import"./cards.css";

const { useState, useEffect } = require("react");



async function requisitarCards() {
    const url = ('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const response = await fetch(url)
    return response.json();
}

async function formarBaralho(deck_id) {
    const url = (`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
    const response = await fetch(url)
    return await response.json();
}



const DeckdeCartas = () => {
    const [deck, setdeck] = useState({
        cards: [],
    })

    useEffect(() => {
        const Baralho = async () => {
            const { deck_id } = await requisitarCards();
            const { cards } = await formarBaralho(deck_id);


            setdeck({
                cards,
            })
        }
        Baralho()
    }, [])

    const Embaralhar = async () => {
        const { deck_id } = await requisitarCards();
        const { cards } = await formarBaralho(deck_id);


        setdeck({
            cards,
        })

    }

    return (
        <div className="DeckdeCartas">
            <h1>Api Deck of Cards</h1>
            <ul>
                {deck.cards.map((card, index) => (
                    <li key={index}>
                        <img src={card.image} alt={card.value} />
                    </li>
                ))}
            </ul>
            <button onClick={Embaralhar}>Tire outra carta aleátoria</button>
        </div>
    )


}

export default DeckdeCartas;