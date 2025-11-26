import { useState } from "react";
import Carousel from "../components/Carousel/Carousel"
import ProductCard from "../components/ProductCard/ProductCard";
import { useOutletContext } from "react-router-dom";


const fake_products = [
    { id: 1,  title: "Nike AirFlex",         img_src: "1.avif", price: 89 },
    { id: 2,  title: "Nike StreetRun",       img_src: "02.avif", price: 99 },
    { id: 3,  title: "Nike ZoomLite",        img_src: "03.avif", price: 110 },
    { id: 4,  title: "Adidas CloudStride",   img_src: "04.avif", price: 92 },
    { id: 5,  title: "Adidas UltraMove",     img_src: "05.avif", price: 79 },
    { id: 6,  title: "Adidas AeroBounce",    img_src: "06.avif", price: 118 },
    { id: 7,  title: "Puma FlexRide",        img_src: "07.avif", price: 85 },
    { id: 8,  title: "Puma SprintMax",       img_src: "08.avif", price: 94 },
    { id: 9,  title: "Puma TrailRacer",      img_src: "09.avif", price: 99 },
    { id: 10, title: "Reebok RoadRunner",    img_src: "10.avif", price: 73 },
    { id: 11, title: "Reebok FastTrack",     img_src: "11.avif", price: 112 },
    { id: 12, title: "Reebok MoveLite",      img_src: "12.avif", price: 88 },
    { id: 13, title: "Skechers SoftStep",    img_src: "13.avif", price: 69 },
    { id: 14, title: "Skechers FlexWalk",    img_src: "14.avif", price: 105 },
    { id: 15, title: "Skechers GlideRun",    img_src: "15.avif", price: 97 },
    { id: 16, title: "New Balance RushFlow", img_src: "16.avif", price: 109 },
    { id: 17, title: "New Balance LiteRide", img_src: "17.avif", price: 82 },
];



const Home = () => {
    document.title = "FlashCart";

    const { addToCart } = useOutletContext();
    return (
        <>
            <Carousel />

            <section className="row row-cols-1 row-cols-md-2 g-3 my-1 mx-2">
                {
                    fake_products.map((prod) => {
                        return <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
                    })
                }
            </section>
        </>
    );
};

export default Home;