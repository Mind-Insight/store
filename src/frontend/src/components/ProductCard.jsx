export default function ProductCard({ name, image, price, stars }) {
    return (
        <>
            <div className="col-4">
                <img src={image} alt=""></img>
                <h4>{name}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <p>${price}</p>
            </div>
        </>
    )
}