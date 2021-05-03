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
import Icon from 'react-native-vector-icons/Feather';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import Styles from '../../styles/stylesheet';
import MedicationEditForm from './medicationEditForm';

const ViewMedication = ({ navigation, route }, item) => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const onUpdate = (medication) => {
    route.params.updateMedication(medication);
    setModalOpen(false);
    navigation.navigate('Medication Tracker');
  }

  return (
    <View style={Styles.container}>
      <Card style={Styles.itemCard}>
        <Card.Content>
          <Title>{route.params.item.name}</Title>
          <Subheading>
            {route.params.item.instructions}
            {'\n'}
            {route.params.item.time} | {route.params.item.dosage}
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
            <MedicationEditForm item={route.params.item} updateMedication={onUpdate} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Button
        title="Back"
        onPress={() => navigation.navigate('Medication Tracker')}></Button>
    </View>
  );
};

export default ViewMedication;
