import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  const { smallText, midText, largeText1, image, product, buttonText, desc } =
    heroBanner;

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <picture>
          <img
            src={urlFor(image)}
            alt="headphones"
            className="hero-banner-image"
          />
        </picture>

        <div>
          <Link href={`/product/${product}`}>
            <button className="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <div>{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
