import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import SymptomView from './symptomView';
import SymptomAddForm from './symptomAddForm';
import SymptomEditForm from './symptomEditForm';
import Styles from '../../styles/stylesheet';

const SymptomLog = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [btn, setBtn] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  const [symptom, setSymptom] = useState([
    {
      id: '0',
      symptom: 'Back Pain',
      description: 'Dull pain in lumbars.',
      date: '02/05/2021',
      time: '12:32 pm',
      painScale: '3',
    },
    {
      id: '1',
      symptom: 'Nausea',
      description: 'Sudden bout of nausea and dizziness.',
      date: '05/04/2021',
      time: '2:23 pm',
      painScale: '0',
    },
    {
      id: '2',
      symptom: 'Headache',
      description: 'Sharp headache in the temporal area of the head.',
      date: '03/23/2021',
      time: '10:42 am',
      painScale: '5',
    },
  ]);

  const addSymptom = (symptom) => {
    setSymptom((currentSymptom) => {
      return [...currentSymptom, symptom];
    });
    setModalOpen(false);
  };

  const updateSymptom = (item) => {
    console.log("update fired");
    const newSymptom = [...symptom];
    newSymptom[item.id] = item;
    return setSymptom(newSymptom);
  };

  const deleteSymptom = (index) => {
    setSymptom(symptom.filter((data) => data.id !== index));
  };

  function Symptom({ symptom, description, date, time, painScale }) {
    return (
      <View style={Styles.cardList}>
        <Card style={Styles.itemCard}>
          <Card.Content>
            <Title>{symptom}</Title>
            <Subheading>
              {description}
              {'\n'}
              {date} at {time}
              {'\n'}
              Pain Level: {painScale}
            </Subheading>
          </Card.Content>
        </Card>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('View Symptom', {
          item: item,
          updateSymptom: updateSymptom,
          deleteSymptom: deleteSymptom,
        });
      }}>
      <Symptom
        id={item.id}
        symptom={item.symptom}
        description={item.description}
        date={item.date}
        time={item.time}
        painScale={item.painScale}
      />
    </TouchableOpacity>
  );

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.saveButton}
        onPress={() => setModalOpen(true)}>
        <Text>Log New Symptom</Text>
      </TouchableOpacity>

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={Styles.modalContent}>
            <Icon
              name="x"
              style={Styles.close}
              size={25}
              color="#77A8AB"
              onPress={() => setModalOpen(false)}
            />
            <SymptomAddForm addSymptom={addSymptom} id={symptom.length}></SymptomAddForm>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <FlatList
        data={symptom}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SymptomLog;
