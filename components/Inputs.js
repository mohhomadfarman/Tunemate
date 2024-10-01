import { Text, TextInput, useColorScheme, View } from "react-native";
import { getStyles } from "../Screens/Style/style";

const TextInputField = ({ label, placeholder })=> {

    const scheme = useColorScheme();
    const styles = getStyles(scheme);
    const StylePage =getStyles(scheme)
    return(
        <View >
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        placeholderTextColor={scheme === 'dark' ? 'lightgray' : 'lightgray'}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
    )};


  export default TextInputField;