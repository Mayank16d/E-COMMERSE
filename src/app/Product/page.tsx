'use client'
import React,{useEffect,useState} from 'react'

function Page() {
  const dummyData1 = {
    products: [
      {
        id: 1,
        name: "Embroidered Kurta Set",
        category: "Ethnic Wear",
        price: 1499,
        currency: "INR",
        imageUrl: "path/to/embroidered-kurta-set.jpg",
        size: ["S", "M", "L", "XL", "XXL"],
        color: ["Red", "Green", "Blue", "Yellow"],
        description: "Elegant kurta set with fine embroidery, perfect for festive occasions.",
        inStock: true
      },
      {
        id: 2,
        name: "Silk Saree",
        category: "Sarees",
        price: 2999,
        currency: "INR",
        imageUrl: "path/to/silk-saree.jpg",
        size: ["Free Size"],
        color: ["Magenta", "Cyan", "Peacock Blue"],
        description: "Pure silk saree with handwoven designs, showcasing Indian craftsmanship.",
        inStock: true
      },
      {
        id: 3,
        name: "Designer Lehenga Choli",
        category: "Lehengas",
        price: 4999,
        currency: "INR",
        imageUrl: "path/to/designer-lehenga-choli.jpg",
        size: ["S", "M", "L"],
        color: ["Gold", "Silver", "Maroon"],
        description: "A stunning lehenga choli set with intricate designs for weddings and special events.",
        inStock: false // This item is currently out of stock
      },
      {
        id: 4,
        name: "Men's Sherwani",
        category: "Men's Ethnic Wear",
        price: 3999,
        currency: "INR",
        imageUrl: "path/to/mens-sherwani.jpg",
        size: ["M", "L", "XL", "XXL"],
        color: ["Black", "White", "Navy Blue"],
        description: "Traditional sherwani in rich fabrics, perfect for groomsmen and festive occasions.",
        inStock: true
      },
      {
  id: 5,
  name: "Silk Saree",
  category: "Sarees",
  price: 2999,
  currency: "INR",
  imageUrl: "path/to/silk-saree.jpg",
  size: ["Free Size"],
  color: ["Magenta", "Cyan", "Peacock Blue"],
  description: "Pure silk saree with handwoven designs, showcasing Indian craftsmanship.",
  inStock: true
},
{
  id: 6,
  name: "Designer Lehenga Choli",
  category: "Lehengas",
  price: 4999,
  currency: "INR",
  imageUrl: "path/to/designer-lehenga-choli.jpg",
  size: ["S", "M", "L"],
  color: ["Gold", "Silver", "Maroon"],
  description: "A stunning lehenga choli set with intricate designs for weddings and special events.",
  inStock: false // This item is currently out of stock
},
{
  id: 7,
  name: "Men's Sherwani",
  category: "Men's Ethnic Wear",
  price: 3999,
  currency: "INR",
  imageUrl: "path/to/mens-sherwani.jpg",
  size: ["M", "L", "XL", "XXL"],
  color: ["Black", "White", "Navy Blue"],
  description: "Traditional sherwani in rich fabrics, perfect for groomsmen and festive occasions.",
  inStock: true
},
{
  id: 8,
  name: "Cotton Anarkali Kurti",
  category: "Kurtis",
  price: 999,
  currency: "INR",
  imageUrl: "path/to/cotton-anarkali-kurti.jpg",
  size: ["S", "M", "L", "XL"],
  color: ["Pink", "Orange", "Green"],
  description: "Comfortable cotton Anarkali kurti for daily wear.",
  inStock: true
},
{
  id: 9,
  name: "Printed Palazzo Set",
  category: "Casual Wear",
  price: 1599,
  currency: "INR",
  imageUrl: "path/to/printed-palazzo-set.jpg",
  size: ["S", "M", "L", "XL", "XXL"],
  color: ["Black & White", "Red & Black", "Blue & White"],
  description: "Stylish printed palazzo set, perfect for casual outings.",
  inStock: true
}
    ]}
    const [dummyData, setDummyData] = useState([]);

      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:3000/api/allproducts",
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          console.log(res);
    
          const data = await res.json();
          console.log(data);
          setDummyData(data); // Assuming the data you need is stored in the 'data' property
        } catch (err) {
          console.error('Error fetching data:', err);
        }
      };
    
      useEffect(() => {
        fetchData(); // Call fetchData when the component mounts
      }, []);
  return (
    <div>
      <div>
        <div>
        <h1 className=' font-bold text-xl text-yellow-400 p-4 text-center'>All Product </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {dummyData.map((product:any) => (
            <div key={product.id} className="border rounded-md shadow-md p-4">
                <img src={product.imageUrl} alt={product.name} className="w-full h-96 rounded-md object-cover" />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-gray-700 font-semibold">₹{product.price}</p>
                <p className="text-gray-500">Size: {product.size.join(", ")}</p>
                <p className="text-gray-500">Color: {product.color.join(", ")}</p>
                <p className="text-gray-700">{product.description}</p>
                {product.inStock ? (
                <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded-md">Add to Cart</button>
                ) : (
                <button className="bg-gray-300 text-gray-500 px-4 py-2 mt-2 rounded-md cursor-not-allowed" disabled>Out of Stock</button>
                )}
            </div>
            ))}
        </div>

    </div>

    </div>
    </div>
  )
}

export default Page