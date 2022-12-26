
function headerDisplay() {
    document.getElementById("headerText").innerHTML = "<p> Austin Griffin's Portfolio </p>";
}

function displayContent() {
    document.getElementById("content").style.display = "block";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "none";
    document.getElementById("content5").style.display = "none";
    document.getElementById("content6").style.display = "none";
}
function displayContent1() {
    document.getElementById("content").style.display = "none";
    document.getElementById("content1").style.display = "block";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "none";
    document.getElementById("content5").style.display = "none";
    document.getElementById("content6").style.display = "none";
}
function displayContent2() {
    document.getElementById("content").style.display = "none";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "block";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "none";
    document.getElementById("content5").style.display = "none";
    document.getElementById("content6").style.display = "none";
}
function displayContent3() {
    document.getElementById("content").style.display = "none";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "block";
    document.getElementById("content4").style.display = "none";
    document.getElementById("content5").style.display = "none";
    document.getElementById("content6").style.display = "none";
}
function displayContent4() {
    document.getElementById("content").style.display = "none";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "block";
    document.getElementById("content5").style.display = "none";
    document.getElementById("content6").style.display = "none";
}
function displayContent5() {
    document.getElementById("content").style.display = "none";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "none";
    document.getElementById("content5").style.display = "block";
    document.getElementById("content6").style.display = "none";
}
function displayContent6() {
    document.getElementById("content").style.display = "none";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "none";
    document.getElementById("content5").style.display = "none";
    document.getElementById("content6").style.display = "block";
}

function footerYearDisplay() {
    const today = new Date();
    const year = today.getFullYear(); 
    document.getElementById("footerDisplay").innerHTML = '&copy' +  year + ' Austin Griffin' + '<br>' + 'Hosted by Github';
}
function webpageLoad() {
    headerDisplay();
    footerYearDisplay();
}
