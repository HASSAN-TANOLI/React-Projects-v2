import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      price: 549,
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    },
    {
      id: 2,
      title: "iPhone X",
      price: 899,
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      price: 1249,

      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      price: 280,

      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    },
    {
      id: 5,
      title: "Huawei P30",
      price: 499,

      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    },
  ];

  if (req.query.search) {
    const filterProduct = products.filter((product) =>
      product.title.includes(req.query.search)
    );
    res.send(filterProduct);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
