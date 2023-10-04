import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
    const card = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const cards = card.find(card => card.id === idInt);
    console.log(cards);

    const handleDonation = () => {
        toast('You have donation successfully')
    }
    return (
        <div>
            <div className={`card card-compact bg-base-100 shadow-xl mt-28`}>
                <div className="relative">
                    <figure><img className={`w-full`} src={cards.picture} /></figure>
                    <div className="bg-[black] opacity-60 w-full h-28 absolute top-[685px]">
                        <div className={`card-action ml-7 mt-9`}>
                            <button onClick={handleDonation} className={`btn text-white font-bold`} style={{ backgroundColor: cards.text_button_bg }}>Donate ${cards.price}</button>
                        </div>
                    </div>
                </div>


                <div className="card-body mt-10">
                    <h2 className="card-title text-3xl font-semibold">{cards.title}</h2>
                    <p className="text-xl mt-5">{cards.description}</p>

                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default DonationDetails;