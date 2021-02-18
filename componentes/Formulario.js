import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = ({citas, setCitas}) => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
  	setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
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
						<Button title="Seleccionar Fecha" onPress={showDatePicker} />
						<DateTimePickerModal
							isVisible={isDatePickerVisible}
							mode="date"
							onConfirm={handleConfirm}
							onCancel={hideDatePicker}
						/>
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