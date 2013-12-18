function openMoreFilter() {
        $('#filtreplus').slideToggle();

}

function openCustomers() {
    $('#fichierclient').slideToggle();

}

function openUsers() {
    $('#utilisateurs').slideToggle();

}

function openAccount() {
    $('#compte').slideToggle();

}

function openUtilisateurs(id) {
    $('#compte'+id).slideToggle();
}


var d = new Date();
var mois = d.getMonth()+1;
var jour = d.getDate();
var dateReconstruite = (jour<10 ? '0' : '') + jour
    + '/' + (mois<10 ? '0' : '') + mois + '/'
    +  d.getFullYear();
$('#constat-date').html(dateReconstruite);