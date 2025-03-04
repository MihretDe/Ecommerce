import React from "react";
interface CategoryProps{
    image:string
    title : string
}
const Category: React.FC<CategoryProps> = ({ image, title }) => {
    return (
      <div className="border border-solid w-44 h-36 flex flex-col justify-center items-center">
        <img src={image} alt={title} className="w-10 h-10 mb-2" />
        <p className="text-base font-normal">{title}</p>
      </div>
    );
  };
  

export default Category;
