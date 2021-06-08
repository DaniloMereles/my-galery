//styles
import './Card.css'
const Card = ({title, number}) => {
    return (
        <div className = "card">
            <p className = "card__text">
                {number}
            </p>

            <h3 className = "card__title">
                {title}
            </h3>
        </div>
    )
}

export default Card