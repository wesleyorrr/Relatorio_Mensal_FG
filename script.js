function enviarWhatsApp() {
    const form = document.getElementById('relatorioForm');
    const formData = new FormData(form);
    let message = '';

    // Função auxiliar para adicionar seções em negrito
    function addSectionTitle(title) {
        message += `*${title}*\n\n`;  // Adiciona o título em negrito (formatação do WhatsApp)
    }

    // Adiciona os títulos das seções em negrito
    addSectionTitle('Relatório Mensal Family Group');
    formData.forEach((value, key) => {
        if (key.includes('grupo') || key.includes('culto') || key.includes('cse')) {
            message += `${value ? `${key}: ${value}\n` : ''}`;
        } else {
            message += `${key}: ${value}\n`;
        }
    });

    addSectionTitle('Presença nos Cultos de Celebração');
    ['culto1', 'culto2', 'culto3', 'culto4', 'culto5'].forEach(culto => {
        message += `${culto}: ${formData.get(culto)}\n`;
    });

    addSectionTitle('Presença no CSE');
    ['cse1', 'cse2', 'cse3', 'cse4', 'cse5'].forEach(cse => {
        message += `${cse}: ${formData.get(cse)}\n`;
    });

    addSectionTitle('Presença nos Grupos de Família');
    ['grupoAdolescentes1', 'grupoHomensSolteiros1', 'grupoMulheresSolteiras1', 'grupoHomensCasados1', 'grupoMulheresCasadas1', 'grupoVisitantes1', 'grupoConversoes1', 'grupoTotalGeral1',
     'grupoAdolescentes2', 'grupoHomensSolteiros2', 'grupoMulheresSolteiras2', 'grupoHomensCasados2', 'grupoMulheresCasadas2', 'grupoVisitantes2', 'grupoConversoes2', 'grupoTotalGeral2',
     'grupoAdolescentes3', 'grupoHomensSolteiros3', 'grupoMulheresSolteiras3', 'grupoHomensCasados3', 'grupoMulheresCasadas3', 'grupoVisitantes3', 'grupoConversoes3', 'grupoTotalGeral3',
     'grupoAdolescentes4', 'grupoHomensSolteiros4', 'grupoMulheresSolteiras4', 'grupoHomensCasados4', 'grupoMulheresCasadas4', 'grupoVisitantes4', 'grupoConversoes4', 'grupoTotalGeral4',
     'grupoAdolescentes5', 'grupoHomensSolteiros5', 'grupoMulheresSolteiras5', 'grupoHomensCasados5', 'grupoMulheresCasadas5', 'grupoVisitantes5', 'grupoConversoes5', 'grupoTotalGeral5']
     .forEach(grupo => {
        message += `${grupo}: ${formData.get(grupo)}\n`;
    });

    addSectionTitle('Resumo do Mês');
    message += `Total de conversão no Mês: ${formData.get('totalConversaoMes')}\n`;
    message += `Total de Membros da Igreja que são membros do FG: ${formData.get('totalMembrosFG')}\n`;
    message += `Tem algum FG em formação? ${formData.get('fgFormacao')}\n`;
    message += `Tem algum membro novo? ${formData.get('membroNovo')}\n`;
    message += `Realizou algum Evento? ${formData.get('realizouEvento')}\n`;
    message += `Se sim, qual? ${formData.get('qualEvento')}\n`;
    message += `Está em qual coluna do MDA? ${formData.get('colunaMDA')}\n`;

    // Verifica se todos os campos estão preenchidos
    let allFieldsFilled = true;
    formData.forEach((value, key) => {
        if (!value) {
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=<038999894056>&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}