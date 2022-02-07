# Rede Social ***Amipets***

### **Descrição:**

Desenvolvimento do ***backend*** da Rede Social Amipets utilizando o padrão ***REST*** como nota parcial da disciplina de Sistemas Distribuídos. Em síntese, essa rede social tem como objetivo divulgar pets perdidos, encontrados ou disponíveis para adoção.


### **Requisitos:**

* Cadastrar o usuário; 
* Autenticar o usuário;
* Consultar informações de um usuário;
* Publicar postagens para divulgação de pets perdidos, encontrados ou disponíveis para adoção (texto e link da imagem);
* Mudar o status da postagem;
* Listar informações sobre as postagens conforme o status, a espécie e a categoria;
* Listar as postagens acompanhados por um usuário;
* Publicar comentários em uma postagem; 
* Listar os comentários de uma postagem;
* Salvar uma postagem.

### **Rotas**

* **/**: servidor web principal.
* **/usuario**: rotas do usuario
    - **/cadastrar**: rota post que cadastra o usuário -> parâmetros: (nome, username, senha, telefone, email)
    - **/login**: rota post que autentica o usuário -> parâmetros: (username, senha)
    - **/consultar**: rota post que retorna dados de um usuário -> parâmetros: (username)
* **/postagem**: rotas de postagens
    - **/publicar**: rota post que publica postagem -> parâmetros: (texto, especie, categoria, status, imagem, id_usuario)
    - **/mudar**: rota post que muda o status da postagem -> parâmetros: (id_postagem, novo_status)
    - **/listar**: rota post que lista as postagens e suas respectivas quantidades de comentários de acordo com os critérios -> parâmetros opcionais: (status, categoria, especie)
    - **/salvos**: rota post que lista as postagens salvas pelo usuário;
    - **/publicados**: rota post que lista as postagens publicadas pelo usuário;
* **/comentario**: rotas de comentarios
    - **/publicar**: rota post que publica comentario -> parâmetros: (texto, id_usuario, id_postagem)
    - **/listar**: rota post que retorna comentários de uma postagem (inclusive, o username de quem publicou) -> parâmetros: (id_postagem)
* **/salvos**: rotas das postagens salvas
    - **/salvar**: rota post em que o usuário salva uma postagem -> parâmetros: (id_usuario, id_postagem)
    - **/verificar**: rota post em que se verifica se o usuário salvou a postagem

### **Frontend da aplicação**

* O frontend está disponível em:


### **Instruções para rodar localmente**

1) Baixar o repositório:

    ```
    git clone 
    ```

2) Instalar as dependências:

    ```
    yarn install 
    ```

3) Rodar o servidor

    ```
    yarn start
    ```

4) Funcionamento da aplicação
    
    ```
    http://localhost:3001
    ```

### **Heroku**

* A aplicação está disponível em: 

    xxx 

### **Autora**

Emanuelle Lemos