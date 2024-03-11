import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import PredefinedSoundPressable from './components/PredefinedSoundPressable';
import RecordAndPlayPressable from './components/RecordAndPlayPressable';
import CatsSound from './assets/Cats.mp3';
import DogBarkingSound from './assets/DogBarking.mp3';
import LionSound from './assets/Lion.mp3';
import ZebraSound from './assets/Zebra.mp3';
import CowSound from './assets/Cow.wav';
import HorseSound from './assets/Horse.wav';

const App = () => {
    const [numPredefinedSounds, setNumPredefinedSounds] = useState(3);
    const [numRecordAndPlay, setNumRecordAndPlay] = useState(3);

    return (
        <View style={styles.container}>
            <Text style={styles.instructionBox}>Nathan's thrown together soundboard</Text>

            {/* First Slider: Determines the number of PredefinedSoundPressables */}
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={3}
                maximumValue={6}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(value) => setNumPredefinedSounds(value)}
            />

            {/* Render PredefinedSoundPressables based on the state */}
            <View>
                {Array.from({ length: Math.floor((numPredefinedSounds + 2) / 3) }).map((_, rowIndex) => (
                    <View style={styles.row} key={rowIndex}>
                        {Array.from({ length: Math.min(3, numPredefinedSounds - rowIndex * 3) }).map((_, index) => (
                            <PredefinedSoundPressable key={index + rowIndex * 3} soundUri={(index + rowIndex * 3) % 2 === 0 ? CatsSound : DogBarkingSound} />
                        ))}
                    </View>
                ))}
            </View>

            {/* Second Slider: Determines the number of RecordAndPlayPressables */}
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={3}
                maximumValue={6}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(value) => setNumRecordAndPlay(value)}
            />

            {/* Render RecordAndPlayPressables based on the state */}
            <View>
                {Array.from({ length: Math.floor((numRecordAndPlay + 2) / 3) }).map((_, rowIndex) => (
                    <View style={styles.row} key={rowIndex}>
                        {Array.from({ length: Math.min(3, numRecordAndPlay - rowIndex * 3) }).map((_, index) => (
                            <RecordAndPlayPressable key={index + rowIndex * 3} />
                        ))}
                    </View>
                ))}
            </View>

            <Text style={styles.instructionBox}>onLongPress allows you to change the sound associated with the recording fields</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#50E5D3',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
    },
    instructionBox: {
        backgroundColor: '#f0f0f0',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        padding: 5,
    },
});

export default App;
