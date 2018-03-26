var ambiente = (location.href.indexOf("treinamento") > -1 ? "_treinamento" : (location.href.indexOf("homologacao") > -1) ? "_homologacao" : "");
var banco_node = "node" + ambiente;
var banco_saude = "saude" + ambiente;

var app2 = angular.module('myApp', ['ionic'])

    .run(function ($ionicPlatform, $rootScope) {

        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });

        $ionicPlatform.registerBackButtonAction(function (event) {
            if ($ionicHistory.currentStateName() === 'someStateName') {
                event.preventDefault();
            } else {
                $ionicHistory.goBack();
            }
        }, 100);

    });

const URL = "";
// const URL = "http://dys.net.br";
const syek = {
    select: "TCELES",
    update: "ETADPU",
    delete: "ETELED",
    insert: "TRESNI",
    call: "LLAC"
}
g$ = {
    email_telao: "guiche@s.com",
    senha_telao: "123"
};

g$.trataQuery = function (query, semFiltro) {
    
    var query = query.replace(/node./g, banco_node + ".");
    query = g$.tiraVirgulaEntreAspas(g$.keyWords(query).replace(/\%/g, "‰"))
    var queryTemp, tipo, sopmac, morf, morf_posicao, ortlif, arrmorf = [], arrfiltro = [], arrsopmac = [];

    if (!semFiltro && JSON.parse(localStorage.user).nao_saas == 1) { semFiltro = 1 }

    key = (g$.achaKey(query, " where ") > -1) ? " where " : (g$.achaKey(query, " group by ") > -1) ? " group by " : (g$.achaKey(query, " order by ") > -1) ? " order by " : (g$.achaKey(query, " limit ") > -1) ? " limit " : "";

    if (query.indexOf("insert ") > -1) {
        tipo = (query.indexOf("insert ignore") > -1) ? syek["insertg"] : syek["insert"];
        queryTemp = query.substring(query.indexOf(" into ") + 6, (query.indexOf(" select ") > -1) ? query.indexOf(" select ") : query.length).trim();
        queryTemp = queryTemp.substring(0, (queryTemp.indexOf(" values ") > -1) ? queryTemp.indexOf(" values ") : queryTemp.length).trim();
        morf = queryTemp.substring(0, (queryTemp.indexOf("(") > -1) ? queryTemp.indexOf("(") : queryTemp.length).trim();
        arrsopmac[0] = query.substring(query.indexOf("("), query.indexOf(")") + 1);
        arrsopmac[1] = query.substring((query.indexOf(" values ") > -1) ? query.indexOf(" values ") : query.indexOf(" select "), query.length);
        // if(JSON.parse(localStorage.user).banco = 'sas'){
        arrsopmac[0] = (morf.indexOf("node.") > -1 || morf.indexOf('.') == -1 || semFiltro) ? arrsopmac[0] : arrsopmac[0].substring(0, arrsopmac[0].lastIndexOf(")")) + ", id_projeto)";
        if ((typeof (arrsopmac[1]) == "string" && arrsopmac[1].indexOf('values ') > -1) || (typeof (arrsopmac[1]) != "string" && arrsopmac[1].oicini.indexOf('values ') > -1)) {
            // arrsopmac[1].forEach(function (e,i) {
            arrsopmac[1] = g$.separaMantendoParenteses(arrsopmac[1])
            for (var i = 0; i < arrsopmac[1].length; i++) {
                e = arrsopmac[1][i];
                valores = e;
                if (typeof (arrsopmac[1][0]) == "string") e = (morf.indexOf("node.") > -1 || morf.indexOf('.') == -1 || semFiltro) ? e : valores.substring(0, valores.lastIndexOf(')')) + ", " + JSON.parse(localStorage.user).projeto_id + valores.substring(valores.lastIndexOf(')'));
                else e.mif = (morf.indexOf("node.") > -1 || morf.indexOf('.') == -1 || semFiltro) ? e.mif : valores.mif.substring(0, valores.mif.lastIndexOf(')')) + ", " + JSON.parse(localStorage.user).projeto_id + valores.mif.substring(valores.mif.lastIndexOf(')'));
                // if (e.indexOf('select ', 8) > -1) {
                //     // var simple, sub;
                //     // simple = ortlif.split('select')[0];
                //     // sub = 'select' + ortlif.split('select')[1];
                //     // ortlif.sub = g$.trataQuery(sub);
                //     // ortlif.simple = simple;
                //     // ortlif = g$.pegaSelect(ortlif);
                //     var y = e.replace('( select ', '(select '),
                //         res = y.substring(y.indexOf("(select "), y.length), cont = 1, sair = 0;
                //     i = 1;
                //     while (i < res.length && sair == 0) {
                //         char = res.substring(i, i + 1);
                //         if (char == "(") cont = cont + 1
                //         else if (char == ")") cont = cont - 1
                //         if (cont == 0) sair = 1;
                //         else i++;
                //     }
                //     e = { oicini: y.split('(select ')[0] + "(", sub: g$.trataQuery(res.substring(res.indexOf("(select ") + 1, i)), mif: res.substring(i, res.length) }
                // }
                arrsopmac[1][i] = e;
            };
            arrsopmac[1] = arrsopmac[1].join(",");
            detalhes = arrsopmac[1].substring(arrsopmac[1].indexOf("(") + 1, arrsopmac[1].lastIndexOf(")"));
        } else if ((typeof (arrsopmac[1]) == "string" && arrsopmac[1].indexOf('select ') > -1) || (typeof (arrsopmac[1]) != "string" && arrsopmac[1].oicini.indexOf('select ') > -1)) {
            valores = (morf.indexOf("node.") == -1 && morf.indexOf('.') > -1 && !semFiltro) ? arrsopmac[1].replace(" from ", ", " + JSON.parse(localStorage.user).projeto_id + " from ") : arrsopmac[1];
            arrsopmac[1] = { oicini: "", sub: g$.trataQuery(valores), mif: "" };
            detalhes = "[Resultado de Pesquisa]";
        }
        // }
        return { tipo: tipo, sopmac: arrsopmac, morf: morf, ortlif: null, script: { usuario_id: JSON.parse(localStorage.user).id, data: new Date().toLocaleDateString().split("/").reverse().join("-"), hora: new Date().toLocaleTimeString(), banco: JSON.parse(localStorage.user).banco, projeto_id: JSON.parse(localStorage.user).projeto_id, descricao: "Usuário(a) " + JSON.parse(localStorage.user).nome + " inseriu um novo registro na tabela " + ((morf.indexOf(".") > -1) ? morf.substring(morf.indexOf(".") + 1) : morf), detalhes: "Campos inseridos: " + arrsopmac[0].substring(arrsopmac[0].indexOf("(") + 1, arrsopmac[0].lastIndexOf(")")) + ".\n Valores inseridos: " + detalhes } };
    }
    else if (query.indexOf("call ") > -1) {
        tipo = syek["call"];
        morf = query.substring(query.indexOf(" call ") + 6, query.indexOf("("));
        morf = (semFiltro && (morf.indexOf("node.") > -1 || morf.indexOf(".") == -1)) ? "node._old_" + morf.substring(morf.indexOf(".") + 1) : morf;
        sopmac = query.substring(query.indexOf("("));
        sopmac = g$.separaMantendoParenteses(sopmac);
        jsonQuery = { tipo: tipo, sopmac: sopmac, morf: morf, ortlif: null };
        // if ($rootScope.user.banco = 'sas'){
        jsonQuery = (semFiltro) ? jsonQuery : g$.colocaFiltroSaas(jsonQuery);
        //}        
        jsonQuery.script = { usuario_id: JSON.parse(localStorage.user).id, data: new Date().toLocaleDateString().split("/").reverse().join("-"), hora: new Date().toLocaleTimeString(), banco: JSON.parse(localStorage.user).banco, projeto_id: JSON.parse(localStorage.user).projeto_id };
        return jsonQuery;

    }
    else if (query.indexOf("update ") > -1) {
        var k = 0,
            arr = [];
        tipo = (query.indexOf("update ignore ") > -1) ? syek["updateg"] : syek["update"];
        morf = query.substring((query.indexOf("update ignore ") > -1) ? query.indexOf("update ignore") + 14 : query.indexOf("update") + 7, g$.achaKey(query, " set "));
        ortlif = g$.pegaFiltro(query, key);
        key = (key.length) ? g$.achaKey(query, key) : query.length;
        sopmac = query.substring(query.indexOf(" set ") + 5, key);
        sopmac = g$.separaMantendoParenteses(sopmac);
        arrmorf = g$.separaMorf(morf);

        for (var i = 0; i < sopmac.length; i++) {
            var novapalavra, a;
            arrsopmac[i] = {};
            if (typeof (sopmac[i]) == "string") {
                if (sopmac[i].split("=").length > 2) {
                    var b = sopmac[i].split("=");
                    b.splice(0, 1)
                    arrsopmac[i][sopmac[i].split("=")[0]] = b.join("=");
                }
                else arrsopmac[i][sopmac[i].split("=")[0]] = sopmac[i].split("=")[1];
            }
            else {
                a = sopmac[i].oicini.split("=");
                novapalavra = a[0].trim();
                a.splice(0, 1);
                sopmac[i].oicini = a.join("");
                arrsopmac[i][novapalavra] = sopmac[i];
            }
        }
        jsonQuery = { tipo: tipo, sopmac: arrsopmac, morf: arrmorf, ortlif: ortlif };
        // if ($rootScope.user.banco = 'sas'){
        jsonQuery = (semFiltro) ? jsonQuery : g$.colocaFiltroSaas(jsonQuery);
        //}  
        if (typeof (morf) == 'string') {
            if (typeof (ortlif) == 'string') {
                chave = (ortlif.indexOf("id = ") > -1) ? "id = " : (ortlif.indexOf("id= ") > -1) ? "id= " : (ortlif.indexOf("id=") > -1) ? "id=" : ""
                if (chave != "") {
                    inicio = ortlif.indexOf(chave) + chave.length;
                    fim = (ortlif.indexOf(" ", ortlif.indexOf(chave) + chave.length) > -1) ? ortlif.indexOf(" ", ortlif.indexOf(chave) + chave.length) : ortlif.length;
                    registro = " o registro " + ortlif.substring(inicio, fim);
                } else registro = " registros ";
            } else registro = " registros ";
            descricao = "Usuário(a) " + JSON.parse(localStorage.user).nome + " alterou " + registro + " da tabela " + ((morf.indexOf(".") > -1) ? morf.substring(morf.indexOf(".") + 1) : morf)
            detalhes = "Campos alterados: " + sopmac.join(',');
            if (detalhes.indexOf("[object Object]") > -1) {
                detalhes = ''
                arrsopmac.forEach(function (camp) {
                    if (typeof (camp[Object.keys(camp)[0]]) == 'string') {
                        detalhes = detalhes + ", " + Object.keys(camp)[0] + " = " + camp[Object.keys(camp)[0]]
                    } else {
                        tab = camp[Object.keys(camp)[0]].sub.morf[0].nome;
                        tab = ((tab.indexOf(".") > -1) ? tab.substring(tab.indexOf(".") + 1) : tab);
                        val = camp[Object.keys(camp)[0]].sub.sopmac[0];
                        detalhes = detalhes + ", " + Object.keys(camp)[0] + " = " + tab + "." + val;
                    }
                });
                detalhes = detalhes.substring(detalhes.indexOf(", ") + 2);
            }

        } else {
            tabelas = "";
            morf.forEach(function (tab) {
                tabelas = tabelas + ", " + ((tab.nome.indexOf(".") > -1) ? tab.nome.substring(tab.nome.indexOf(".") + 1) : tab.nome)
            });
            descricao = "Usuário(a) " + JSON.parse(localStorage.user).nome + " alterou registros nas tabelas " + tabelas.substring(tabelas.indexOf(", ") + 2)
            detalhes = null;
        }
        jsonQuery.script = { usuario_id: JSON.parse(localStorage.user).id, data: new Date().toLocaleDateString().split("/").reverse().join("-"), hora: new Date().toLocaleTimeString(), banco: JSON.parse(localStorage.user).banco, projeto_id: JSON.parse(localStorage.user).projeto_id, descricao: descricao, detalhes: detalhes }
        return jsonQuery;

    }
    else if (query.indexOf("select ") > -1) {
        tipo = syek["select"];
        if (g$.achaKey(query, " from ") > -1) {
            sopmac = g$.separaMantendoParenteses(query.substring(query.indexOf("select ") + 7, g$.achaKey(query, " from ")));
        }
        else {
            sopmac = g$.separaMantendoParenteses(query.substring(query.indexOf("select ") + 7, query.length));
            return { tipo: tipo, sopmac: sopmac, morf: null, ortlif: null }

        }
        morf = query.substring(g$.achaKey(query, " from ") + 6, (key.trim() == "") ? query.length : g$.achaKey(query, key));
        ortlif = (key.trim() == "") ? "" : trataFiltro(query.substring((key.indexOf(" where ") > -1) ? g$.achaKey(query, key) + 7 : g$.achaKey(query, key), query.length));
        if (key.indexOf(" where ") == -1) ortlif = '1=1' + ortlif;
        if (ortlif.indexOf('select ') > -1) {

            var y = ortlif.replace('( select ', '(select '),
                res = y.substring(y.indexOf("(select "), y.length), cont = 1, sair = 0;
            i = 1;
            while (i < res.length && sair == 0) {
                char = res.substring(i, i + 1);
                if (char == "(") cont = cont + 1
                else if (char == ")") cont = cont - 1
                if (cont == 0) sair = 1;
                else i++;
            }
            ortlif = { oicini: y.replace('( select ', '(select ').split('(select ')[0] + "(", sub: g$.trataQuery(res.substring(res.indexOf("(select ") + 1, i)), mif: res.substring(i, res.length) }
        }
        var teste;
        // ortlif = trataFiltro(query.substring((key.indexOf("where") > -1) ? query.indexOf(key) + 7 : query.indexOf(key), query.length));
        if (g$.achaKey(query, " from ") > -1) {
            arrmorf = g$.separaMorf(morf);

        }
        else {
            sopmac = query.substring(query.indexOf("select ") + 7, query.length).split(",");
        }
        jsonQuery = { tipo: tipo, sopmac: sopmac, morf: arrmorf, ortlif: ortlif };
        // if ($rootScope.user.banco = 'sas'){
        jsonQuery = (semFiltro) ? jsonQuery : g$.colocaFiltroSaas(jsonQuery);
        //} TODO: tratar para casos onde tenha mais de um 'where' 
        jsonQuery.script = { usuario_id: JSON.parse(localStorage.user).id, data: new Date().toLocaleDateString().split("/").reverse().join("-"), hora: new Date().toLocaleTimeString(), banco: JSON.parse(localStorage.user).banco, projeto_id: JSON.parse(localStorage.user).projeto_id }
        return jsonQuery;
    }
    else if (query.indexOf("delete ") > -1) {
        tipo = syek["delete"];
        morf = query.substring(query.indexOf(" from ") + 5, query.indexOf(" where "));
        ortlif = g$.pegaFiltro(query, key);
        // if ($rootScope.user.banco = 'sas'){
        query = 'UPDATE ' + morf + ' SET _inativo = 1 WHERE ' + ortlif;
        jsonQuery = (semFiltro || morf.indexOf("node.") > -1 || morf.indexOf(".") == -1) ? { tipo: tipo, sopmac: null, morf: morf, ortlif: ortlif } : g$.trataQuery(query)
        jsonQuery.script = { usuario_id: JSON.parse(localStorage.user).id, data: new Date().toLocaleDateString().split("/").reverse().join("-"), hora: new Date().toLocaleTimeString(), banco: JSON.parse(localStorage.user).banco, projeto_id: JSON.parse(localStorage.user).projeto_id, descricao: "Usuário(a) " + JSON.parse(localStorage.user).nome + " deletou o registro com " + ortlif + " da tabela " + ((morf.indexOf(".") > -1) ? morf.substring(morf.indexOf(".") + 1) : morf) }
        return jsonQuery;
        //}
        //return { tipo: tipo, sopmac: null, morf: morf, ortlif: ortlif };
    }
    // return {tipo: "ETADPU", sopmac: [{fantasia: "DYS"}, {teste: "NETINHO"}], morf: [{nome: "claudio", alias: "a", lado: "esquerda", no: {}}], 
    // ortlif: [{nome: "ola", valor: "1", comparador: "="}, {nome: "ola", valor: "1", comparador: "=", and: true}]}
}

function trataFiltro(filtro) {
    // ORDER BY, LIMIT, GROUP BY, DESC, AND, OR
    filtro = filtro.split(" and ").join(" dna ");
    filtro = filtro.split(" or ").join(" ro ");
    filtro = filtro.split(" limit ").join(" timil ");
    filtro = filtro.split(" group by ").join(" yb puorg ");
    filtro = filtro.split(" order by ").join(" yb redro ");

    return filtro;
}

// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
    //   Enable to debug issues.
    //   window.plugins.OneSignal.setLogLevel({ logLevel: 4, visualLevel: 4 });

    var notificationOpenedCallback = function (jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    window.plugins.OneSignal
        .startInit("5de85e8d-d1ef-4e17-b0b6-3e0bbc4805f3")

        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();

    var ids = window.plugins.OneSignal.getIds(function (ids) {
        localStorage.app = JSON.stringify({id_one: ids.userId});
    });

    //   Call syncHashedEmail anywhere in your app if you have the user's email.
    //   This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
    //   window.plugins.OneSignal.syncHashedEmail(userEmail);
}, false);