app.controller("template", function ($scope, $http, $rootScope) {

	var obj=g$.urlObj(location.href);
    
    // Funcao para carregar a query
    var query="SELECT CONCAT(p.descricao,'________ TOMAR ', dosagem, ' ', u.unidade, ' de ', r.frequencia,'/', r.frequencia, 'h por ', SUM(r.duracao),' dias') receita "+ 
"FROM "+obj.banco.trim()+".receituario r " +
"LEFT JOIN "+obj.banco.trim()+".produto p on p.id = r.remedio_id " +
"LEFT JOIN "+obj.banco.trim()+".unidade_remedio u on u.id = p.unidade_id "+
" where atendimento_id = "+obj.id+" AND not isnull(p.id) group by p.descricao";
    g$.queryTemplate(query, function (data) {
        $scope.receituario = data;

    });
	
});
