import { useEffect, useState } from "react";
import Card from "../Card/Card";

const CardList = () => {
    const [cards, setCard] = useState([])

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-44">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default CardList;