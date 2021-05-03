import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles/stylesheet';
import SymptomEditForm from './symptomEditForm';

const ViewSymptom = ({ navigation, route }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onUpdate = (symptom) => {
    route.params.updateSymptom(symptom);
    setModalOpen(false);
    navigation.navigate('Symptom Log');
  };

  return (
    <View style={Styles.container}>
      <Card style={Styles.itemCard}>
        <Card.Content>
          <Title>{route.params.item.symptom}</Title>
          <Subheading>
            {route.params.item.description}
            {'\n'}
            {route.params.item.date} at {route.params.item.time}
            {'\n'}
            Pain Level: {route.params.item.painScale}
          </Subheading>
        </Card.Content>
        <Card.Actions style={Styles.cardBtn}>
          <Button title="Edit" onPress={() => setModalOpen(true)}></Button>
          <Button title="Delete"></Button>
        </Card.Actions>
      </Card>

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
            <SymptomEditForm
              item={route.params.item}
              updateSymptom={onUpdate}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Button
        title="Back"
        onPress={() => navigation.navigate('Symptom Log')}></Button>
    </View>
  );
};

export default ViewSymptom;
