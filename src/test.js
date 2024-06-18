const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://nandwanimayank16d:XsTscxpmkpEd2FKl@cluster0.2nlp2ko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // replace with your MongoDB connection string
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('allproducts');

        const products = [
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
          ];

        const result = await collection.insertMany(products);
        console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedIds}`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
