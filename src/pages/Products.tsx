import React from "react";
import Card from "../components/Card";
import products from "../layout/ProductItems";

const Products: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-2">
      <div className="w-[98%] flex flex-wrap justify-center items-center gap-4 bg-custom-100 dark:bg-custom-950 p-2 rounded-xl">
        {products.map((product, index) => (
        <Card
          key={index}
          imageUrl={product.imageUrl}
          name={product.name}
          score={product.score}
          newPrice={product.newPrice}
          oldPrice={product.oldPrice}
        />
      ))}
      </div>
    </div>
  );
};

export default Products;
