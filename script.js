function enviarWhatsApp() {
    const form = document.getElementById('relatorioForm');
    const formData = new FormData(form);
    let message = '**Relatório Mensal Family Group**\n\n';

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

    formData.forEach((value, key) => {
        message += `${key}: ${value}\n`;
    });

    const whatsappUrl = `https://api.whatsapp.com/send?phone=<SEU_NUMERO_DE_TELEFONE>&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}