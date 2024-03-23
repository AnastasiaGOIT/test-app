import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/Cards/selector";
import { Card } from "../Card/Card";

export const FavoritePage = () => {
  const { wishlistItems } = useSelector((state) => state?.wishlist);
  console.log(wishlistItems);
  return (
    <div>
      <h1>Favorites</h1>
      {wishlistItems.length === 0 ? (
        <p>No favorite ads yet</p>
      ) : (
        <div>
          {wishlistItems?.map((wishlist) => {
            return <Card key={wishlist?._id} wishlist={wishlist} />;
          })}
        </div>
      )}
    </div>
  );
};
