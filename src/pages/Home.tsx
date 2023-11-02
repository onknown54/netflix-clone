import React, { useEffect, useState } from "react";
import { instance } from "../helper/utilities";

const Home = () => {
  const [prod_details, setProd_details] = useState<object>({});

  useEffect(() => {
    instance()
      .get("/products/details/6")
      .then((resp) => {
        setProd_details(resp.data.data.product);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(prod_details);

  return <h3>Making progresss here</h3>;
};

export default Home;
