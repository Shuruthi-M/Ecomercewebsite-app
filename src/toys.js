import React from 'react';
import "./toys.css";

const data = [
    {
        "title": " blue Color Teddy Bear-Soft ",
        "image": "blueteddy.jpg", 
        "description":"CHIRKUT Soft Toys 3 Feet blue Color Teddy Bear  Soft Toys for Girls, Birthday Gift friend, Wedding,  Special || 3 Feet blue", 
        "category": "toys",
        "price": 300
     },
     {
        "title": "Metal vintage car ",
        "image": "orangecar.jpg",
        "description":"classical metal vintage car toy car Pullback",
        "category": "toys",
        "price": 350, 
    },
   
    {
        "title": "3 Feet pint Teddybear-Soft ",
        "image": "pinkteddy.jpg", 
        "description":"Webby 3 Feet Huggable Teddy Bear with Neck Bow PinkWebby 3 Feet Huggable Teddy Bear with Neck Bow Pink",
        "category": "toys",
        "price": 320
    },
   
    {
        "title": " Nissan GTR R35 Sports Car ",
        "image": "blackcar.jpg",
        "description":"KTRS ENTERPRISE 1:24 For Nissan GTR R35 Sports Car Alloy Model Car Kids Toys Car Diecasts Toy Vehicles Toy Cars Strong Pull-back Sound", 
        "category": "toys",
        "price": 390
    },
    {
        "title": "Yellow Teddybear -Soft",
        "image": "yellowteddy.jpg", 
        "description":"CHIRKUT Soft Toys 3 Feet Yellow Color Teddy Bear with Neck Bow Tie Soft Toys for Girls, Birthday Gift Boyfriend, Husband, Wedding, for Couple Special || 3 Feet Yellow" ,
        "category": "toys",
        "price": 350 
    },
    {
        "title": "Mini Car Toys Set ",
        "image": "multicar.jpg",
        "description":"YBN Mini Car Toys Set - 12 Pull-Back Cars for Boys Kids, Small Cars Collection for Kids - Fun Push-Back Car Sets for Kids Return gifts for Birthday",
        "category": "toys",
        "price": 290, 
    },
    {
        "title": "Red Teddtbear with Cap ",
        "image": "redteddy.jpg",
        "description":"Sanvidecors Cute Red Cap Red Teddy Bear very Soft Toy Valentine & Birthday G - 30 cm  (Red)", 
        "category": "toys",
        "price": 323   
    },
    {
        "title": "Mini Unicorn Toy",
        "image": "unicorn.jpg",
        "description":"Tiny Miny Unicorn Soft Toys, Kids Toys - 25 cm (Yellow) - 5 cm  (Yellow)",
        "category": "toys",
        "price": 200, 
    },
 
    {
        "title": "Elephant Soft Toy ",
        "image": "elephant.jpg",
        "description":"Super Soft Elephant with bow 40 cm one piece",
        "category": "toys",
        "price": 370, 
    },
    {
        "title": "Panda Mascot – Soft Toy ",
        "image": "panda.jpg",
        "description":"",
        "category": "toys",
        "price": 500, 
    },
    {
        "title": "Digital Camera-Kids",
        "image": "camera.jpg",
        "description":"Roll over image to zoom inNINE CUBE Kids Digital Camera",
        "category": "toys",
        "price": 570, 
    },
    {
        "title": "PRAYOMA ENTERPRISE Doll",
        "image": "pink.jpg",
        "description":"PRAYOMA ENTERPRISE Doll - 108  (Pink) ",
        "category": "toys",
        "price": 300, 
    },
    {
        "title": "Teddy Stacking Ring",
        "image": "ring.jpg",
        "description":"TOYZTREND Plastic Baby Kids Teddy Stacking Ring Jumbo Stack Up Educational Toy Assorted color Rings Tower Construction Toys",
        "category": "toys",
        "price": 350, 
    },
    {
        "title": "WMac Chargebal Racing Car",
        "image": "batterycar.jpg",
        "description":"WMac Chargebal Racing Car for Kids with Remote Control - Assorted Design & Multi Color",
        "category": "toys",
        "price": 390, 
    },
   {
        "title": "Babique Unicorn Teddy ",
        "image": "pinkunicorn.jpg",
        "description":"Babique Unicorn Teddy Bear Plush Soft Toy Cute Kids Birthday Animal Baby Boys/Girls (25 cm, Pink) ",
        "category": "toys",
        "price": 270, 
    }
];

const dataArray = (array, size) => {
    const sets = [];
    for (let i = 0; i < array.length; i += size) {
      sets.push(array.slice(i, i + size));
    }
    return sets;
};

const Toys = () => (
    <div className='display'>
         <div className='logo1'>
                <img src="/applogo.png" className='img' alt="Logo" />
                <h1>SparkTrendzon</h1>
            </div>
        {dataArray(data, 5).map((set, index) => (
            <div key={index} className='detail'>
                {set.map((toys, index) => (
                    <div key={index} className='align'>
                        <h6>{toys.title}</h6>
                        <img src={toys.image} className="images" alt={toys.image}/>
                        <p>{toys.description}</p>
                        <p>{toys.category}</p>
                        <p>₹{toys.price}</p>
                    </div>
                ))}
            </div>
        ))}
    </div>
);

export default Toys;
