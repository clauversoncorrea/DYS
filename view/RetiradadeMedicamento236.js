app.controller('RetiradadeMedicamento236', function ($scope){ g$.configTela('Retirada de Medicamento');g$.carregaQuery("carregaQuery ¦2024| SELECT unidade_id memo90, unidade_id memo11, senha_atual FROM »user.banco».cliente_fornecedor WHERE node_usuario_id = »user.id» | memo90 ¦ memo11 ¦ 55694", true);$("[data-id=54688]")[0].addEventListener("click", g$.openModal.bind(null, "openModal | Receita Externa | RECEITAEXTERNA | 1080 | fullscreen", false), false);$("[data-id=6692]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo1 | =»6692» | \"»6692»\" <> \"\"", false), false);$("[data-id=6692]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo1 | >0 | \"»6692»\" = \"\"", false), false);$("[data-id=6706]")[0].addEventListener("click", g$.carregaQuery.bind(null, "carregaQuery ¦ 912 | call »user.banco».valida_retirada_medicamento('»g$.tblReceituariosRetiradaID»',»memo90») | memo9 ¦ memo10 ¦ memo11 ¦ memo12 ¦ memo13 ¦ memo14 ¦ memo15 ¦ memo16 | | alert", false), false);$("[data-id=55694]")[0].addEventListener("null", g$.carregaQuery.bind(null, "carregaQuery | select senha_atual FROM »user.banco».cliente_fornecedor WHERE id = »user.id» | 9137", false), false);$("[data-id=55695]")[0].addEventListener("click", g$.carregaQuery.bind(null, "carregaQuery ¦ 16306| call »user.banco».proxima_senha_farmacia(»user.id») | memo14 ¦ 55694 ¦ 6692 ¦ memo64 ||alert", false), false);$("[data-id=55696]")[0].addEventListener("click", g$.carregaQuery.bind(null, "carregaQuery ¦ 16309 | call »user.banco».repete_senha_farmacia(»user.id») | memo14 ¦ 55694 ¦ 6692 ¦ memo64 ||alert", false), false);$("[data-id=55718]")[0].addEventListener("click", g$.memo.bind(null, "memo | memo201 | ", false), false);$("[data-id=55718]")[0].addEventListener("click", g$.memo.bind(null, "memo | memo203| ", false), false);$("[data-id=55718]")[0].addEventListener("click", g$.memo.bind(null, "memo | memo204| ", false), false);$("[data-id=55718]")[0].addEventListener("click", g$.memo.bind(null, "memo | memo215 | ", false), false);$("[data-id=55718]")[0].addEventListener("click", g$.memo.bind(null, "memo | memo31 | ", false), false);$("[data-id=55718]")[0].addEventListener("click", g$.memo.bind(null, "memo | memo30 | ", false), false);$("[data-id=5676]")[0].addEventListener("click", g$.atualizarTabela.bind(null, "atualizarTabela | 55704", false), false);$("[data-id=5677]")[0].addEventListener("click", g$.atualizarTabela.bind(null, "atualizarTabela | 6695", false), false);$("[data-id=6692]")[0].addEventListener("change", g$.atualizarTabela.bind(null, "atualizarTabela | 6695", false), false);$("[data-id=55718]")[0].addEventListener("click", g$.carregaQuery.bind(null, "carregaQuery ¦16343| SELECT f.id, f.paciente_id paciente, 9 local_id, 5676 onclick_id FROM »user.banco».fila_chamada f WHERE f.local_id = 9 AND COALESCE(f.encaminhado,0)=0 AND senha = '»55694»' | memo201 ¦ memo204 ¦ memo203 ¦ memo215", false), false);});