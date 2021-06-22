import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.backgroundColor
  },

  image: {
    width: '100%',
    height: 360,
    borderBottomWidth:2
  }, 

  title: {
    fontSize: 40,
    display: 'flex',
    fontWeight: '700',
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.colors.heading,
    marginBottom: 16
  },

  subtitle: {
    color: theme.colors.heading,
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 48,
  },

  content: {
    alignItems: "center",
    padding: 50
  }
})