import React, { useState, useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { Audio } from 'expo-av';

const RecordAndPlayPressable = () => {
    const [recording, setRecording] = useState(false);
    const [recordingUri, setRecordingUri] = useState(null);
    const [playback, setPlayback] = useState(null);
    const [permissionsResponse, requestPermission] = Audio.usePermissions();

    const startRecording = async () => {
        try {
            if (permissionsResponse.status !== 'granted') {
                console.log('Requesting permissions.');
                await requestPermission();
            }
            console.log('Permission is ', permissionsResponse.status);

            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            console.log('Starting recording...');
            const { recording } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            setRecording(recording);
            console.log('Recording started');
        }
        catch (errorEvent) {
            console.error('Failed to startRecording(): ', errorEvent);
        }
    };

    const stopRecording = async () => {
        try {
            await recording.stopAndUnloadAsync();
            const uri = recording.getURI();
            setRecordingUri(uri);
            setRecording(false);
            console.log('Recording stopped and stored at ', uri);
        }
        catch (errorEvent) {
            console.error('Failed to stopRecording(): ', errorEvent);
        }
    };

    const playRecording = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync({
                uri: recordingUri,
            });
            setPlayback(sound);
            await sound.playAsync();
            console.log('Playing recorded sound from ', recordingUri);
        }
        catch (errorEvent) {
            console.error('Failed to playRecording(): ', errorEvent);
        }
    };

    const handlePress = () => {
        if (recording) {
            stopRecording();
        } else if (recordingUri) {
            playRecording();
        } else {
            startRecording();
        }
    };

    const handleLongPress = () => {
       startRecording();
    };

    return (
        <Pressable onPress={handlePress} onLongPress={handleLongPress}>
            {({ pressed }) => (
                <Text style={{ color: pressed ? 'red' : 'blue' }}>
                    {recording ? 'Stop Recording' : (recordingUri ? 'Play' : 'Start Recording')}
                </Text>
            )}
        </Pressable>
    );
};

export default RecordAndPlayPressable;
