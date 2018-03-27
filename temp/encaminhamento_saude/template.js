app.controller("template", function ($scope, $http, $rootScope) {

    var obj = g$.urlObj(location.href);

    // Funcao para carregar a query
    var query = "SELECT c.prontuario, c.razao nome, c.sexo_id, r.raca_cor, date_format(c.nascimento, '%d/%m/%Y') nascimento, c.cbrEndereco, c.cbrNumero, cbrBairro, cbrCep, residencial tel1, celular tel2 ,whatsapp tel3 , rg, cpf, carterinha cartao_sus, nome_pai, nome_mae,u.nome unidade_solicitante, date_format(e.data, '%d/%m/%Y') data_solicitacao,es.especialidade especialidade_solicitada " +
    " FROM saude.encaminhamento e " +
    "left join saude.especialidade es on es.id = e.especialidade_id " +
    "left join saude.unidade_saude u on u.id = e.unidade_id " +
    "left join saude.cliente_fornecedor c on c.id = e.paciente_id " + 
    "LEFT JOIN saude.raca_cor r on r.id = c.cor_raca_id WHERE e.id = '" + obj.encaminhamento.trim() + "'";
    g$.queryTemplate(query, function (data) {
        if (data.length > 0) {
            $scope.encaminhamento = data[0];
            //    var query7 = "select * from " + obj.banco.trim() + ".empresa where id =  " + $scope.rps.empresa_id + " LIMIT 1";
            //  g$.queryTemplate(query7, function (data) {
            //    if (data.length > 0) {
            //      $scope.empresa = data[0];
            //}
            //        });
        }

    });

});