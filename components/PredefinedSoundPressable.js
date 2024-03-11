import React from 'react';
import { Pressable, Text } from 'react-native';
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
        <Pressable onPress={handlePress}>
            {({ pressed }) => (
                <Text style={{ color: pressed ? 'red' : 'blue' }}>Play Sound</Text>
            )}
        </Pressable>
    );
};

export default PredefinedSoundPressable;
