app.controller('AtendimentoMobile1093', function ($scope){ g$.configTela('Atendimento Mobile');g$.onClick("onClick | 55584", true);$("[data-id=55563]")[0].addEventListener("null", g$.carregaQuery.bind(null, "carregaQuery | select senha_atual FROM »user.banco».cliente_fornecedor WHERE id = »user.id» | 9137", false), false);$("[data-id=55562]")[0].addEventListener("null", g$.carregaQuery.bind(null, "carregaQuery | select senha_atual FROM »user.banco».cliente_fornecedor WHERE id = »user.id» | 9137", false), false);$("[data-id=55584]")[0].addEventListener("click", g$.carregaQuery.bind(null, "carregaQuery ¦ 16175 | select c.senha_atual, s.numero, c.id FROM »user.banco».cliente_fornecedor c LEFT JOIN »user.banco».sala s ON s.id = c.sala_id WHERE c.node_usuario_id = »user.id» |  55562 ¦ 55563 ¦ memo29", false), false);});