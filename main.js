document.getElementById("configForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtendo os valores dos inputs
    const bgColor = document.getElementById("bgColor").value;
    const textColor = document.getElementById("textColor").value;
    const fontSize = document.getElementById("fontSize").value;
    const fontWeight = document.getElementById("fontWeight").value;
    const headerText = document.getElementById("headerText").value;
    const bannerUpload = document.getElementById("bannerUpload").files[0]; // Arquivo da imagem do banner
    const iconUpload = document.getElementById("iconUpload").files[0]; // Arquivo da imagem do ícone
    
    // Atualizando o header conforme as opções do usuário
    const headerTitle = document.getElementById("headerTitle");
    const headerPreview = document.getElementById("headerPreview");
    const headerIcon = document.getElementById("headerIcon");
    const headerContent = document.getElementById("headerContent");
  
    headerTitle.textContent = headerText;
    headerPreview.style.backgroundColor = bgColor;
    headerTitle.style.color = textColor;
    headerTitle.style.fontSize = `${fontSize}px`;
    headerTitle.style.fontWeight = fontWeight;
  
    // Se o usuário fez o upload de uma imagem do banner, defina-a como imagem de fundo
    if (bannerUpload) {
      const reader = new FileReader();
      reader.onload = function(e) {
        headerPreview.style.backgroundImage = `url(${e.target.result})`;
        headerPreview.style.backgroundColor = ""; // Remove a cor de fundo (se houver)
      };
      reader.readAsDataURL(bannerUpload); // Lê a imagem como URL base64
    } else {
      headerPreview.style.backgroundImage = ""; // Se não há imagem, remova a imagem de fundo
      headerPreview.style.backgroundColor = bgColor; // Mantém a cor de fundo
    }
  
    // Se o usuário fez o upload de um ícone, exiba-o à esquerda do texto
    if (iconUpload) {
      const iconReader = new FileReader();
      iconReader.onload = function(e) {
        headerIcon.src = e.target.result;
        headerIcon.style.display = "block"; // Exibe o ícone
      };
      iconReader.readAsDataURL(iconUpload); // Lê a imagem como URL base64
    } else {
      headerIcon.style.display = "none"; // Se não há ícone, esconda o ícone
    }
  });
  