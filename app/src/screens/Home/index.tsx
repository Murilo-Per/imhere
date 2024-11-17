import { Text, TextInput, TouchableOpacity, View, ScrollView, FlatList } from "react-native";

import { styles } from "./styles";
import { CardParticipant } from "../../components/CardParticipant";

export function Home() {
  const listParticipant = ["Murilo Pereira", "Pamela Priscila", "Heitor Benjamin", "Aurora Lis", "Ladjane Maria", "Paulo Cesar", "Maria Clara", "Mag the Dog", "Cururu", "Peixe"]
  //const listParticipant = []
  function handleParticipantAdd() {
    console.log("clicou add")
  }

  function handleParticipantRemove(name: string) {
    console.log(`clicou remove ${name}`)
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
        />

        <TouchableOpacity style={styles.button}
          onPress={handleParticipantAdd}
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

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          listParticipant.map(partcipant => (
            <CardParticipant
              key={partcipant}
              name={partcipant}
              onRemove={() => handleParticipantRemove(partcipant)}
            />
          ))
        }
      </ScrollView> */}

      {/* <CardParticipant
        name="Murilo Pereira"
        onRemove={() => handleParticipantRemove("Nome2")}
      />

      <CardParticipant
        name="Heitor Pereira"
        onRemove={() => handleParticipantRemove("Nome3")}
      />

      <CardParticipant
        name="Aurora Pereira"
        onRemove={() => handleParticipantRemove("Nome4")}
      /> */}

    </View>
  )
}