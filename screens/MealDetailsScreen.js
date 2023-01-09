import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route }) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <Text> {selectedMeal.title}</Text>
        </View>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    image: {
        width: "100%",
        height: 220,
    },
});
