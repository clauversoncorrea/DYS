app.controller("template", function ($scope, $http, $rootScope) {

    var obj = g$.urlObj(location.href);

    // Funcao para carregar a query
    var query = "select IF(COALESCE(a.terceiro,0) = 0, p.razao, null) paciente,ag.data, at.hora_inicio " +
        "FROM " + obj.banco.trim() + ".atestado_atendimento a " +
        "LEFT JOIN " + obj.banco.trim() + ".atendimento at ON at.id = a.atendimento_id " +
        "LEFT JOIN " + obj.banco.trim() + ".agenda ag ON ag.atendimento_id = at.id " +
        "LEFT JOIN " + obj.banco.trim() + ".cliente_fornecedor p ON p.id = ag.cliente_fornecedor_id " +
        "WHERE a.id = '" + obj.atestado.trim() + "'";
    g$.queryTemplate(query, function (data) {
        if (data.length > 0) {
            $scope.atestado = data[0];
            if(data[0].data && data[0].data != "") {
                PreencherData.classList.add("play-none");
                dataFormatada.classList.remove("play-none");
            } 
            else {
                PreencherData.classList.remove("play-none");
                dataFormatada.classList.add("play-none");
            }
            //    var query7 = "select * from " + obj.banco.trim() + ".empresa where id =  " + $scope.rps.empresa_id + " LIMIT 1";
            //  g$.queryTemplate(query7, function (data) {
            //    if (data.length > 0) {
            //      $scope.empresa = data[0];
            //}
            //        });
        }

    });

    $scope.nomeMes = new Array(12), $scope.nomeMes[0] = "Janeiro", $scope.nomeMes[1] = "Fevereiro", $scope.nomeMes[2] = "Março", $scope.nomeMes[3] = "Abril", $scope.nomeMes[4] = "Maio", $scope.nomeMes[5] = "Junho", $scope.nomeMes[6] = "Julho", $scope.nomeMes[7] = "Agosto", $scope.nomeMes[8] = "Setembro", $scope.nomeMes[9] = "Outubro", $scope.nomeMes[10] = "Novembro", $scope.nomeMes[11] = "Dezembro"

});