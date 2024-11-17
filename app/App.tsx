import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.textBold}
            >
                Nome do evento
            </Text>
            <Text
                style={styles.textNormal}
            >
                Local, Data e Hora do Evento.
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
    textBold: {
        color: '#FDFCFE',
        fontSize: 24,
        marginTop: 48,
        fontWeight: 'bold',
    },
    textNormal: {
        color: '#6B6B6B',
        fontSize: 16,
    },
})
