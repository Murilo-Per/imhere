import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles";

type Props = {
  caption: string;
  onPress: () => void;
}

export function ActionButton({ caption, onPress }: Props) {
  return (
    <View>
      <TouchableOpacity style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          {caption}
        </Text>
      </TouchableOpacity>
    </View>
  )
}