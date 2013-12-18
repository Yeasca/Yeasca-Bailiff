function openMoreFilter() {
        $('#filtreplus').slideToggle();

}

function AfficherListeClients() {
    $('#fichierclient').slideToggle();

}


function AfficherUtilisateurs() {
    $('#utilisateurs').slideToggle();

}

function AfficherCompte() {
    $('#compte').slideToggle();

}

function AfficherUtilisateurParID(id) {
    $('#compte'+id).slideToggle();
}


var d = new Date();
var mois = d.getMonth()+1;
var jour = d.getDate();
var heures = d.getHours()
var minutes = d.getMinutes()
var heureReconstruite = (heures<10 ? '0' : '') + heures
    + ':' + (minutes<10 ? '0' : '') + minutes;
var dateReconstruite = (jour<10 ? '0' : '') + jour
    + '/' + (mois<10 ? '0' : '') + mois + '/'
    +  d.getFullYear();
$('#constat-heure').html(heureReconstruite);
$('#constat-date').html(dateReconstruite);

$('#constat-huissier').html('Yoyo');