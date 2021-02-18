import React, { useState} from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight  } from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {

  const [mostrarForm, setMostrarForm] = useState(false);

  // definir el state de citas
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'sofia', propietario: 'Amariani', sintomas: 'No come'},
    {id: '2', paciente: 'coni', propietario: 'Amariani', sintomas: 'No duerme'},
  ]);

  // Elimina los pacientes del state
  const eliminarPaciente = id => {
    setCitas((citasActuales) => {
      return citasActuales.filter( cita => cita.id !== id );
    })
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <View>
        <TouchableHighlight onPress={ () => setMostrarForm(!mostrarForm)} style={styles.btnMostrarForm}>
            <Text style={styles.textoMostrarFormt}>
              { mostrarForm ? 'Cancelar crear cita' : 'Crear nueva cita' }
            </Text>
        </TouchableHighlight>
      </View>

      <View style={styles.contenido}>

        {
          mostrarForm && (
            <Formulario />
          )
        }

        {
          !mostrarForm && (
            <>
              <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'} </Text>
              <FlatList 
                  style={styles.listado}
                  data={citas}
                  renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente} />  }
                  keyExtractor={ cita => cita.id}
              />
            </>
          )
        }
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
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
      padding: 10,
      backgroundColor: '#7D024E',
      marginVertical: 10,
  },
  textoMostrarFormt: {
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center'
  }
});

export default App;
