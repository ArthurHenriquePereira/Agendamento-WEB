        // Exemplo de dados fictícios (em um cenário real, você buscaria esses dados do backend)
        const consultas = [
            { id: 1, paciente: 'João da Silva', dataHora: '2024-06-25 09:00:00', tipoConsulta: 'Rotina', status: 'Agendada', notas: 'Primeira consulta de rotina' },
            { id: 2, paciente: 'Maria Oliveira', dataHora: '2024-06-25 10:30:00', tipoConsulta: 'Consulta de Seguimento', status: 'Agendada', notas: 'Revisão pós-operatória' },
            { id: 3, paciente: 'Carlos Souza', dataHora: '2024-06-25 13:00:00', tipoConsulta: 'Consulta de Urgência', status: 'Cancelada', notas: 'Paciente cancelou' },
            { id: 4, paciente: 'Ana Paula Santos', dataHora: '2024-06-26 08:45:00', tipoConsulta: 'Consulta de Rotina', status: 'Concluída', notas: 'Receita de medicamentos' },
            { id: 5, paciente: 'Pedro Lima', dataHora: '2024-06-26 11:00:00', tipoConsulta: 'Consulta de Rotina', status: 'Agendada', notas: 'Exame de sangue solicitado' },
            { id: 6, paciente: 'Fernanda Costa', dataHora: '2024-06-27 09:30:00', tipoConsulta: 'Consulta de Rotina', status: 'Agendada', notas: 'Check-up anual' },
            { id: 7, paciente: 'Rafael Almeida', dataHora: '2024-06-27 15:00:00', tipoConsulta: 'Consulta de Seguimento', status: 'Agendada', notas: 'Avaliação de resultados de exames' },
            { id: 8, paciente: 'Bruna Silva', dataHora: '2024-06-28 10:00:00', tipoConsulta: 'Consulta de Rotina', status: 'Concluída', notas: 'Orientações sobre dieta' },
            { id: 9, paciente: 'Tiago Pereira', dataHora: '2024-06-28 14:00:00', tipoConsulta: 'Consulta de Urgência', status: 'Agendada', notas: 'Dor abdominal' },
            { id: 10, paciente: 'Larissa Santos', dataHora: '2024-06-29 11:30:00', tipoConsulta: 'Consulta de Seguimento', status: 'Agendada', notas: 'Acompanhamento pós-tratamento' },
        ];

        // Função para preencher a tabela com os dados das consultas
        function preencherTabela() {
            const tableBody = document.getElementById('consulta-table-body');
            consultas.forEach(consulta => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${consulta.id}</td>
                    <td>${consulta.paciente}</td>
                    <td>${consulta.dataHora}</td>
                    <td>${consulta.tipoConsulta}</td>
                    <td>${consulta.status}</td>
                    <td>${consulta.notas}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Chama a função para preencher a tabela ao carregar a página
        window.onload = preencherTabela;