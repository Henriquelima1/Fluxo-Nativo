# 🌿 Fluxo Nativo

**Fluxo Nativo** é um motor de decisões interativo e *serverless*, desenvolvido para transformar árvores de decisão complexas em interfaces de chat simples e intuitivas. 

Originalmente criado para projetos de **SBN (Soluções Baseadas na Natureza)**, o sistema permite que qualquer pessoa gerencie fluxos lógicos e estilização visual diretamente pelo **Google Sheets**, sem precisar tocar no código.

---

## 🚀 Funcionalidades

- **Gestão No-Code:** Edite perguntas, opções e destinos diretamente em uma planilha Google.
- **Estilização Dinâmica (Rich Text):** O sistema identifica cores, tamanhos de fonte e negritos aplicados nas células da planilha e os replica no front-end.
- **Tipos de Pergunta Híbridos:** Suporte para **Escolha Única** (botões diretos) e **Múltipla Escolha** (checkboxes com confirmação).
- **Navegação com Histórico:** Inclui botão **"Voltar"** inteligente, que rastreia o caminho exato percorrido pelo usuário através de uma pilha (*stack*).
- **Relatórios Automatizados:** As respostas são salvas em tempo real em uma aba de relatórios, facilitando a exportação para CSV/Excel.
- **Custo Zero:** Hospedagem gratuita via Google Apps Script (infraestrutura Google Cloud).

---

## 🛠️ Estrutura do Projeto

O projeto utiliza a arquitetura de **Web App** do Google Apps Script:

1.  **Backend (`Código.gs`):** 
    *   Processa a lógica de leitura da planilha.
    *   Converte objetos `RichTextValue` do Google Sheets em HTML/CSS.
    *   Gerencia a persistência de dados no banco (planilha).
2.  **Frontend (`Index.html`):** 
    *   Interface responsiva (Mobile First).
    *   Lógica de renderização dinâmica baseada no tipo de pergunta.
    *   Gerenciamento de estado local para o botão "Voltar".
3.  **Banco de Dados (Google Sheets):**
    *   **Coluna ID:** Identificador único da etapa (ex: `inicio`, `pergunta_2`).
    *   **Coluna Texto:** O conteúdo da pergunta (formatado visualmente na planilha).
    *   **Coluna Opções:** Alternativas separadas por vírgula.
    *   **Coluna Destinos:** IDs para onde o fluxo deve seguir.
    *   **Coluna Tipo:** Define o comportamento (`unica` ou `multipla`).

---

## 📋 Configuração e Instalação

1.  **Planilha:** Crie uma Google Sheet com o cabeçalho: `ID | Texto | Opções | Destinos | Tipo`.
2.  **Scripts:** 
    *   Abra `Extensões` > `Apps Script`.
    *   Adicione o conteúdo de `Código.gs`.
    *   Crie um arquivo HTML chamado `Index` e adicione o conteúdo de `Index.html`.
3.  **Implantação:**
    *   Clique em `Implantar` > `Nova Implantação`.
    *   Selecione **App da Web**.
    *   Executar como: **Eu**.
    *   Quem tem acesso: **Qualquer pessoa**.
4.  **Uso:** Copie a URL gerada e compartilhe.

---

## 💡 Por que "Fluxo Nativo"?

O nome remete tanto à **natureza** (foco original em SBN) quanto ao conceito de algo que nasce pronto para o sistema. É uma solução leve, que não depende de frameworks pesados e roda nativamente no ecossistema de produtividade mais usado do mundo.

---

### Autor
Desenvolvido como uma solução de automação ágil para diagnósticos e mapas de decisão.

