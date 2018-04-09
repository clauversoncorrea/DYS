app.controller("template", function ($scope, $http, $rootScope) {

    var obj = g$.urlObj(location.href);

    var queryCabecalho = "SELECT c.razao nome, s.sexo, r.codigo_sus raca_cor, date_format(c.nascimento, '%d/%m/%Y') nascimento, c.cbrEndereco, cbrBairro, cbrCep, residencial tel1, carterinha cartao_sus, u.nome unidade_solicitante, date_format(e.data, '%d/%m/%Y') data_solicitacao, u.cnes" +
        " FROM " + obj.banco.trim() + ".encaminhamento e " +
        "left join " + obj.banco.trim() + ".unidade_saude u on u.id = e.unidade_id " +
        "left join " + obj.banco.trim() + ".cliente_fornecedor c on c.id = e.paciente_id " +
        "left join " + obj.banco.trim() + ".sexo s on s.id = c.sexo_id " +
        "LEFT JOIN " + obj.banco.trim() + ".raca_cor r on r.id = c.cor_raca_id WHERE e.id = '" + obj.encaminhamento.trim() + "'";
    g$.queryTemplate(queryCabecalho, function (data) {
        // Funcao para carregar a query
        if (data.length > 0) {
            $scope.encaminhamento = data[0];
        }
        var query = "select e.especialidade, e.codigo " +
            "from " + obj.banco.trim() + ".encaminhamento en " +
            "left join " + obj.banco.trim() + ".especialidade e on e.id = en.especialidade_id " +
            "where e.tipo_guia_id = 1 and " +
            "concat(en.paciente_id,'-', en.senha) = (SELECT concat(paciente_id,'-', senha) FROM " + obj.banco.trim() + ".encaminhamento where id = '" + obj.encaminhamento.trim() + "');";

        g$.queryTemplate(query, function (data) {
            if (data.length > 0) {
                data.forEach(function (v, i) {
                    var id = removeAcento(v.especialidade).split(" ").join("")
                    if ($("#" + id)[0]) $("#" + id)[0].value = "X";
                    else {
                        var rowsTable = $("#outrosexames")[0].rows;
                        for(var i=1; i<rowsTable.length; i++) {
                            if(!rowsTable[i].classList.contains("preenchida")) {
                                rowsTable[i].querySelectorAll("input")[0].value = v.codigo;
                                rowsTable[i].querySelectorAll("input")[1].value = v.especialidade;
                                rowsTable[i].classList.add("preenchida")
                                break;
                            }
                        }
                    }
                });
            }
        });
    });

    function removeAcento(str) {

        com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";

        sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
        novastr = "";
        for (i = 0; i < str.length; i++) {
            troca = false;
            for (a = 0; a < com_acento.length; a++) {
                if (str.substr(i, 1) == com_acento.substr(a, 1)) {
                    novastr += sem_acento.substr(a, 1);
                    troca = true;
                    break;
                }
            }
            if (troca == false) {
                novastr += str.substr(i, 1);
            }
        }

        var er = /[^a-z0-9]/gi;
		return novastr.replace(er, "");
    }
});