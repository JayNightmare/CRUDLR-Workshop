import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import ModuleItem from "./ModuleItem.js";


const ModuleList = ({ modules, onSelect, isLoading }) => {
    return (
        <ScrollView style={styles.container}>
            { isLoading ? <ActivityIndicator size="large" color="#000" /> : null }
            { modules.map((module) => {
                return <ModuleItem key={module.ModuleCode} module={module} onSelect={onSelect}/>
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    }
});

export default ModuleList;