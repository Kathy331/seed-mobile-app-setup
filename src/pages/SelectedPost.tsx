import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';

const SelectedPost = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Selected Post</Text>
            <Navbar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Set background color if necessary
    },
    text: {
        fontSize: 24, // Increase font size for prominence
        fontWeight: 'bold', // Add bold style for prominence
        marginBottom: 20, // Add margin bottom to separate from Navbar
    },
});

export default SelectedPost;