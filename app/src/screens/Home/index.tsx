import { Text, TextInput, TouchableOpacity, View, ScrollView, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import { CardParticipant } from "../../components/CardParticipant";
import { useState } from "react";

export function Home() {
  const [listParticipant, setListParticipant] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd(pNewParticipantName: string) {

    if (listParticipant.includes(pNewParticipantName)) {
      return Alert.alert('Lista de Participantes', `O participante ${pNewParticipantName} já está na lista!`)
    }

    setListParticipant(prevState => [...prevState, pNewParticipantName])
  }

  function handleParticipantRemove(name: string) {
    setListParticipant(prevState => prevState.filter(participant => participant !== name))
  }

  function handleParticipantEmptyList() {
    return (
      <Text style={styles.emptyList} >
        Nenhum participante adicionado na lista!
      </Text>
    )
  }

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
        Domingo, 17 de Novembro de 2024
      </Text>

      <View style={styles.containerForm}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button}
          onPress={() => handleParticipantAdd(participantName)}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listParticipant}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <CardParticipant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={handleParticipantEmptyList}
      />
    </View>
  )
}