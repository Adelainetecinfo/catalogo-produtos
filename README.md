# Catálogo simples de produtos

Aplicativo desenvolvido com **React Native + Expo**, utilizando `FlatList` para exibir uma lista de produtos.

## Requisitos atendidos

- Array com 8 produtos.
- Cada produto possui `id`, `nome` e `preco` (também há categoria e emoji para enriquecer a apresentação).
- Exibição do nome e preço formatado em reais.
- Lista organizada em cartões para facilitar a leitura.
- `FlatList` com `keyExtractor`, `renderItem`, cabeçalho, separadores e rodapé.

## Como executar

1. Instale o [Node.js](https://nodejs.org/) (versão LTS).
2. No terminal, crie um projeto Expo:

   ```bash
   npx create-expo-app@latest catalogo-produtos
   ```

3. Entre na pasta:

   ```bash
   cd catalogo-produtos
   ```

4. Substitua o conteúdo do arquivo `App.js` pelo código deste pacote.
   - Se o projeto criado tiver `App.tsx` em vez de `App.js`, coloque o código nele. O código é compatível com TypeScript sem tipos explícitos.
5. Inicie:

   ```bash
   npx expo start
   ```

6. Para testar no celular, instale o **Expo Go** e leia o QR Code exibido no terminal ou navegador. Também é possível abrir um emulador Android configurado.

## Publicar no GitHub

Veja o passo a passo no material da atividade ou siga:

```bash
git init
git add .
git commit -m "Cria catálogo de produtos com FlatList"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/catalogo-produtos.git
git push -u origin main
```

Crie antes um repositório vazio no GitHub com o nome `catalogo-produtos`. Não marque as opções de README, `.gitignore` ou licença ao criar, pois o projeto local já terá seus arquivos.

## Captura de tela para a entrega

Com o app aberto no Expo Go ou emulador, faça uma captura de tela mostrando o catálogo. Anexe essa imagem junto com o link do repositório na plataforma indicada pelo professor.

## Onde editar os produtos

No início de `App.js`, altere o array `produtos`. Cada item deve manter um `id` único, um `nome` e um `preco` numérico.
