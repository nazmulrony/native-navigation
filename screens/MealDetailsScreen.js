import { useContext, useLayoutEffect } from "react";
import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/MealDetail/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/conetext/favorite-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailsScreen = ({ route, navigation }) => {
    // const { ids, addFavorite, removeFavorite } = useContext(FavoriteContext);

    //accessing state and action from redux store
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    //check if meal is favorite
    const mealIsFavorite = favoriteMealsIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    icon={mealIsFavorite ? "star" : "star-outline"}
                    color="white"
                    onPress={changeFavoriteStatusHandler}
                />
            ),
        });
    }, [navigation, changeFavoriteStatusHandler]);
    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}> {selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    container: {
        // marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        width: "80%",
        paddingBottom: 32,
    },
});
