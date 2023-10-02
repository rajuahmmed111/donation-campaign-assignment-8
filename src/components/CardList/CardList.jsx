import { useEffect, useState } from "react";

const CardList = () => {
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div>
            <h2>Card: {card.length}</h2>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <img src='' alt="" />
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardList;