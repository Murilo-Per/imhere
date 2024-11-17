import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { ActionButton } from "../ActionButton";

type Props = {
  name: string;
  onRemove: () => void;
}

export function CardParticipant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name} >
        {name}
      </Text>

      <ActionButton caption="-" onPress={onRemove} />
    </View>
  )
}