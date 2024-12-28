function enviarWhatsApp() {
    const form = document.getElementById('relatorioForm');
    const formData = new FormData(form);
    let message = '**Relatório Mensal Family Group**\n\n';

    // Verifica se todos os campos estão preenchidos
    let allFieldsFilled = true;
    for (let [key, value] of formData.entries()) {
        if (!value.trim()) {
            alert(`Por favor, preencha o campo: ${key}`);
            allFieldsFilled = false;
            break;
        }
    }

    if (allFieldsFilled) {
        formData.forEach((value, key) => {
            message += `${key}: ${value}\n`;
        });

        const whatsappUrl = `https://api.whatsapp.com/send?phone=<SEU_NUMERO_DE_TELEFONE>&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}