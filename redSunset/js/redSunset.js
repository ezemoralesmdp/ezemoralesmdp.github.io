/* tab */
openPersonalData(event, "Overview")
function openPersonalData(evt, openPersonalData) {
    var i, section__tabcontent, section__tablinks;
    section__tabcontent = document.getElementsByClassName("section__tabcontent");
    for (i = 0; i < section__tabcontent.length; i++) {
        section__tabcontent[i].style.display = "none";
    }
    section__tablinks = document.getElementsByClassName("section__tablinks");
    for (i = 0; i < section__tablinks.length; i++) {
        section__tablinks[i].className = section__tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openPersonalData).style.display = "block";
    evt.currentTarget.className += " active";
}