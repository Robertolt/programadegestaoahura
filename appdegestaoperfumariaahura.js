import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [comprador, setComprador] = useState('');
  const [vendedor, setVendedor] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [perfumes, setPerfumes] = useState([]);

  const adicionarPerfume = () => {
    if (nome && descricao && quantidade && preco && comprador && vendedor && metodoPagamento) {
      setPerfumes([...perfumes, { 
        id: Math.random().toString(), 
        nome, 
        descricao, 
        quantidade, 
        preco, 
        comprador, 
        vendedor, 
        metodoPagamento 
      }]);
      
      // Limpar os campos
      setNome('');
      setDescricao('');
      setQuantidade('');
      setPreco('');
      setComprador('');
      setVendedor('');
      setMetodoPagamento('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Perfumaria Artesanal</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome do Perfume"
        value={nome}
        onChangeText={setNome}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Descrição do Perfume"
        value={descricao}
        onChangeText={setDescricao}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Quantidade em Estoque"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Preço do Perfume"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Comprador"
        value={comprador}
        onChangeText={setComprador}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Vendedor"
        value={vendedor}
        onChangeText={setVendedor}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Método de Pagamento"
        value={metodoPagamento}
        onChangeText={setMetodoPagamento}
      />
      
      <Button title="Adicionar Perfume" onPress={adicionarPerfume} />

      <FlatList
        data={perfumes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text>Preço: R${item.preco}</Text>
            <Text>Comprador: {item.comprador}</Text>
            <Text>Vendedor: {item.vendedor}</Text>
            <Text>Método de Pagamento: {item.metodoPagamento}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontWeight: 'bold',
  },
});

export default App;
