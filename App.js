import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList  } from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {
  // definir el state de citas
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'sofia', propietario: 'Amariani', sintomas: 'No come'}
  ]);

  // Elimina los pacientes del state
  const eliminarPaciente = id => {
    const citasFiltradas = citas.filter( cita => cita.id !== id );
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <Formulario />

      <View style={styles.contenido}>
        <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'} </Text>
        <FlatList 
            style={styles.listado}
            data={citas}
            renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente} />  }
            keyExtractor={ cita => cita.id}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ?  40  : 20 ,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }, 
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  }
});

export default App;
