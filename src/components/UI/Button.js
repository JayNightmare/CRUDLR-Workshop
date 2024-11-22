import { StyleSheet, Text, View } from "react-native";
import Selector from "./Selector";

export const ButtonTray = ({ children }) => {
    return (
        <View style={styles.buttonTray}>
            {children}
        </View>
    );
}

export const Button = ({ icon, label, onPress, styleLabel, styleButton }) => {
    return (
        <Selector onPress={onPress} style={[styles.button, styleButton]} pressedStyle={styles.pressedButton}>
            { icon || null }
            <Text style={[styles.label, styleLabel]}>{label}</Text>
        </Selector>
    );
};

const styles = StyleSheet.create({
    buttonTray: {
        flexDirection: 'row',
        gap: 15,
    },
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'grey',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        flex: 1,
        flexDirection: 'row',
        gap: 5,
    },
    label: {
        fontSize: 16,
    },
    pressedButton: {
        // backgroundColor: 'rgba(155, 155, 155, 0.5)',
        transform: [{ scale: 0.95 }],
        opacity: 0.8,
    }
});

export default { Button, ButtonTray };
