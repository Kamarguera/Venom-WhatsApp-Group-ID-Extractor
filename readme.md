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

yaml
Copiar
Editar

---

## 🛠️ Instalação

1️⃣ Clone este repositório (ou copie os arquivos para uma pasta local):

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <nome-da-pasta>
2️⃣ Instale as dependências:

bash
Copiar
Editar
npm install venom-bot
▶️ Como rodar
1️⃣ Abra o terminal na pasta do projeto

2️⃣ Execute o script principal:

bash
Copiar
Editar
node index.js
3️⃣ Na primeira execução, será exibido um QR Code.
Escaneie com o WhatsApp no celular em Dispositivos Conectados → Conectar.

4️⃣ Após a autenticação:

O script espera alguns segundos para garantir o carregamento dos chats.

Lista todos os grupos.

Salva o arquivo grupos.json.

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

json
Copiar
Editar
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

Feito com 💚 usando Venom Bot 🚀

markdown
Copiar
Editar

---

exemplo de saída:

📊 Grupos encontrados por diferentes métodos:
   Method 1 (isGroup): 0
   Method 2 (isGroupChat): 0
   Method 3 (ID @g.us): 72
   Method 4 (contact.isGroup): 0
   Method 5 (kind === 'group'): 0
   Method 6 (por características): 72

📊 Usando método 'ID @g.us' que encontrou 72 grupos
==================================================
1. Nome: RANKING SIMPLES
   ID: 120363360477372668@g.us
   Participantes: N/A
------------------------------
2. Nome: Torneio Simples HT 2025
   ID: 120363417869905107@g.us
   Participantes: 64
------------------------------
3. Nome: Jornada de Dados #7
   ID: 120363299885659639@g.us
   Participantes: N/A
------------------------------
4. Nome: MOTOBOYS ALVORADA OFICIAL
   ID: 555193104983-1624318207@g.us
   Participantes: N/A