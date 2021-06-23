import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: '100%',
    height: 360,
  }, 
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },

  title: {
    fontSize: 40,
    display: 'flex',
    fontWeight: '700',
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.colors.heading,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },

  subtitle: {
    color: theme.colors.heading,
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 48,
    fontFamily: theme.fonts.text400,
    lineHeight:25
  },
 
})