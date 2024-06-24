document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignupButton = document.getElementById('show-signup');
    const showLoginButton = document.getElementById('show-login');

    const users = [];

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Verificar se o usuário existe
        const user = users.find(user => user.email === email && user.senha === senha);

        if (user) {
            console.log('Login bem-sucedido');
            if(user.tipo == 'medico'){
                window.location.href = 'medico.html';
            }
            if(user.tipo == 'paciente'){
                window.location.href = 'paciente.html';
            }
            if(user.tipo == 'secretaria'){
                window.location.href = 'adm.html';
            }
            // Redirecionar para index.html
            //window.location.href = 'index.html';
        } else {
            console.log('Usuário ou senha incorretos');
            Toastify({
                text: "Usuário ou senha incorretos",
                duration: 3000,
                gravity: "top", 
                position: "center", 
                backgroundColor: "#FF0000",
            }).showToast();
        }
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('signup-email').value;
        const senha = document.getElementById('signup-password').value;
        const tipo = document.querySelector('input[name="tipo"]:checked').value;

        const user = {
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            email: email,
            senha: senha,
            tipo: tipo
        };

        users.push(user);
        console.log(users);

        // Mostrar mensagem de sucesso
        Toastify({
            text: "Cadastro realizado com sucesso",
            duration: 3000,
            gravity: "top", 
            position: "center", 
            backgroundColor: "#4CAF50",
        }).showToast();

        // Redirecionar para a tela de login
        signupForm.parentElement.classList.add('hidden');
        loginForm.parentElement.classList.remove('hidden');
    });

    showSignupButton.addEventListener('click', () => {
        loginForm.parentElement.classList.add('hidden');
        signupForm.parentElement.classList.remove('hidden');
    });

    showLoginButton.addEventListener('click', () => {
        signupForm.parentElement.classList.add('hidden');
        loginForm.parentElement.classList.remove('hidden');
    });
});

function mascaraNumero(){
    $('#telefone').mask('(00) 00000-0000');
}