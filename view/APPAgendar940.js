app.controller('APPAgendar940', function ($scope){ g$.configTela('APP Agendar');g$.memo("memo | memoPermissao| 0 | '»user.perfil_id»' = '99'", true);g$.memo("memo | memoPermissao | 0", true);g$.alteraPropriedade("alteraPropriedade | 47975¦47976 | display | none| '»user.projeto_id»' = '3'", true);g$.memo("memo | memo50 | | '»user.perfil_id»' = '99'", true);g$.memo("memo | memoservico | | '»user.perfil_id»' = '99'", true);g$.alteraPropriedade("alteraPropriedade | 44102 | valor | »memo50» | '»memo50»' <> ''", true);g$.alteraPropriedade("alteraPropriedade | 44102  | disabled | true |  '»memo50»' <> ''", true);g$.carregaQuery("carregaQuery ¦ 2204 | CALL »user.banco».valida_agendamento('»memo50»','»memo49»') | memo102¦memo100¦memo101¦memo22 | '»user.projeto_id»' = '3'¦ '»memo50»' <> '' | toast", true);$("[data-id=47978]")[0].addEventListener("change", g$.limparElementos.bind(null, "limparElementos | 44114 ¦ 44116 ¦ 44121 ¦ 47980 ¦ 44112", false), false);$("[data-id=47980]")[0].addEventListener("change", g$.limparElementos.bind(null, "limparElementos | 44114 ¦ 44116 ¦ 44121¦ 44112", false), false);$("[data-id=47978]")[0].addEventListener("change", g$.alteraPropriedade.bind(null, "alteraPropriedade | 47976 | display | none | '»47978»' = '0'", false), false);$("[data-id=47978]")[0].addEventListener("change", g$.alteraPropriedade.bind(null, "alteraPropriedade | 47976 | display | block| '»47978»' <> '0'", false), false);$("[data-id=47978]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo15 |  WHERE  | '»47978»' = '0'", false), false);$("[data-id=47980]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo15 | LEFT JOIN »user.banco».plano_especialidade pe ON pe.especialidade_id = a.especialidade_id WHERE pe.plano_id = '»47980»' and | '»47978»' <> '0'", false), false);$("[data-id=44114]")[0].addEventListener("change", g$.carregaQuery.bind(null, "carregaQuery | SELECT IF(COUNT(*)>0,'»memo101»', '') FROM »user.banco».unidade_especialidade WHERE unidade_id = '»memo101»' AND especialidade_id = SPLIT('»44114»','-',1) | memo104 | '»44112»' <> '4' ¦ '»memo49»' = ''", false), false);$("[data-id=44114]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo104 | »memo49» | '»memo49»' <> ''", false), false);$("[data-id=44102]")[0].addEventListener("change", g$.limparElementos.bind(null, "limparElementos | 44114 ¦ 44116 ¦  44121 ¦ 44112", false), false);$("[data-id=44107]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 44110 | disabled | true | '»44107»' = '1'", false), false);$("[data-id=44107]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 44110 | disabled | false | '»44107»' = '0'", false), false);$("[data-id=44110]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 44107 | disabled | true | '»44110»' = '1'", false), false);$("[data-id=44110]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 44107 | disabled | false | '»44110»' = '0'", false), false);$("[data-id=44112]")[0].addEventListener("change", g$.alteraPropriedade.bind(null, "alteraPropriedade | 44114| foco |", false), false);$("[data-id=44102]")[0].addEventListener("change", g$.carregaQuery.bind(null, "carregaQuery ¦ 12720 | CALL »user.banco».valida_agendamento('»44102»','') | memo102¦memo100¦memo101¦memo22 | '»user.projeto_id»' = '3' | toast", false), false);$("[data-id=44112]")[0].addEventListener("change", g$.limparElementos.bind(null, "limparElementos | 44114 ¦ 44116 ¦  44121", false), false);$("[data-id=44114]")[0].addEventListener("change", g$.limparElementos.bind(null, "limparElementos ¦11444 | 44116 ¦ 44121", false), false);$("[data-id=44116]")[0].addEventListener("change", g$.limparElementos.bind(null, "limparElementos | 6176 ¦ 6176", false), false);$("[data-id=44125]")[0].addEventListener("click", g$.carregaQuery.bind(null, "carregaQuery ¦ 11456 | SELECT nome, CONCAT(endereco,', ', COALESCE(numero,'')) FROM »user.banco».unidade_saude WHERE id = '»44116»' | memo3 ¦ memo2 | '»44116»' <> ''", false), false);$("[data-id=44125]")[0].addEventListener("click", g$.mensagem.bind(null, "mensagem | Nenhuma Unidade Selecionada | '»44116»' = ''", false), false);$("[data-id=44124]")[0].addEventListener("click", g$.mensagem.bind(null, "mensagem | NENHUM PACIENTE INFORMADO | '»44102»' = ''", false), false);$("[data-id=44124]")[0].addEventListener("click", g$.memo.bind(null, "memo ¦ 11463 | memo10 | 0", false), false);$("[data-id=44112]")[0].addEventListener("change", g$.alteraPropriedade.bind(null, "alteraPropriedade | 44116 | disabled | true | '»44112»'= '4'", false), false);$("[data-id=44112]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo5 | SELECT distinct CONCAT(e.especialidade, '-',COALESCE(c.razao,'')) especialidade, CONCAT(e.id,'-',COALESCE(c.id,0)) id from »user.banco».agenda_dow a LEFT JOIN »user.banco».especialidade e ON e.id = a.especialidade_id LEFT JOIN »user.banco».cliente_fornecedor c ON c.id = a.medico_id and (c.medico=1 OR c.enfermeiro =1) »memo15» e.ativo = 1 and e.servico_id = 1 AND IF('»memo49»' <> '', a.unidade_id='»memo49»',1=1) | '»44112»'= '1'", false), false);$("[data-id=44112]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo5 | SELECT distinct CONCAT(e.especialidade, '-',COALESCE(c.razao,'')) especialidade, CONCAT(e.id,'-',COALESCE(c.id,0)) id FROM »user.banco».atendimento at, »user.banco».agenda a LEFT JOIN »user.banco».especialidade e ON e.id = a.especialidade_id LEFT JOIN »user.banco».cliente_fornecedor c ON c.id = a.medico_id and (c.medico=1 OR c.enfermeiro =1) WHERE a.id = at.agenda_id AND COALESCE(aguardar_retorno,0) = 1 AND a.cliente_fornecedor_id = '»44102»' AND IF('»memo49»' <> '', a.unidade_id='»memo49»',1=1) | '»44112»'= '4'", false), false);$("[data-id=44112]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo5 | SELECT distinct e.especialidade especialidade, e.id id from »user.banco».agenda_dow a LEFT JOIN »user.banco».especialidade e ON e.id = a.especialidade_id LEFT JOIN »user.banco».cliente_fornecedor c ON c.id = a.medico_id and (c.medico=1 OR c.enfermeiro =1) »memo15» e.ativo = 1 and e.servico_id = 2 AND IF('»memo49»' <> '', a.unidade_id='»memo49»',1=1) | '»44112»'= '2'", false), false);$("[data-id=44112]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo5 | SELECT distinct e.especialidade especialidade, e.id id from »user.banco».agenda_dow a LEFT JOIN »user.banco».especialidade e ON e.id = a.especialidade_id LEFT JOIN »user.banco».cliente_fornecedor c ON c.id = a.medico_id and (c.medico=1 OR c.enfermeiro =1) WHERE e.ativo = 1 and e.servico_id = 5  AND IF('»memo49»' <> '', a.unidade_id='»memo49»',1=1) | '»44112»'= '5'", false), false);$("[data-id=44112]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo5 | SELECT distinct distinct CONCAT(e.especialidade, '-',COALESCE(c.razao,'')) especialidade, CONCAT(e.id,'-',COALESCE(c.id,0)) id from »user.banco».agenda_dow a LEFT JOIN »user.banco».especialidade e ON e.id = a.especialidade_id LEFT JOIN »user.banco».cliente_fornecedor c ON c.id = a.medico_id AND (c.medico=1 OR c.enfermeiro =1) WHERE e.ativo = 1 and e.servico_id = '»44112»' AND IF('»memo49»' <> '', a.unidade_id='»memo49»',1=1) | '»44112»'= '6' OU '»44112»'= '3'", false), false);$("[data-id=44114]")[0].addEventListener("change", g$.carregaQuery.bind(null, "carregaQuery ¦16386| CALL »user.banco».valida_especialidade_medico('»44102»','','','»44114»', '»memo49»', '»memoPermissao»') | memoMsg ¦ memoProsseguir", false), false);});