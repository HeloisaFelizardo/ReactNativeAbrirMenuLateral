import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight: '700'
  },
  titulo: {
    fontSize: 26, marginBottom: 10,
    textAlign: "center"
  },  
  texto: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center"
  },

  buttonBox: {
    width: 200,
    marginTop: 20
  }
});

export default estilo;