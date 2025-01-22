import React from 'react';
import "./deals.css";
const arr = [
    { "category": "Jewellery", "deal": "Upto 50% offer" ,"image": "jewelery.png"},
    { "category": "Electronics", "deal": "Upto 70% offer","image": "electronics.png" },
    { "category": "Men's clothing", "deal": "Upto 75% offer","image": "men.png" },
    { "category": "Women's clothing", "deal": "Upto 80% offer","image": "women.png" },
   
];
 const Deals = () => (
    <div className='update'>
        <div className='logos'>
        <img src="/applogo.png" className='img' alt="Logo" /> 
        <h1>SparkTrendzon</h1>
        </div>
    <div className='offnews'>Enjoy the latest deals with your favorites! Discover exclusive discounts on a wide range of popular products and brands, from cutting-edge tech gadgets to stylish apparel and exquisite jewelry items.</div>
    <div className='up'>
         {arr.map((offer, index) => (
            <div key={index} className='off' >
               <p>{offer.deal}</p>
               <h3>{offer.category}</h3>
               <img src={offer.image} className="imge" alt={offer.image}/>
            </div>
        ))}
    </div>
    </div>
);
export default Deals;