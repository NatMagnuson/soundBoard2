import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
    },
});

export default App;
