app.controller("template", function ($scope, $http, $rootScope) {

    var obj = g$.urlObj(location.href);

    // Funcao para carregar a query
    var query = "SELECT CONCAT(p.descricao,IF ( u.id in(4),'___________          ',CONCAT('___________          ', dosagem,' ',IF(p.descricao LIKE '%gotas%','GOTAS',IF(u.id IN (6 , 1), ' ML', u.unidade)))), ' de ', r.frequencia,'/', r.frequencia, 'h por ', SUM(r.duracao),' dias.',COALESCE(CONCAT(' Posologia: ', MAX(r.posologia)),'')) receita " +
        "FROM " + obj.banco.trim() + ".receituario r " +
        "LEFT JOIN " + obj.banco.trim() + ".produto p on p.id = r.remedio_id " +
        "LEFT JOIN " + obj.banco.trim() + ".unidade_remedio u on u.id = p.unidade_id " +
        " where atendimento_id = " + obj.id + " AND not isnull(p.id) group by p.descricao";
    g$.queryTemplate(query, function (data) {
        $scope.receituario = data;

        var query2 = " SELECT p.razao as paciente, m.razao as medico, COALESCE(m.crm) crm, e.especialidade " +
            " FROM " + obj.banco.trim() + ".atendimento a " +
            " LEFT JOIN " + obj.banco.trim() + ".cliente_fornecedor m on m.id = a.medico_id " +
            " LEFT JOIN " + obj.banco.trim() + ".agenda ag on ag.id = a.agenda_id " +
            " LEFT JOIN " + obj.banco.trim() + ".cliente_fornecedor p on p.id = ag.cliente_fornecedor_id " +
            " LEFT JOIN " + obj.banco.trim() + ".especialidade e on e.id = ag.especialidade_id " +
            " WHERE a.id = " + obj.id;

        g$.queryTemplate(query2, function (data) {
            $scope.nome = data[0];

        });

    });

});
