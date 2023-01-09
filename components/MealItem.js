import {
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{ color: "#ccc" }}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsItem}>{duration}m</Text>
                        <Text style={styles.detailsItem}>
                            {complexity.toUpperCase()}
                        </Text>
                        <Text style={styles.detailsItem}>
                            {affordability.toUpperCase()}
                        </Text>
                    </View>
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
    details: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "center",
    },
    detailsItem: {
        fontSize: 12,
        marginHorizontal: 8,
    },
});
