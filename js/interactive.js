function change(obj) {
    detail = document.querySelector("#detail");
    detail.src = obj;
}

function baseImg() {
    detail = document.querySelector("#detail");
    detail.src = "img/base_detail.png";
}

function setMap(mapName) {
    detail = document.querySelector("#detail");
    detail.style.visibility = "visible";
    map = document.querySelector("#map");
    map.src = "img/" + mapName + "/" + mapName + ".png";
    map.setAttribute('usemap', "#image-map-"+mapName);
}