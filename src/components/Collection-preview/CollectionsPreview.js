import React from "react";
import CollectionItem from "../Collection-item/CollectionItem";
import "./CollectionsPreview.scss";

const CollectionsPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemsProps }) => (
            <CollectionItem key={items.id} {...itemsProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
