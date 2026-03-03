🌿 Fluxo Nativo: Motor de Decisões via Google Sheets
O Fluxo Nativo é uma ferramenta serverless de criação de fluxogramas e árvores de decisão interativas. Ele permite que qualquer pessoa crie um bot de perguntas e respostas complexo utilizando apenas o Google Sheets como interface de gerenciamento (No-Code), enquanto o motor roda via Google Apps Script.
Originalmente concebido para projetos de SBN (Soluções Baseadas na Natureza), sua arquitetura flexível permite a aplicação em diagnósticos ambientais, triagem de clientes, treinamentos ou qualquer fluxo lógico de decisão.
🚀 Funcionalidades
Estrutura Dinâmica: O fluxo de perguntas é definido inteiramente pelas linhas e colunas de uma planilha.
Múltiplos Tipos de Resposta: Suporte nativo para escolha única (botões) e múltipla escolha (checkboxes).
Navegação Inteligente: Botão "Voltar" com sistema de pilha (stack), permitindo que o usuário altere o caminho percorrido.
Estilização "What You See Is What You Get": O motor captura cores, tamanhos de fonte e negritos diretamente da formatação das células do Google Sheets.
Relatórios em Tempo Real: Todas as respostas são salvas automaticamente em uma aba de relatórios, pronta para exportação em CSV.
Hospedagem Gratuita: Roda 100% na infraestrutura do Google Cloud (Apps Script), sem custos de servidor.
🛠️ Estrutura do Projeto
O projeto é dividido em três camadas principais:
Backend (Código.gs): Processa a lógica de leitura da planilha, converte a formatação Rich Text em HTML e gerencia a gravação das respostas.
Frontend (Index.html): Interface de usuário (UI) responsiva e minimalista, construída em JavaScript vanila para máxima velocidade.
Database (Google Sheets): Onde a lógica de negócio reside.
Coluna ID: Identificador único da pergunta.
Coluna Texto: Pergunta formatada (aceita cores e estilos).
Coluna Opções: Alternativas separadas por vírgula.
Coluna Destinos: IDs para onde o usuário será levado após a resposta.
Coluna Tipo: Define o comportamento da UI (unica ou multipla).
📋 Como Instalar
Crie uma nova Google Sheet.
Vá em Extensões > Apps Script.
Copie os arquivos deste repositório para o editor do Google.
Configure as colunas da planilha conforme o modelo: ID | Texto | Opções | Destinos | Tipo.
Clique em Implantar > Nova Implantação.
Configure o acesso para "Qualquer pessoa" e execute como "Eu".
Copie a URL gerada e pronto!
💡 Aplicações
Embora focado em Soluções Baseadas na Natureza (SBN), o Fluxo Nativo é ideal para:
Diagnósticos técnicos de campo.
Questionários de viabilidade de projetos.
Automação de processos de decisão em equipes pequenas.
Ferramentas educativas interativas.
Autor
Desenvolvido como uma solução ágil para transformar dados estáticos em experiências interativas de decisão.
Dica: No GitHub, você pode adicionar uma imagem do seu bot ou um print da sua planilha para ilustrar ainda mais.
