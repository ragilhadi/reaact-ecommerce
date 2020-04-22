import React, { Component } from "react";
import SHOP_DATA from "../../data/SHOP_DATA";
import CollectionsPreview from "../../components/Collection-preview/CollectionsPreview";

export class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <>
        <h2>COLLECTION</h2>
        <div className="shop-page">
          {collections.map(({ id, ...otherProps }) => (
            <CollectionsPreview key={id} {...otherProps} />
          ))}
        </div>
      </>
    );
  }
}

export default Shop;
