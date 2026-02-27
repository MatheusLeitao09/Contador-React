import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';



export default function App() {

const [contador, setContador] = useState(0);

const incrementar = () => setContador(contador + 1);

const decrementar = () => setContador(contador - 1);

const zerar = () => setContador(0);


  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Contador Digital</Text>

    <View style={styles.card}>
      <Text style={styles.numero}>{contador}</Text>
    </View>

      <View style={styles.linhaDeBotoes}> 
        <TouchableOpacity style={[styles.botao, styles.botaoMenos]} onPress={decrementar}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, styles.botaoMais]} onPress={incrementar}>

        <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoZerar} onPress={zerar}>
             <Text style={styles.textoZerar}>ZERAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight || 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 50,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    borderWidth: 8,
    borderColor: '#6366F1',
    elevation: 12,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },
  numero: {
    fontSize: 80,
    fontWeight: '200',
    color: '#1E293B',
  },
  posMenos: {
    position: 'absolute',
    left: 30,
    top: '65%',
  },
  posMais: {
    position: 'absolute',
    alignSelf: 'center',
    top: '75%',
  },
  posZerar: {
    position: 'absolute',
    right: 30,
    top: '65%',
  },
  linhaDeBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  botao: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  botaoMais: {
    backgroundColor: '#22C55E',
    shadowColor: '#22C55E',
  },
  botaoMenos: {
    backgroundColor: '#EF4444',
    shadowColor: '#EF4444',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '300',
    lineHeight: 48,
  },
  botaoZerar: {
    backgroundColor: '#F0F4F8',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#1F2937',
    elevation: 2,
  },
  textoZerar: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
});