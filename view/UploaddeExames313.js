app.controller('UploaddeExames313', function ($scope){ g$.configTela('Upload de Exames');g$.atualizarTabela("atualizarTabela | 8443", true);$("[data-id=8437]")[0].addEventListener("click", g$.mensagem.bind(null, "mensagem | Nenhum Arquivo Escolhido | '»8439»' = ''", false), false);$("[data-id=8437]")[0].addEventListener("click", g$.mensagem.bind(null, "mensagem | Nenhum Atendimento Selecionado | '»g$.tblExamesID»' = '' ", false), false);$("[data-id=8437]")[0].addEventListener("click", g$.carregaQuery.bind(null, "carregaQuery ¦ 2003 | UPDATE »user.banco».atendimento SET resultado_exame = '»8439»' WHERE id = '»g$.tblExamesID»' | |'»g$.tblExamesID»' <> '' ¦ '»8439»' <> ''", false), false);});