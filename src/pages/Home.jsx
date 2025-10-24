import Carousel from "../components/Carousel/Carousel"
import ProductCard from "../components/ProductCard/ProductCard";


const fake_products = [
        {
            id: 1,
            title: 'Puma',
            img_src: "shoe1.jpg",
            price: 1800
        },
        {
            id: 2,
            title: 'Nike',
            img_src: "shoe.jpg",
            price: 2000
        },
        {
            id: 3,
            title: 'Addidas',
            img_src: "Addidas.jpg",
            price: 1800
        },
        {
            id: 4,
            title: 'Spike',
            img_src: "spike.jpg",
            price: 1800
        },
        {
            id: 5,
            title: 'White',
            img_src: "shoe2.jpg",
            price: 2500
        }
]


const Home = () => {
    return (
        <>
            <Carousel />

            <section className="row row-cols-1 row-cols-md-2 g-3 my-1 mx-2">
                {
                    fake_products.map((prod) => {
                        return <ProductCard key={prod.id} product={prod} />
                    })
                }
            </section>
        </>
    );
};

export default Home;