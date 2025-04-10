document.getElementById("bgColor").addEventListener("input", (e) => {
  e.preventDefault();
  const bgColor = document.getElementById("bgColor").value;
  const headerPreview = document.getElementById("headerPreview");
  headerPreview.style.backgroundColor = bgColor;
});

document.getElementById("textColor").addEventListener("input", (e) => {
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

document.getElementById("fontItalic").addEventListener("change", (e) => {
  const isChecked = document.getElementById("fontItalic").checked;
  if (isChecked) {
    headerTitle.style.fontStyle = "italic";
  } else {
    headerTitle.style.fontStyle = "normal";
  }
});

document.getElementById("headerText").addEventListener("input", (e) => {
  e.preventDefault();
  const headerText = document.getElementById("headerText").value;
  headerTitle.textContent = headerText;
});

document.getElementById("addButton").addEventListener("click", (e) => {
  e.preventDefault();
  const menu = document.getElementById("menuLinks");
  const novoItem = document.createElement("li");
  const novoLink = document.createElement("a");
  novoLink.href = "";
  novoLink.textContent = document.getElementById("linkText").value;
  novoLink.target = "blank";
  novoLink.className = "menuLink";
  novoItem.appendChild(novoLink);
  menu.appendChild(novoItem);
  document.getElementById("linkText").value = "";
});

document.getElementById("menuLinkFontSize").addEventListener("change", (e) => {
  e.preventDefault();
  const menuLinkFontSize = document.getElementById("menuLinkFontSize").value;
  headerMenu.style.fontSize = `${menuLinkFontSize}px`;
});

document.getElementById("linkColor").addEventListener("input", (e) => {
  e.preventDefault();
  const linksColor = document.getElementById("linkColor").value;
  const menuLinks = document.getElementsByClassName("menuLink");
  for(var i = 0 ; i <menuLinks.length ; i++) {
    menuLinks[i].style.color = linksColor;
  }
});

document.getElementById("searchBox").addEventListener("change", (e) => {
  e.preventDefault();
  const searchBar = document.getElementById("searchBox").value;
  const search = document.getElementById("headerSearch");
  if (searchBar === "true") {
    search.style.display = "block";
    document.getElementById("headerPreview").style.justifyContent =
      "space-between";
  } else {
    search.style.display = "none";
    document.getElementById("headerPreview").style.justifyContent =
      "space-around";
  }
});
document.getElementById("bannerUpload").addEventListener("change", (e) => {
  e.preventDefault();
  const bannerUpload = document.getElementById("bannerUpload").files[0];
  if (bannerUpload) {
    const reader = new FileReader();
    reader.onload = function (e) {
      headerPreview.style.backgroundImage = `url(${e.target.result})`;
      headerPreview.style.backgroundColor = "";
    };
    reader.readAsDataURL(bannerUpload);
  } else {
    headerPreview.style.backgroundImage = "";
    headerPreview.style.backgroundColor = bgColor;
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
      headerIcon.style.display = "block";
    };
    iconReader.readAsDataURL(iconUpload);
  } else {
    headerIcon.style.display = "none";
  }
});
