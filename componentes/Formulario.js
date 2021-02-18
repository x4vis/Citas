import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { dateFormat } from '../helpers/dateFormat';
import { timeFormat } from '../helpers/timeFormat';

const Formulario = ({citas, setCitas}) => {

	const [fecha, setFecha] = useState('');
	const [hora, setHora] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
  	setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
		setFecha(dateFormat(date, false));
    hideDatePicker();
  };

	//muestra u oculta el time picker
	const showTimePicker = () => {
  	setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

	const confirmarHora = (time) => {
    setHora(timeFormat(time));
    hideTimePicker();
  };
	
  return (
		<>
			<View style={styles.formulario}>
				<View>
						<Text style={styles.label}>Paciente:</Text>
						<TextInput
							style={styles.input}
							onChangeText={ texto => console.log(texto) }
						/>
				</View>

				<View>
						<Text style={styles.label}>Dueño:</Text>
						<TextInput
							style={styles.input}
							onChangeText={ texto => console.log(texto) }
						/>
				</View>

				<View>
						<Text style={styles.label}>Teléfono Contacto:</Text>
						<TextInput
							style={styles.input}
							onChangeText={ texto => console.log(texto) }
							keyboardType='numeric'
						/>
				</View>

				<View>
					<Text style={styles.label}>Fecha:</Text>
					<Button title="Seleccionar Fecha" onPress={showDatePicker} />
					<DateTimePickerModal
						isVisible={isDatePickerVisible}
						mode='date'
						onConfirm={confirmarFecha}
						onCancel={hideDatePicker}
						locale='es-ES'
						headerTextIOS='Elige una fecha'
						cancelTextIOS='Cancelar'
						confirmTextIOS='Confirmar'
						is24Hour
						/>
					<Text>{fecha}</Text>
				</View>

				<View>
					<Text style={styles.label}>Hora:</Text>
					<Button title="Seleccionar Hora" onPress={showTimePicker} />
					<DateTimePickerModal
						isVisible={isTimePickerVisible}
						mode='time'
						onConfirm={confirmarHora}
						onCancel={hideTimePicker}
						locale='es_ES'
						headerTextIOS='Elige una hora'
						cancelTextIOS='Cancelar'
						confirmTextIOS='Confirmar'
						is24Hour
					/>
					<Text>{hora}</Text>
				</View>

				<View>
						<Text style={styles.label}>Síntomas:</Text>
						<TextInput
								multiline
								style={styles.input}
								onChangeText={ texto => console.log(texto) }
						/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})
 
export default Formulario;