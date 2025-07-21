# 📞 Venom WhatsApp Group ID Extractor

## 🎬 Demo
[![WhatsApp Groups Demo](https://github.com/user-attachments/assets/0312166a-9a12-49aa-a80e-aca39c85bfda)](...)

*Extracting 50+ group IDs in seconds!*

[![npm version](https://badge.fury.io/js/venom-bot.svg)](...)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](...)

## Language / Idioma

- [🇺🇸 English](#english)
- [🇧🇷 Português](#português)

---

## English

This project uses [Venom Bot](https://github.com/orkestral/venom) to automatically open WhatsApp Web, connect your account, and **extract the internal IDs of all groups** where your number is added.

### ⚙️ What this project does

✅ Opens Chrome/Chromium browser via Puppeteer  
✅ Connects to WhatsApp Web using QR Code (only first time)  
✅ Maintains a **persistent session** in the `tokens` folder to avoid scanning QR every time  
✅ Lists all WhatsApp **groups** and saves them in a `groups.json` file

### 🚀 Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- Google Chrome installed (or Chromium)
- Active WhatsApp on your phone

### 📂 Project structure

```
📁 your-project/
├── index.js          # Main script (opens WhatsApp and lists groups)
├── package.json      # Project dependencies and configuration
├── groups.json       # Output file with group list
└── tokens/           # Folder where Venom session is saved (DO NOT delete!)
```

### 🛠️ Installation

1️⃣ Clone this repository (or copy files to a local folder):

```bash
git clone <repository-url>
cd <project-folder>
```

2️⃣ Install dependencies:

```bash
npm install venom-bot
```

### ▶️ How to run

1️⃣ Open terminal in the project folder

2️⃣ Execute the main script:

```bash
node index.js
```

3️⃣ On first run, a QR Code will be displayed.  
Scan it with WhatsApp on your phone: **Linked Devices → Link a device**.

4️⃣ After authentication:
- The script waits a few seconds to ensure chats are loaded
- Lists all groups
- Saves the `groups.json` file

### 🧩 Important details

✅ **Persistent session**  
The `tokens/` folder stores your login. Do not delete it to avoid scanning the QR Code every time.

✅ **Visible browser**  
Chrome opens in non-headless mode by default for easier testing.  
You can change to `headless: true` if you want to run without a visible window.

✅ **Safety delay**  
The script uses a delay (or monitors the CONNECTED event) to ensure all groups are loaded before listing.

### 📁 Output file

`groups.json` → Contains all groups with `name` and internal `id`:

```json
[
  {
    "name": "Group Name",
    "id": "1234567890-123@g.us"
  }
]
```

### 🤝 Contributing

Pull Requests are welcome!  
Feel free to open issues, suggest improvements, or send fixes.

### 📜 License

Distributed under the MIT License.

---

## Português

Este projeto usa o [Venom Bot](https://github.com/orkestral/venom) para abrir o WhatsApp Web automaticamente, conectar sua conta, e **extrair os IDs internos de todos os grupos** onde o seu número está adicionado.

### ⚙️ O que este projeto faz

✅ Abre o navegador Chrome/Chromium via Puppeteer  
✅ Conecta no WhatsApp Web usando QR Code (apenas na primeira vez)  
✅ Mantém uma **sessão persistente** na pasta `tokens` para não precisar ler o QR toda hora  
✅ Lista todos os **grupos** do WhatsApp e salva em um arquivo `grupos.json`

### 🚀 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Google Chrome instalado (ou Chromium)
- WhatsApp ativo no seu celular

### 📂 Estrutura do projeto

```
📁 seu-projeto/
├── index.js          # Script principal (abre o WhatsApp e lista os grupos)
├── package.json      # Dependências e configuração do projeto
├── grupos.json       # Saída gerada com a lista de grupos
└── tokens/           # Pasta onde a sessão do Venom é salva (NÃO apagar!)
```

### 🛠️ Instalação

1️⃣ Clone este repositório (ou copie os arquivos para uma pasta local):

```bash
git clone <url-do-repositorio>
cd <pasta-do-projeto>
```

2️⃣ Instale as dependências:

```bash
npm install venom-bot
```

### ▶️ Como executar

1️⃣ Abra o terminal na pasta do projeto

2️⃣ Execute o script principal:

```bash
node index.js
```

3️⃣ Na primeira execução, um QR Code será exibido.  
Escaneie com o WhatsApp do seu celular: **Aparelhos conectados → Conectar um aparelho**.

4️⃣ Após a autenticação:
- O script aguarda alguns segundos para garantir que os chats sejam carregados
- Lista todos os grupos
- Salva o arquivo `grupos.json`

### 🧩 Detalhes importantes

✅ **Sessão persistente**  
A pasta `tokens/` armazena seu login. Não a delete para evitar escanear o QR Code toda vez.

✅ **Navegador visível**  
O Chrome abre em modo não-headless por padrão para facilitar testes.  
Você pode alterar para `headless: true` se quiser executar sem janela visível.

✅ **Delay de segurança**  
O script usa um delay (ou monitora o evento CONNECTED) para garantir que todos os grupos sejam carregados antes de listá-los.

### 📁 Arquivo de saída

`grupos.json` → Contém todos os grupos com `nome` e `id` interno:

```json
[
  {
    "name": "Nome do Grupo",
    "id": "1234567890-123@g.us"
  }
]
```

### 🤝 Contribuindo

Pull Requests são bem-vindos!  
Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar correções.

### 📜 Licença

Distribuído sob a Licença MIT.
