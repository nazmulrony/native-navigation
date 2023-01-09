import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({
    duration,
    complexity,
    affordability,
    style,
    textStyle,
}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailsItem, textStyle]}>
                {complexity.toUpperCase()}
            </Text>
            <Text style={[styles.detailsItem, textStyle]}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    );
};

export default MealDetails;

const styles = StyleSheet.create({
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
