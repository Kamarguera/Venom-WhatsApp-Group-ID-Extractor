const venom = require('venom-bot');
const fs = require('fs');

venom
  .create(
    'sessionName',
    undefined,
    (statusSession, session) => {
      console.log('Status Session:', statusSession);
      console.log('Session name:', session);
    },
    {
      folderNameToken: 'tokens',
      headless: false
    }
  )
  .then(client => {
    console.log('✅ Cliente criado com sucesso!');

    // Executa a função assim que o cliente estiver disponível
    setTimeout(() => {
      console.log('🔍 Tentando listar grupos...');
      listarGrupos(client);
    }, 15000); // Aguarda 15 segundos para garantir que tudo esteja carregado

    // Também monitora mudanças de estado (opcional)
    client.onStateChange((state) => {
      console.log('🔄 State changed:', state);

      // Se quiser executar quando atingir um estado específico
      if (state === 'successChat' || state === 'CONNECTED') {
        console.log('✅ Sessão totalmente conectada!');
        // Você pode chamar listarGrupos aqui também se preferir
        // listarGrupos(client);
      }
    });
  })
  .catch(error => {
    console.error('❌ Erro ao iniciar Venom:', error);
  });

async function listarGrupos(client, tentativa = 1) {
  try {
    console.log(`📋 Buscando todos os chats... (Tentativa ${tentativa})`);
    const chats = await client.getAllChats();

    console.log(`\n📊 Total de chats: ${chats.length}`);

    // Debug: Vamos ver a estrutura de alguns chats que parecem ser grupos
    console.log('\n🔍 DEBUG - Estrutura dos primeiros chats:');
    chats.slice(0, 5).forEach((chat, index) => {
      console.log(`\n--- Chat ${index + 1}: ${chat.name || 'Sem nome'} ---`);
      console.log(`ID type: ${typeof chat.id}`);
      console.log(`ID: ${JSON.stringify(chat.id)}`);
      console.log(`isGroup: ${chat.isGroup}`);
      console.log(`kind: ${chat.kind}`);
      console.log(`isGroupChat: ${chat.isGroupChat}`);
      console.log(`contact: ${JSON.stringify({
        isGroup: chat.contact?.isGroup,
        isGroupChat: chat.contact?.isGroupChat,
        kind: chat.contact?.kind
      })}`);

      // Lista todas as propriedades do chat
      console.log(`Propriedades disponíveis: ${Object.keys(chat).join(', ')}`);

      // Verifica se o ID (como string ou objeto) contém @g.us
      const idString = typeof chat.id === 'string' ? chat.id : (chat.id?._serialized || chat.id?.user || JSON.stringify(chat.id));
      const isGroupById = idString && idString.includes('@g.us');
      console.log(`ID como string: ${idString}`);
      console.log(`Contém @g.us: ${isGroupById}`);
    });

    // Vamos tentar diferentes formas de identificar grupos
    const groupsMethod1 = chats.filter(chat => chat.isGroup === true);
    const groupsMethod2 = chats.filter(chat => chat.isGroupChat === true);
    const groupsMethod3 = chats.filter(chat => {
      const idString = typeof chat.id === 'string' ? chat.id : (chat.id?._serialized || chat.id?.user || JSON.stringify(chat.id));
      return idString && idString.includes('@g.us');
    });
    const groupsMethod4 = chats.filter(chat => chat.contact && chat.contact.isGroup === true);
    const groupsMethod5 = chats.filter(chat => chat.kind === 'group');

    // Método adicional: verificar por propriedades que indiquem grupo
    const groupsMethod6 = chats.filter(chat => {
      // Nomes típicos de grupos ou outras propriedades
      return chat.name && (
        chat.name.includes('🚨') ||
        chat.name.includes('OFICIAL') ||
        chat.name.includes('GRUPO') ||
        chat.groupMetadata ||
        (chat.id && JSON.stringify(chat.id).includes('g.us'))
      );
    });

    console.log(`\n📊 Grupos encontrados por diferentes métodos:`);
    console.log(`   Method 1 (isGroup): ${groupsMethod1.length}`);
    console.log(`   Method 2 (isGroupChat): ${groupsMethod2.length}`);
    console.log(`   Method 3 (ID @g.us): ${groupsMethod3.length}`);
    console.log(`   Method 4 (contact.isGroup): ${groupsMethod4.length}`);
    console.log(`   Method 5 (kind === 'group'): ${groupsMethod5.length}`);
    console.log(`   Method 6 (por características): ${groupsMethod6.length}`);

    // Usa o método que encontrar mais grupos
    let groups = [];
    let methodUsed = '';

    if (groupsMethod3.length > 0) { groups = groupsMethod3; methodUsed = 'ID @g.us'; }
    else if (groupsMethod6.length > 0) { groups = groupsMethod6; methodUsed = 'características'; }
    else if (groupsMethod2.length > 0) { groups = groupsMethod2; methodUsed = 'isGroupChat'; }
    else if (groupsMethod4.length > 0) { groups = groupsMethod4; methodUsed = 'contact.isGroup'; }
    else if (groupsMethod5.length > 0) { groups = groupsMethod5; methodUsed = 'kind group'; }
    else { groups = groupsMethod1; methodUsed = 'isGroup'; }

    console.log(`\n📊 Usando método '${methodUsed}' que encontrou ${groups.length} grupos`);
    console.log('='.repeat(50));

    if (groups.length === 0 && tentativa < 2) {
      console.log(`⏳ Aguardando mais 10 segundos... (Tentativa ${tentativa}/2)`);
      setTimeout(() => {
        listarGrupos(client, tentativa + 1);
      }, 10000);
      return;
    }

    groups.forEach((group, index) => {
      const idString = typeof group.id === 'string' ? group.id : (group.id?._serialized || group.id?.user || JSON.stringify(group.id));
      console.log(`${index + 1}. Nome: ${group.name || 'Sem nome'}`);
      console.log(`   ID: ${idString}`);
      console.log(`   Participantes: ${group.groupMetadata?.participants?.length || 'N/A'}`);
      console.log('-'.repeat(30));
    });

    // Salva os dados completos
    fs.writeFileSync('grupos.json', JSON.stringify(groups, null, 2));
    console.log('✅ Arquivo grupos.json salvo!');

    // Salva apenas os IDs e nomes (mais limpo)
    const gruposSimplificados = groups.map(group => {
      const idString = typeof group.id === 'string' ? group.id : (group.id?._serialized || group.id?.user || JSON.stringify(group.id));
      return {
        nome: group.name || 'Sem nome',
        id: idString,
        participantes: group.groupMetadata?.participants?.length || 0
      };
    });

    fs.writeFileSync('grupos_simplificado.json', JSON.stringify(gruposSimplificados, null, 2));
    console.log('✅ Arquivo grupos_simplificado.json salvo!');

  } catch (err) {
    console.error('❌ Erro ao buscar grupos:', err);

    // Tenta novamente em caso de erro
    if (tentativa < 2) {
      console.log(`🔄 Tentando novamente em 5 segundos... (Tentativa ${tentativa}/2)`);
      setTimeout(() => {
        listarGrupos(client, tentativa + 1);
      }, 5000);
    }
  }
}