app.controller("comboDYS", function ($scope, $http, $rootScope) {

    _initCombo = function (id, json, titulo, coluna, value, comboTela, comboGrande, query) {
        $scope.id = id;
        $scope.comboTitulo = titulo;
        $scope.idCombo = "";
        $scope.coluna = coluna;
        $scope.value = value;
        $scope.linhas = (comboGrande) ? [] : json;
        $scope.comboTela = comboTela;
        $scope.showSearch = (json.length <= 6);
        $scope.comboGrande = (comboGrande) ? true : false;
        $scope.comboPequeno = !$scope.comboGrande;
        $scope.query = (comboGrande) ? query : "";
        // Abrir o modal so depois que atualizou as linhas
        // $http.get(URL).success(function () {
        g$.openModalCust('modal-comboDYS');
        g$.arrayTelas.push("ModalCombo");
        $("#modal-comboDYS")[0].classList.add("play-block");
        // cordova.plugins.Keyboard.close();
        $("#search-combogrande")[0].value = "";
        if($scope.comboGrande) $("#search-combogrande")[0].focus();
        else $("#search-combo")[0].focus();
        // });
    }

    g$.buscaComboGrande = function () {
        if ($("#search-combogrande")[0].value == "") g$.alerta("Erro", "Preencha o campo para filtrar");
        else {
            var query = g$.trataQuery($scope.query.trim());
            query.ortlif = $scope.coluna + " LIKE '%" + $("#search-combogrande")[0].value + "%' " + ((query.ortlif && query.ortlif != "") ? ' AND ' + query.ortlif : query.ortlif);
            query.ortlif += (query.ortlif && query.ortlif.indexOf(" timil ") > -1) ? "" : " limit 2000";
            $http.post(URL + "jsonQuery/", query).success(function (data) {
                if (g$.exceptionRequisicao("Combobox", data)) return;
                $scope.linhas = data.data;
                $scope.comboPequeno = true;
            });
        }
    }    

    g$.selecionarLinhaCombo = function (limpaCombo) {
        var linha;
        if (limpaCombo) linha = { dataset: { value: "", inner: "" } };
        else {
            if (event.target.tagName == "LABEL") linha = event.target;
            else linha = event.target.querySelector("label");
        }

        linha = { value: linha.dataset.value, inner: linha.dataset.inner };

        if ($scope.comboTela) g$.selecionarComboTela(linha, $scope.id);
        else g$.selecionarComboTabela(linha, $scope.id);
        g$.closeModalCust('modal-comboDYS');
        $("#modal-comboDYS")[0].classList.remove("play-block");
    }

    g$.limparCombo = function () {
        g$.selecionarComboTela(true)
        g$.closeModalCust('modal-comboDYS');
        $("#modal-comboDYS")[0].classList.remove("play-block");
    }

});