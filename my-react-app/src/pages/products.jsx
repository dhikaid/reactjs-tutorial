import { Fragment } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu baru",
    price: "Rp. 1.000.000",
    image: "/images/products1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis in optio fugiat a earum soluta consequuntur amet adipisci deleniti nemo.",
  },
  {
    id: 2,
    name: "Sepatu lama",
    price: "Rp. 12.000.000",
    image: "/images/products1.jpg",
    description: "Lorem.",
  },
  {
    id: 3,
    name: "Sepatu Adadong",
    price: "Rp. 2.000.000",
    image: "/images/products1.jpg",
    description: "Sepatu ini ada aja dong.",
  },
];

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 gap-3">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body title={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
      <div className="flex justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
