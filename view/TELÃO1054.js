app.controller('TELÃO1054', function ($scope){ g$.configTela('TELÃO');g$.memo("memo | memo40 |", true);g$.memo("memo | memo1 | 1", true);g$.carregaQuery("carregaQuery | SELECT GROUP_CONCAT(noticia SEPARATOR '. . . . . . . . . . . . .') FROM saude.noticia WHERE ativo=1|53788", true);g$.memo("memo | memo43 |", true);g$.atualizarBloco("atualizarBloco | 53692", true);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53458¦53460|size|50px", false), false);$("[data-id=53481]")[0].addEventListener("click", g$.popClose.bind(null, "popClose", false), false);$("[data-id=53480]")[0].addEventListener("click", g$.carregaQuery.bind(null, "carregaQuery | SELECT descricao_chamada,senha, local FROM »user.banco».fila_chamada f LEFT JOIN »user.banco».local l ON l.id = f.local_id WHERE local_id in (0»memo40») AND COALESCE(quantidade_chamado,0)>0 ORDER BY ordem DESC LIMIT 1 | 53453 ¦ 53451 ¦ 53705", false), false);$("[data-id=53548]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53441 ¦ 53550 ¦ 53548 | display | ¦ ¦ none", false), false);$("[data-id=53550]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53441 ¦ 53550 ¦ 53548 | display | none ¦ none ¦ ", false), false);$("[data-id=54522]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53789| display|block", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53789| display|none", false), false);$("[data-id=54522]")[0].addEventListener("click", g$.showHide.bind(null, "showHide | 54527¦54522", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.showHide.bind(null, "showHide | 54522¦54527", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade| 53547| removeClasse | l6", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53451 |size|90px", false), false);$("[data-id=54522]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53451 |size|80px", false), false);$("[data-id=54522]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53453 |size|60px", false), false);$("[data-id=54522]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53705 |size|30px", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53451 |size|100px", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53453 |size|90px", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53705 |size|50px", false), false);$("[data-id=53472]")[0].addEventListener("change", g$.memo.bind(null, "memo | memo40 | »memo40», »53472» | '»53472»' <> ''", false), false);$("[data-id=53472]")[0].addEventListener("change", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53473| fundo|#F0F8FF| '»53472»'<>''", false), false);$("[data-id=53480]")[0].addEventListener("click", g$.atualizarBloco.bind(null, "atualizarBloco | 53692", false), false);$("[data-id=53472]")[0].addEventListener("change", g$.atualizarBloco.bind(null, "atualizarBloco | 53692", false), false);$("[data-id=53472]")[0].addEventListener("change", g$.carregaQuery.bind(null, "carregaQuery | SELECT descricao_chamada,senha, local, ordem, CONCAT('Senha ', senha, ' em ', descricao_chamada,'.. Senha ', senha, ' em ', descricao_chamada) as descricao FROM »user.banco».fila_chamada f LEFT JOIN »user.banco».local l ON l.id = f.local_id WHERE local_id in (0»memo40») AND COALESCE(quantidade_chamado,0)>0 ORDER BY ordem DESC LIMIT 1 | 53453 ¦ 53451 ¦ 53705 ¦ memo43 ¦ memo42 ", false), false);$("[data-id=54522]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade¦15544 | 53444| removeClasse | l12 |", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade¦15544 | 53444| removeClasse | l6", false), false);$("[data-id=53472]")[0].addEventListener("change", g$.atualizarBloco.bind(null, "atualizarBloco | 53470 | ||'»memo40»' <> ''", false), false);$("[data-id=54522]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade¦15557 | 53445| removeClasse | l6 |", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53444| addClasse | l12", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade| 53445| removeClasse | l12", false), false);$("[data-id=54522]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade¦15572 | 53547| removeClasse | l6 |", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade | 53445| addClasse | l6", false), false);$("[data-id=54527]")[0].addEventListener("click", g$.alteraPropriedade.bind(null, "alteraPropriedade¦15574 | 53547| removeClasse | l12", false), false);});