function change(obj) {
    detail = document.querySelector("#detail");
    detail.style.visibility = "visible";
    detail.src = obj;
}

function baseImg() {
    detail = document.querySelector("#detail");
    detail.src = "img/transparente.png";
    detail.style.visibility = "hidden";
}

function setMap(mapName) {
    map = document.querySelector("#map");
    map.src = "img/" + mapName + "/" + mapName + ".png";
    map.setAttribute('usemap', "#image-map-"+mapName);
}