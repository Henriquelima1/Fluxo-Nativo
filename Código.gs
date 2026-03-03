function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Meu Mapa de Decisão')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Busca os dados da planilha para o bot
function buscarDados() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getDataRange();
  const richTexts = range.getRichTextValues();
  const rows = range.getValues();
  const mapa = {};
  
  for (let i = 1; i < rows.length; i++) {
    let id = String(rows[i][0]).toLowerCase().trim();
    if (!id) continue;

    // Converte a célula de TEXTO (coluna B) em HTML
    let textoHtml = richTextToHtml(richTexts[i][1]); 
    let opcoesHtml = extrairOpcoesFormatadas(richTexts[i][2]);

    mapa[id] = { 
      texto: textoHtml, 
      opcoes: opcoesHtml, 
      destinos: String(rows[i][3]).split(';').map(s => s.trim()), 
      tipo: String(rows[i][4]).toLowerCase().trim() 
    };
  }
  return mapa;
}

// Função auxiliar que transforma o estilo do Sheets em HTML
function richTextToHtml(richText) {
  let html = "";
  let runs = richText.getRuns();
  runs.forEach(run => {
    let style = run.getTextStyle();
    let texto = run.getText().replace(/\n/g, '<br>');
    let css = `color:${style.getForegroundColor()}; font-size:${style.getFontSize()}pt;`;
    if (style.isBold()) css += "font-weight:bold;";
    if (style.isItalic()) css += "font-style:italic;";
    if (style.isUnderline()) css += "text-decoration:underline;";
    
    html += `<span style="${css}">${texto}</span>`;
  });
  return html;
}

function extrairOpcoesFormatadas(richTextValue) {
  let textoCompleto = richTextValue.getText();
  let partes = textoCompleto.split(';');
  let runs = richTextValue.getRuns();
  let resultado = [];
  let charAtual = 0;

  partes.forEach(p => {
    let textoOpcao = p.trim();
    // Encontra onde a opção começa no texto original
    let inicioOpcao = textoCompleto.indexOf(p, charAtual);
    let fimOpcao = inicioOpcao + p.length;
    charAtual = fimOpcao;

    let htmlAcumulado = "";

    // Filtra quais 'runs' pertencem a este intervalo da opção
    runs.forEach(run => {
      let runInicio = run.getStartIndex();
      let runFim = run.getEndIndex();

      // Verifica se a 'run' está dentro do texto desta opção específica
      if (runFim > inicioOpcao && runInicio < fimOpcao) {
        let s = run.getTextStyle();
        let textoParcial = run.getText();
        
        // Ajusta o texto da run caso ela comece antes ou termine depois da vírgula
        let corteInicio = Math.max(0, inicioOpcao - runInicio);
        let corteFim = Math.min(textoParcial.length, fimOpcao - runInicio);
        let textoFinal = textoParcial.substring(corteInicio, corteFim);

        if (textoFinal.trim() !== "") {
          let css = `color:${s.getForegroundColor()}; font-size:${s.getFontSize()}pt;`;
          if (s.isBold()) css += "font-weight:bold;";
          if (s.isItalic()) css += "font-style:italic;";
          htmlAcumulado += `<span style="${css}">${textoFinal}</span>`;
        }
      }
    });
    
    resultado.push(htmlAcumulado || textoOpcao); // Fallback para texto simples se falhar
  });
  
  return resultado;
}

// Salva a resposta final no final da planilha (ou em outra aba)
function salvarResposta(dados) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheetRelatorio = ss.getSheetByName("Relatorio");
  if(!sheetRelatorio) sheetRelatorio = ss.insertSheet("Relatorio");
  
  sheetRelatorio.appendRow([new Date(), JSON.stringify(dados)]);
}
