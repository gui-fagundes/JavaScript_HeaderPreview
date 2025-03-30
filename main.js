document.getElementById("bgColor").addEventListener("change", (e) => {
  e.preventDefault();
  const bgColor = document.getElementById("bgColor").value;
  const headerPreview = document.getElementById("headerPreview");
  headerPreview.style.backgroundColor = bgColor;
});

document.getElementById("textColor").addEventListener("change", (e) => {
  e.preventDefault();
  const textColor = document.getElementById("textColor").value;
  headerTitle.style.color = textColor;
});

document.getElementById("fontSize").addEventListener("change", (e) => {
  e.preventDefault();
  const fontSize = document.getElementById("fontSize").value;
  headerTitle.style.fontSize = `${fontSize}px`;
});

document.getElementById("fontWeight").addEventListener("change", (e) => {
  e.preventDefault();
  const fontWeight = document.getElementById("fontWeight").value;
  headerTitle.style.fontWeight = fontWeight;
});

document.getElementById("headerText").addEventListener("change", (e) => {
  e.preventDefault();
  const headerText = document.getElementById("headerText").value;
  headerTitle.textContent = headerText;
});

document.getElementById("bannerUpload").addEventListener("change", (e) => {
  e.preventDefault();
  const bannerUpload = document.getElementById("bannerUpload").files[0];
  if (bannerUpload) {
    const reader = new FileReader();
    reader.onload = function (e) {
      headerPreview.style.backgroundImage = `url(${e.target.result})`;
      headerPreview.style.backgroundColor = ""; // Remove a cor de fundo (se houver)
    };
    reader.readAsDataURL(bannerUpload); // Lê a imagem como URL base64
  } else {
    headerPreview.style.backgroundImage = ""; // Se não há imagem, remova a imagem de fundo
    headerPreview.style.backgroundColor = bgColor; // Mantém a cor de fundo
  }
});

document.getElementById("iconUpload").addEventListener("change", (e) => {
  e.preventDefault();
  const iconUpload = document.getElementById("iconUpload").files[0];
  const headerIcon = document.getElementById("headerIcon");
  if (iconUpload) {
    const iconReader = new FileReader();
    iconReader.onload = function (e) {
      headerIcon.src = e.target.result;
      headerIcon.style.display = "block"; // Exibe o ícone
    };
    iconReader.readAsDataURL(iconUpload); // Lê a imagem como URL base64
  } else {
    headerIcon.style.display = "none"; // Se não há ícone, esconda o ícone
  }
});

document.getElementById("searchBox").addEventListener("change", (e) => {
  e.preventDefault();
  const searchBar = document.getElementById("searchBox").value;
  const search = document.getElementById("headerSearch");
  if (searchBar === "true") {
    search.style.display = "block";
  } else {
    search.style.display = "none";
  }
});
