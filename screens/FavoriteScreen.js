import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoriteContext } from "../store/conetext/favorite-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
    // const { ids } = useContext(FavoriteContext);
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealsIds.includes(meal.id)
    );
    // console.log(favoriteMeals);

    if (!favoriteMeals.length) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet!</Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});
