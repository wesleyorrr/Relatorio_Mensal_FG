function enviarWhatsApp() {
    const form = document.getElementById('relatorioForm');
    const formData = new FormData(form);
    let message = '**Relatório Mensal Family Group**\n\n';

    formData.forEach((value, key) => {
        message += `${key}: ${value}\n`;
    });

    const whatsappUrl = `https://api.whatsapp.com/send?phone=<3899894056>&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}