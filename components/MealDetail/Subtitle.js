import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
};

export default Subtitle;
const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 8,
        marginHorizontal: 16,
        marginVertical: 4,
        borderBottomWidth: 2,
        borderBottomColor: "#e2b497",
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#e2b497",
        textAlign: "center",
    },
});
