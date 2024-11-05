import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
 
const ModuleItem = ({ module, onSelect }) => {
    return (
        <View style={styles.cardContainer}>
            {/* Main row container */}
            <View style={styles.row}>
                {/* Pressable for selecting the module */}
                <TouchableOpacity onPress={() => onSelect(module)} style={styles.textContainer}>
                    <Text style={styles.moduleNameText}>
                        <Text style={{ fontWeight: "bold" }}>{module.ModuleCode}</Text> | {module.ModuleName}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    ); 
};

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 5,
        marginHorizontal: 10,
        marginBottom: 10, // Add a margin below the card
        paddingHorizontal: 10,
        paddingVertical: 12,
        
        backgroundColor: "#e8e8e8", 

        elevation: 2, 
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,

        borderRadius: 8,
        borderColor: "#cccc", // Add a bottom border
        borderWidth: 1,
    },

    row: {
        flexDirection: "row", // Align items horizontally
        justifyContent: "space-between", // Space between the text and delete button
        alignItems: "center", // Center items vertically
    },

    overView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10, 
    },

    textContainer: {
        flex: 1, 
    },

    moduleNameText: {
        fontSize: 18,
        color: "#333", 
    },

    removeButton: {
        padding: 5, 
    },
});

export default ModuleItem;
