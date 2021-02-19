import React, { useState } from 'react';
import { 
	Text, 
	StyleSheet, 
	View, 
	TextInput, 
	Button, 
	TouchableHighlight, 
	Alert, 
	ScrollView,
} from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { dateFormat } from '../helpers/dateFormat';
import { timeFormat } from '../helpers/timeFormat';
import shortid from 'shortid';

const Formulario = ({citas, setCitas, setMostrarForm}) => {

	const [paciente, setPaciente] = useState('');
	const [propietario, setPropietario] = useState('');
	const [telefono, setTelefono] = useState('');
	const [sintomas, setSintomas] = useState('');
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

	const crearNuevaCita = () => {

		console.log("paciente", paciente);

		if (paciente.trim() === '' ||
				propietario.trim() === '' ||
				telefono.trim() === '' ||
				fecha.trim() === '' ||
				hora.trim() === '' ||
				sintomas.trim() === '')
		{
			mostrarAlerta();
			return;
		}

		//Crear una nueva cita
		const cita = { paciente, propietario, telefono, sintomas, fecha, hora };

		cita.id = shortid.generate();

		//Agregar al state
		const citasNuevo = [...citas, cita];
		setCitas(citasNuevo);

		//Ocultar formulario
		setMostrarForm(false);

		//resetear formulario

	}

	//Muestra la alerta si falla la validacion
	const mostrarAlerta = () => {
		Alert.alert(
			'Error', //titulo
			'Todos los campos son obligatorios', //mensaje
			[{
				text: 'OK' //Arreglo de botones
			}]
		)
	}
	
  return (
		<>
			<ScrollView style={styles.formulario}>
				<View>
						<Text style={styles.label}>Paciente:</Text>
						<TextInput
							style={styles.input}
							onChangeText={setPaciente}
						/>
				</View>

				<View>
						<Text style={styles.label}>Propietario:</Text>
						<TextInput
							style={styles.input}
							onChangeText={setPropietario}
						/>
				</View>

				<View>
						<Text style={styles.label}>Teléfono Contacto:</Text>
						<TextInput
							style={styles.input}
							onChangeText={setTelefono}
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
							onChangeText={setSintomas}
					/>
				</View>

				<View>
					<TouchableHighlight onPress={crearNuevaCita} style={styles.btnSubmit}>
							<Text style={styles.textoSubmit}>Guardar</Text>
					</TouchableHighlight>
        </View>
			</ScrollView>
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
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#7D024E',
        marginVertical: 10,
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
 
export default Formulario;