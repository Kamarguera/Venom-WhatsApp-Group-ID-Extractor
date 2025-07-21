


# 📞 Venom WhatsApp Group ID Extractor

Este projeto usa o [Venom Bot](https://github.com/orkestral/venom) para abrir o WhatsApp Web automaticamente, conectar sua conta, e **extrair os IDs internos de todos os grupos** onde o seu número está adicionado.

---

## ⚙️ O que este projeto faz

✅ Abre o navegador Chrome/Chromium via Puppeteer  
✅ Conecta no WhatsApp Web usando QR Code (apenas na primeira vez)  
✅ Mantém uma **sessão persistente** na pasta `tokens` para não precisar ler o QR toda hora  
✅ Lista todos os **grupos** do WhatsApp e salva em um arquivo `grupos.json`

---

## 🚀 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Google Chrome instalado (ou Chromium)
- WhatsApp ativo no seu celular

---

## 📂 Estrutura do projeto
📁 seu-projeto/
├── index.js # Script principal (abre o WhatsApp e lista os grupos)
├── package.json # Dependências e configuração do projeto
├── grupos.json # Saída gerada com a lista de grupos
└── tokens/ # Pasta onde a sessão do Venom é salva (NÃO apagar!)



---

<img width="385" height="546" alt="image" src="https://github.com/user-attachments/assets/fa3557af-e4d7-4d19-9c0c-5ba40f825d82" />
<img width="593" height="343" alt="image" src="https://github.com/user-attachments/assets/80d5a710-4080-4bba-b3f0-f03f6dde784b" />

## 🛠️ Instalação

1️⃣ Clone este repositório (ou copie os arquivos para uma pasta local):

```
git clone <URL_DO_SEU_REPOSITORIO>
cd <nome-da-pasta>
2️⃣ Instale as dependências:


npm install venom-bot
▶️ Como rodar
1️⃣ Abra o terminal na pasta do projeto

2️⃣ Execute o script principal:


node index.js
3️⃣ Na primeira execução, será exibido um QR Code.
Escaneie com o WhatsApp no celular em Dispositivos Conectados → Conectar.

4️⃣ Após a autenticação:

O script espera alguns segundos para garantir o carregamento dos chats

Lista todos os grupos

Salva o arquivo grupos.json

🧩 Detalhes importantes
✅ Sessão persistente
A pasta tokens/ guarda o login. Não apague, para não precisar escanear o QR Code toda vez.

✅ Browser visível
O Chrome abre não-headless por padrão para facilitar testes.
Você pode alterar para headless: true se quiser rodar sem abrir janela.

✅ Delay de segurança
O script usa um delay (ou monitora o evento CONNECTED) para garantir que todos os grupos sejam carregados antes de fazer a listagem.

📁 Arquivo de saída
grupos.json → Contém todos os grupos com name e id interno:


[
  {
    "name": "Nome do Grupo",
    "id": "1234567890-123@g.us"
  }
]
🤝 Contribuindo
Pull Requests são bem-vindos!
Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar correções.

📜 Licença
Distribuído sob a MIT License.


<img width="593" height="343" alt="image" src="https://github.com/user-attachments/assets/d0fba1f9-606c-4bbc-a880-78d916d64c50" />

<img width="385" height="546" alt="image" src="https://github.com/user-attachments/assets/7ad292db-3313-466c-8a4a-ef01c880eff2" />

