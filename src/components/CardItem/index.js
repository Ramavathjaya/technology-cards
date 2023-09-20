import './index.css'

const CardItem = props => {
    const {cardDetails} = props
    const {title, description, imgurl, className} = cardDetails 

    return (
        <li className={'${className} card-item'}>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="img-container">
        <img className="card-img" src={imgurl} alt={title} />
          </div>
        </li>
    )
}


export default CardItem