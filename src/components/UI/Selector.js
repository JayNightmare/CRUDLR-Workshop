import { Pressable, Vibration } from 'react-native';

const Selector = ({ children, onPress, style, pressedStyle }) => {
    const onPressButton = () => {
        Vibration.vibrate(10);
        onPress();
    };

    return (
        <Pressable onPress={onPressButton} style={({ pressed }) => [ style, pressed && pressedStyle ]}>
            { children }
        </Pressable>
    );
};

export default Selector;