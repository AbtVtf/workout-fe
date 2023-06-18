import React, { useState } from "react";

function CarEditor() {
  const [car, setCar] = useState({
    model: "",
    price: 0,
    engine: { type: "", horsepower: 0 },
    transmission: "",
    emissionStandard: "",
    year: "",
    km: 0,
    options: [""],
    imgUrl: [""],
  });

  const handleInputChange = (event, index, field, isOptionOrImage) => {
    if (isOptionOrImage) {
      const newOptionsOrImages = [...car[field]];
      newOptionsOrImages[index] = event.target.value;
      setCar({ ...car, [field]: newOptionsOrImages });
    } else if (field.includes("engine.")) {
      const engineField = field.split(".")[1]; // either 'type' or 'horsepower'
      setCar({
        ...car,
        engine: { ...car.engine, [engineField]: event.target.value },
      });
    } else {
      setCar({ ...car, [field]: event.target.value });
    }
  };

  const handleAddOption = () => {
    if (car.options[car.options.length - 1] !== "") {
      setCar({ ...car, options: [...car.options, ""] });
    }
  };

  const handleAddImgUrl = () => {
    if (car.imgUrl[car.imgUrl.length - 1] !== "") {
      setCar({ ...car, imgUrl: [...car.imgUrl, ""] });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(car);
    try {
      const response = await fetch(
        "http://auto-backend-node-production.up.railway.app/cars",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(car),
        }
      );

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Failed to post new car", error);
    }
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", width: "150px" }}
      >
        <label>
          Model:
          <input
            type="text"
            value={car.model}
            onChange={(e) => handleInputChange(e, null, "model")}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={car.price}
            onChange={(e) => handleInputChange(e, null, "price")}
          />
        </label>
        <label>
          Engine Type:
          <input
            type="text"
            value={car.engine.type}
            onChange={(e) => handleInputChange(e, null, "engine.type")}
          />
        </label>
        <label>
          Horsepower:
          <input
            type="number"
            value={car.engine.horsepower}
            onChange={(e) => handleInputChange(e, null, "engine.horsepower")}
          />
        </label>
        <label>
          Transmisie:
          <input
            type="text"
            value={car.transmission}
            onChange={(e) => handleInputChange(e, null, "transmission")}
          />
        </label>
        <label>
          Emisii:
          <input
            type="text"
            value={car.emissionStandard}
            onChange={(e) => handleInputChange(e, null, "emissionStandard")}
          />
        </label>
        <label>
          Anul fabricarii:
          <input
            type="text"
            value={car.year}
            onChange={(e) => handleInputChange(e, null, "year")}
          />
        </label>
        {car.options.map((option, index) => (
          <label key={index}>
            Option:
            <input
              type="text"
              value={option}
              onChange={(e) => handleInputChange(e, index, "options", true)}
            />
          </label>
        ))}
        <button type="button" onClick={handleAddOption}>
          Add Option
        </button>

        {car.imgUrl.map((url, index) => (
          <label key={index}>
            Image URL:
            <input
              type="text"
              value={url}
              onChange={(e) => handleInputChange(e, index, "imgUrl", true)}
            />
          </label>
        ))}
        <button type="button" onClick={handleAddImgUrl}>
          Add Image URL
        </button>
        <button onClick={(event) => handleSubmit(event)}>Submit</button>
      </form>
    </div>
  );
}

export default CarEditor;
