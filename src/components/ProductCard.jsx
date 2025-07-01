import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const variantOptions = ["Red", "Blue", "Green", "Black"];
  const [selectedVariant, setSelectedVariant] = useState(variantOptions[0]);
  const isInStock = product.rating?.count > 0;

  return (
   <div className="card h-100 border rounded-3 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top p-3"
        style={{
          height: "220px",
          objectFit: "contain",
        //   backgroundColor: "#f1f3f5",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      />
      <div className="card-body d-flex flex-column px-3 py-2">
        <h6
          className="card-title fw-semibold text-truncate mb-2"
          title={product.title}
        >
          {product.title}
        </h6>

        <div className="d-flex justify-content-between align-items-center mt-1 mb-2">
          <p className="text-muted fw-bold mb-0">${product.price.toFixed(2)}</p>
          <select
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
            className="form-select form-select-sm w-auto px-2 py-1"
            style={{ minWidth: "80px", fontSize: "0.75rem" }}
          >
            {variantOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <button
  onClick={() => onAddToCart(product)}
  disabled={!isInStock}
  className={`btn btn-sm mt-3 fw-semibold rounded ${
    isInStock ? "btn-dark" : "btn-secondary disabled"
  }`}
>
  {isInStock ? "Add to Cart" : "Out of Stock"}
</button>

      </div>
    </div>
  );
};

export default ProductCard;
