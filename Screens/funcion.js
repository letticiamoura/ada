
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FuncionScreen = () => {

  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [CHA, setCHA] = useState('');
  const [CHD, setCHD] = useState('');
  const [Tipo, setTipo] = useState('');
  const [Turno, setTurno] = useState('');
  const [Setor, setSetor] = useState('');
  const [Cargo, setCargo] = useState('');
  const [Empresa, setEmpresa] = useState('');

  const navigation = useNavigation();

  const handleSave = () => {
    // Lógica para salvar os dados no backend
  };

  const handleEdit = () => {
    // Lógica para habilitar a edição dos campos
  };

  const handleInactivate = () => {
    // Lógica para inativar a conta
  };



  const Home = () => {
    navigation.navigate('Principal');
  };
  const Relatorio = () => {
    navigation.navigate('RelatorioADM');
  };
  const Config = () => {
    navigation.navigate('config');
  };
  const funcion = () => {
    navigation.navigate('funcion');
  };

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
            }}
            style={styles.profileImage}
          />
        </View>


        <View style={styles.textBoard}>
          <Text style={styles.label}><Text style={styles.boldText}>                                  Dados Pessoais:</Text></Text>
          <TextInput
            placeholder="Nome completo"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
          />
        </View>

        <View style={styles.textBoard}>

          <TextInput
            placeholder="Email Pessoal"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <View style={styles.textBoard}>

          <TextInput
            placeholder="CPF"
            keyboardType='numeric'
            value={cpf}
            onChangeText={setCpf}
            style={styles.input}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="DD/MM/AAAA"
              keyboardType='numeric'
              value={dob}
              onChangeText={setDob}
              style={styles.input}
            />
          </View>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="(00) 00000-0000"
              keyboardType='numeric'
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.textBoard}>

          <TextInput
            placeholder="Email"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
        </View>

        <View style={styles.textBoard}>

          <TextInput
            secureTextEntry={true}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>

        <View style={styles.textBoard}>
          <Text style={styles.label}><Text style={styles.boldText}>                                     Empresa:</Text></Text>
          <TextInput
            placeholder="Empresa"
            value={Empresa}
            onChangeText={setEmpresa}
            style={styles.input}
          />
        </View>

        <View style={styles.textBoard}>
          <TextInput
            placeholder="Cargo"
            value={Cargo}
            onChangeText={setCargo}
            style={styles.input}
          />
        </View>


        <View style={styles.textBoard}>
          <TextInput
            placeholder="Setor"
            value={Setor}
            onChangeText={setSetor}
            style={styles.input}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="Tipo"
              value={Tipo}
              onChangeText={setTipo}
              style={styles.input}
            />
          </View>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="Turno"
              value={Turno}
              onChangeText={setTurno}
              style={styles.input}
            />
          </View>
        </View>


        <View style={styles.row}>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="CH/D"
              value={CHD}
              onChangeText={setCHD}
              style={styles.input}
            />
          </View>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="CH/A"
              value={CHA}
              onChangeText={setCHA}
              style={styles.input}
            />
          </View>
        </View>




        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave} style={styles.button}>
            <Text style={styles.buttonText}>Inativar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEdit} style={styles.button}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleInactivate} style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Text>
        {'\n'}
      </Text>

      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={Relatorio}>
          <Text style={styles.bottomButtonText}>Relatório</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={Home}>
          <Text style={styles.bottomButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={Config}>
          <Text style={styles.bottomButtonText}>Config</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={funcion}>
          <Text style={styles.bottomButtonText}>Funcionários</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  profileImageContainer: {
    flex: 1, 
    backgroundColor: 'orange',
    borderRadius: 100,
    marginBottom: '5%',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  profileImage: {
    width: '50%',
    aspectRatio: 1,
  },
  textBoard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 3,
    marginBottom: 10,
  },
  label: {
    color: '#555',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 80,
    padding: 7,
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  flex1: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 7,
    paddingLeft: 2,
    alignItems: 'center',
    paddingTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '112%',
    bottom: 10,
    padding: 10,
    backgroundColor: 'orange',
    right: 20,
  
  },
});

export default FuncionScreen;
