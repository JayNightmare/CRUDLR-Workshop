import React from 'react';
import { Text, View,TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, ButtonTray } from './Button.js';
import Icons from './Icons';
import { Picker } from '@react-native-picker/picker';

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                {children}
            </View>

            {/* Buttons for Saving and Canceling */}
            <ButtonTray style={styles.buttonContainer}>
                <Button label={submitLabel} icon={submitIcon} title="Save Changes" onPress={onSubmit} color="black" />
                <Button label="Cancel" icon={<Icons.Close/>} title="Cancel" onPress={onCancel} color="gray" />
            </ButtonTray>
        </KeyboardAvoidingView>
    );
}

const InputText = ({ label, value, onChange }) => {
    return (
        <View style={styles.inputView}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
            />
        </View>
    )
}

const InputSelect = ({ label, prompt, options, value, onChange, isLoading }) => {
    return (
        <View style={styles.inputView}>
            <Text style={styles.label}>{label}</Text>
            <Picker
                mode="dropdown"
                selectedValue={value}
                onValueChange={onChange}
                style={styles.input}
            >
                <Picker.Item value={null}  label={prompt}/>
                {options.map(option => (
                    <Picker.Item key={option.value} value={option.value} label={option.label}/>
                ))}
            </Picker>
        </View>
    )
}

Form.InputText = InputText;
Form.InputSelect = InputSelect;
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        backgroundColor: "#fff",
        borderRadius: 5,
        gap: 20
    },
    inputContainer: {
        gap: 10,
    }, 
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    label: {
        fontSize: 18,
        // marginBottom: 5,
        color: 'black',
    },
    inputView: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    input: {
        marginVertical: 5,
        marginHorizontal: 10,

        backgroundColor: "#e8e8e8", 
        borderRadius: 8,
        elevation: 2, 
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        
        paddingHorizontal: 10,
        paddingVertical: 12,

        borderColor: "#cccc", // Add a bottom border
        borderWidth: 1,
        marginBottom: 20, // Add a margin below the card
    },
});

export default Form;