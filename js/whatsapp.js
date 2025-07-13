// Crear botón flotante de WhatsApp
const whatsappButton = document.createElement("a");
whatsappButton.href = "https://wa.me/542325564035"; // Número con código de país (54 Argentina)
whatsappButton.target = "_blank";
whatsappButton.innerHTML = "💬";

whatsappButton.style.position = "fixed";
whatsappButton.style.bottom = "20px";
whatsappButton.style.right = "20px";
whatsappButton.style.backgroundColor = "#25D366"; // Color WhatsApp
whatsappButton.style.color = "white";
whatsappButton.style.borderRadius = "50%";
whatsappButton.style.padding = "15px";
whatsappButton.style.textDecoration = "none";
whatsappButton.style.fontSize = "24px";
whatsappButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
whatsappButton.style.zIndex = "999";

document.body.appendChild(whatsappButton);
