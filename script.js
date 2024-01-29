function addP() {
    var p = document.createElement("p");
    var ptext = document.createTextNode("Another");
    p.appendChild(ptext);
    var last_child = document.body.lastChild;
    document.body.insertBefore(p, last_child);
}
