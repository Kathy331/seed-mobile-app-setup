import React, { useState } from 'react'; // Import useState for active state management
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import useRoute to determine the current route

const Navbar = () => {
    const navigation = useNavigation();
    const route = useRoute(); // Use useRoute to get the current route name
    const [activeTab, setActiveTab] = useState(route.name); // Set the initial active tab based on the current route

    const destinations = [
        { name: 'Home', label: 'home' },
        { name: 'Post', label: 'post' },
        { name: 'Discover', label: 'discover' },
        { name: 'Profile', label: 'profile' },
    ];

    const handlePress = (dest: string) => {
        setActiveTab(dest); // Update the active tab state
        navigation.navigate(dest);
    };

    return (
        <View style={styles.container}>
            {destinations.map((dest) => (
                <TouchableOpacity
                    key={dest.name}
                    onPress={() => handlePress(dest.name)}
                    style={[
                        styles.button,
                        activeTab === dest.name && styles.activeButton, // Apply activeButton styles if this tab is active
                    ]}
                    accessibilityLabel={dest.label} // Add accessibility labels
                >
                    <Text style={styles.buttonText}>{dest.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingTop: 20,
        paddingBottom: 20,
        borderTopWidth: 1,
    },
    button: {
        padding: 10,
    },
    activeButton: { // Style for the active tab
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    buttonText: {
        color: 'white',
    },
});

export default Navbar;