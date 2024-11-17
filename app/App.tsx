import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.eventName}
            >
                Nome do evento
            </Text>
            <Text
                style={styles.eventDate}
            >
                Local, Data e Hora do Evento
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        marginTop: 48,
        fontWeight: 'bold',
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
})
