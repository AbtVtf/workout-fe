import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { images, model, transmission, price, id, year, } = props.item;
  const { isDelete = false } = props
  const firstImage = images && images.length > 0 ? images[0] : null;
  function deleteCar(id) {
    return fetch(`http://auto-backend-node-production.up.railway.app/cars/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  }
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item" style={{ height: "412px", minHeight: "412px" }}>
        <div className="car__img" style={{ display: "flex", justifyContent: "center" }}>
          <img src={firstImage} alt="" style={{ height: "20vh", width: "30vw", objectFit: "cover" }} />
        </div>

        <div className="car__item-content mt-4">
          <h4
            className="section__title text-center"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%"
            }}
          >
            {model}
          </h4>
          <h6 className="rent__price text-center mt-">
            {price} €
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {year}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {transmission}
            </span>
            {/* <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span> */}
          </div>
        </div>

        {isDelete ?
          <button onClick={() => { deleteCar(id) }} className=" w-100 car__item-btn car__btn-details" style={{ bottom: "0" }}>
            <span style={{ color: "white", fontWeight: "600", fontSize: "20px", letterSpacing: ".7px" }}>Delete</span>
          </button>
          : <Link to={`/cars/${id}`} >
            <button className=" w-100 car__item-btn car__btn-details" style={{ bottom: "0" }}>
              <span style={{ color: "white", fontWeight: "600", fontSize: "20px", letterSpacing: ".7px" }}>Detalii</span>
            </button>
          </Link>}
      </div>
    </Col>
  );
};

export default CarItem;
