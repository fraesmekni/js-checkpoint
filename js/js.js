function makebold(p) {
    p.style.fontWeight = "bold";


}
function init(p) {
    p.style.fontWeight = "100";
}

var isBold = false
var para = document.getElementsByClassName("para")[0]

function toggleBold() {
    if (isBold) {
        init(para)

    }
    else {
        makebold(para)
    }
    isBold = !isBold
}

var isItalic = false
var par = document.getElementsByClassName("par")[0]
function makeitalic(h) { h.style.fontStyle = "italic"; }
function ints(h) {
    h.style.fontStyle = "normal";
}

function toggleItalic() {
    if (isItalic) {
        ints(par)
    }
    else {
        makeitalic(par)
    }
    isItalic = !isItalic
}
var underlined = false
var pars = document.getElementsByClassName("pars")[0]
function isUnderlined(f) {
    f.style.textDecoration = "underline";
}
function intss(f) { f.style.textDecoration = "none"; }
function toggleUnderlined() {
    if (underlined) {
        intss(pars);
    }
    else {
        isUnderlined(pars);
    }
    underlined = !(underlined)
}

function changeFont() {
    var fontSelection = document.getElementById("Font").value;

    document.getElementById("paragraph").style.fontFamily = fontSelection;

}
function changeSize() {
    var sizeSelection = document.getElementById("Size");
    var size = sizeSelection.options[sizeSelection.selectedIndex].value;
    document.getElementById("paragraph").style.fontSize = size + "px";
}
