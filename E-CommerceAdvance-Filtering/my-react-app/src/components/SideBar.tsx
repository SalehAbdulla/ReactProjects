import { useEffect, useState } from "react";

type Product = {
  category: string;
}

type FetchResponeType = {
  products: Product[];
}


const SideBar = () => {

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([]);

  useEffect(()=>{
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponeType = await response.json();
        const onlyUniqueCategory = Array.from(new Set(data.products.map(product => product.category)));
        console.log(onlyUniqueCategory);
        setCategories(onlyUniqueCategory);
      } catch (error) { 
          console.log("Error Fetching product", error);
      }
    }
    fetchCategories();
  },[])


  return (
    <div className="w-64 p-5 h-screen">
      <h1 className=" text-2xl font-bold mb-10 mt-4">
        React Store
      </h1>
    </div>
  )
}

export default SideBar
