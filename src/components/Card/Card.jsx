import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg } = card;
    return (
        <div>
            <div className={`card card-compact bg-base-100 shadow-xl mt-10`} style={{ backgroundColor: card_bg }}>
                <Link to={`card/${id}`}>
                    <figure><img src={picture} /></figure>
                </Link>
                <div>
                    <div className="card-body">
                        <div className="flex w-28 justify-center rounded-md" style={{ backgroundColor: category_bg }}>
                            <h2 className={`card-title`} style={{ color: text_button_bg }}>{category}</h2>
                        </div>
                        <div>
                            <h2 className={`text-2xl font-semibold`} style={{ color: text_button_bg }}>{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;