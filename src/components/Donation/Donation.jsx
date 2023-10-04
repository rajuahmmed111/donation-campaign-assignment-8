import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/LocalStorage";

const Donation = () => {
    const cards = useLoaderData();

    const [donationData, setDonationData] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedCardId = getStoredDonation();
        if (cards.length > 0) {

            const donation = [];
            for (const id of storedCardId) {
                const card = cards.find(card => card.id === id);
                if (card) {
                    donation.push(card)
                }
            }
            setDonationData(donation);
        }
    }, [cards])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                {
                    donationData.slice(0, dataLength).map(card => <div key={card.id}>

                        <div className={`flex justify-around  card-compact mt-10 bg-base-100 shadow-xl`} style={{ backgroundColor: card.card_bg }}>

                            <figure><img className="" src={card.picture} /></figure>

                            <div className="card-body">
                                <div className={`flex justify-center w-28 h-10 rounded`} style={{ backgroundColor: card.category_bg }}>
                                    <h2 className={`card-title text-xl font-semibold`} style={{ color: card.text_button_bg }}>{card.category}</h2>
                                </div>

                                <h2 className="card-title text-3xl font-semibold">{card.title}</h2>

                                <p className={`text-xl font-semibold`} style={{ color: card.text_button_bg }}>${card.price}</p>

                                <div className={`card-actions`}>
                                    <button style={{ backgroundColor: card.text_button_bg }} className={`btn text-white`}>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className={dataLength === cards.length ? "hidden" : 'flex justify-center mt-10'}>
                <button
                    onClick={() => setDataLength(cards.length)}
                    className="btn bg-[#009444] text-white font-semibold">Show All</button>
            </div>
        </div>
    );
};

export default Donation;