import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});

const FavoriteContextProvider = ({ children }) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealIds((currMealIds) => [...currMealIds, id]);
    };
    const removeFavorite = (id) => {
        setFavoriteMealIds((currMealIds) =>
            currMealIds.filter((mealId) => mealId !== id)
        );
    };

    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite,
    };

    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteContextProvider;
