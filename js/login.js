$(document).ready(function () {
    //TELA LOGIN

    $("#btnLogin").click(function () {
        const $user = $("#user").val();
        const $pwd = $("#pwd").val();
        if ($user && $pwd) {
            $.getJSON("http://localhost:8080/usuarios",
                function ($registros) {
                    console.log($registros)
                    console.log($registros.filter($usuario => $usuario.user == $user && $usuario.pwd == $pwd))
                    var usr = $registros.find($usuario => $usuario.user == $user && $usuario.pwd == $pwd);
                    //if ($registros.filter($usuario => $usuario.user == $user && $usuario.pwd == $pwd).length > 0)
                    if (usr) {
                        sessionStorage.setItem("id", usr.id);
                        window.open("index.html", "_self")
                    } else alert("Usuário Inválido");
                });
        } else {
            alert("Erro: favor informar usuário e senha")
        }
    })

    //TELA CADASTRO
    $("#btnCadastro").click(function () {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val();
        let data = { "user": $user, "pwd": $pwd };

        if ($user && $pwd) {
            console.log('enviando requisição: ' + JSON.stringify(data))
            const url = "http://localhost:8080/usuarios";
            axios.post(url, data).then(() => window.location.href = 'login.html');
        } else {
            alert("Erro: favor informar usuário e senha")
        }
    })
});