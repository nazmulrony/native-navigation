import {
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = ({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) => {
    const navigation = useNavigation();

    //navigate to meal details page handler
    const selectMealItemHandler = () => {
        navigation.navigate("MealDetails", {
            mealId: id,
        });
    };

    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.pressedButton : null)}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    container: {
        margin: 16,
        backgroundColor: "white",
        elevation: 4,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    pressedButton: {
        opacity: 0.5,
    },
    title: {
        padding: 8,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    },
});
