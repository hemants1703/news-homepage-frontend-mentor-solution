import "../styles/SectionItem.css";

const SectionItem = ({ image, count, heading, text }) => {
  return (
    <div className="item">
        <img src={image} alt="item-image" className="item-image"/>
        <div className="item-text">
            <h2>{count}</h2>
            <span>{heading}</span>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default SectionItem