import Card from "./Card";

function Gameboard(props) {
    const cards = props.cards;
    const grid = cards.map((item, index) =>
        <Card key={index.toString()} src={item.src} id={item.id} handleCardClick={props.handleCardClick} />
    );
    return (
        <div className="Gameboard">
            {grid}
        </div>
    );
}

export default Gameboard;