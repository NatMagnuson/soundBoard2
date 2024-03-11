import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const PredefinedSoundPressable = ({ soundUri }) => {
    const prepareToPlay = async (audioPath) => {
        const sound = new Audio.Sound();
        console.log('Playing sound from ', audioPath);
        try {
            await sound.loadAsync(audioPath); // Change here
            await sound.playAsync();
        } catch (error) {
            console.error('Error loading or playing audio:', error);
        }
    };

    const handlePress = () => {
        prepareToPlay(soundUri);
    };

    return (
        <Pressable style={[styles.box, styles.firstSix]} onPress={handlePress}>
            {({ pressed }) => (
                <Text style={{ color: pressed ? 'red' : 'blue' }}>Play Sound</Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    firstSix: {
        backgroundColor: '#f0f0f0',
    },
});

export default PredefinedSoundPressable;
