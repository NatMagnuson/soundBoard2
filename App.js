import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PredefinedSoundPressable from './components/PredefinedSoundPressable';
import RecordAndPlayPressable from './components/RecordAndPlayPressable';
import CatsSound from './assets/Cats.mp3';
import DogBarkingSound from './assets/DogBarking.mp3';
import LionSound from './assets/Lion.mp3';
import ZebraSound from './assets/Zebra.mp3';
import CowSound from './assets/Cow.wav';
import HorseSound from './assets/Horse.wav';

const App = () => {
    return (
        <View style={styles.container}>
            {/* First Row */}
            <View style={styles.row}>
                <PredefinedSoundPressable soundUri={CatsSound} />
                <PredefinedSoundPressable soundUri={DogBarkingSound} />
                <PredefinedSoundPressable soundUri={LionSound} />
            </View>
            {/* Second Row */}
            <View style={styles.row}>
                <PredefinedSoundPressable soundUri={ZebraSound} />
                <PredefinedSoundPressable soundUri={CowSound} />
                <PredefinedSoundPressable soundUri={HorseSound} />
            </View>

            {/* Third Row */}
            <View style={styles.row}>
                <RecordAndPlayPressable />
                <RecordAndPlayPressable />
                <RecordAndPlayPressable />
            </View>
            <Text>onLongPress allows you to change the sound associated with the recording fields</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    lastThree: {
        backgroundColor: '#e0e0e0',
    },
});

export default App;
