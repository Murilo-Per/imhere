import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    marginTop: 48,
    fontWeight: 'bold',
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    marginRight: 12,
    borderRadius: 8,
    backgroundColor: "#1F1E25",
    padding: 16,
    fontSize: 18,
    color: "#FDFCFE",
  },
  buttonText: {
    fontSize: 48,
    color: "#000",
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 8,
    backgroundColor: "#FDF166",
    alignItems: "center",
    justifyContent: "center",
  },
  containerForm: {
    width: 'auto',
    flexDirection: "row",
    marginTop: 18,
    marginBottom: 56,
  },
  emptyList: {
    fontSize: 18,
    color: "#FDFCFE",
    textAlign: "center",
    flex: 1
  }

})