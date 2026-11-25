import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const produtos = [
  { id: '1', nome: 'Fone Bluetooth', preco: 129.90, categoria: 'Acessórios', emoji: '🎧' },
  { id: '2', nome: 'Smartwatch', preco: 249.90, categoria: 'Eletrônicos', emoji: '⌚' },
  { id: '3', nome: 'Mochila Casual', preco: 89.90, categoria: 'Acessórios', emoji: '🎒' },
  { id: '4', nome: 'Garrafa Térmica', preco: 59.90, categoria: 'Casa e dia a dia', emoji: '🥤' },
  { id: '5', nome: 'Teclado Mecânico', preco: 319.90, categoria: 'Informática', emoji: '⌨️' },
  { id: '6', nome: 'Mouse sem Fio', preco: 79.90, categoria: 'Informática', emoji: '🖱️' },
  { id: '7', nome: 'Caixa de Som', preco: 159.90, categoria: 'Eletrônicos', emoji: '🔊' },
  { id: '8', nome: 'Óculos de Sol', preco: 99.90, categoria: 'Acessórios', emoji: '🕶️' },
];

function ProdutoCard({ produto }) {
  return (
    <View style={styles.card}>
      <View style={styles.iconeProduto}>
        <Text style={styles.emoji}>{produto.emoji}</Text>
      </View>

      <View style={styles.infoProduto}>
        <Text style={styles.categoria}>{produto.categoria}</Text>
        <Text style={styles.nomeProduto}>{produto.nome}</Text>
        <Text style={styles.preco}>
          {produto.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FB" />

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProdutoCard produto={item} />}
        contentContainerStyle={styles.lista}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        ListHeaderComponent={
          <View style={styles.cabecalho}>
            <Text style={styles.marca}>MINI STORE</Text>
            <Text style={styles.titulo}>Nosso catálogo</Text>
            <Text style={styles.subtitulo}>
              Encontre seus produtos favoritos em um só lugar.
            </Text>
            <View style={styles.contador}>
              <Text style={styles.contadorTexto}>
                {produtos.length} produtos disponíveis
              </Text>
            </View>
          </View>
        }
        ListFooterComponent={
          <Text style={styles.rodape}>Obrigado por visitar nossa loja! ✨</Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  lista: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  cabecalho: {
    marginBottom: 24,
  },
  marca: {
    color: '#5267D9',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
  },
  titulo: {
    color: '#17213B',
    fontSize: 30,
    fontWeight: '800',
  },
  subtitulo: {
    color: '#68738B',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
  contador: {
    alignSelf: 'flex-start',
    backgroundColor: '#E7EBFF',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 8,
    marginTop: 16,
  },
  contadorTexto: {
    color: '#4054C4',
    fontSize: 12,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#17213B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  iconeProduto: {
    width: 66,
    height: 66,
    borderRadius: 15,
    backgroundColor: '#F0F2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  emoji: {
    fontSize: 30,
  },
  infoProduto: {
    flex: 1,
  },
  categoria: {
    color: '#8992A6',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.7,
  },
  nomeProduto: {
    color: '#202A44',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
  },
  preco: {
    color: '#5267D9',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 6,
  },
  separador: {
    height: 12,
  },
  rodape: {
    color: '#8992A6',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 24,
  },
});
