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


function ChargerListeClients() {

     var données = {
     "ListeClient":[
         {
            "nom": "Client1",
            "Constat": [
            {
                'IDConstat':'Constat1'
            },
            {
                'IDConstat':'Constat2'
             }
            ]
        },
        {
            "nom": "Client2",
             "Constat": [
             {
                'IDConstat':'Constat1'
             },
             {
                'IDConstat':'Constat2'
             }
            ]
        }

     ]
     };
     $('div#lesclients').append(
     '<div class="clientgeneral"><li class="client_list list-group-item" ><span class="badge">14</span>'+données.ListeClient[0].nom+'</li></div>' +
     '<div class="fichierclientid" style="display:none">'+
     '<ul class="list-group">' +
     '<a class="client_fichier_list list-group-item" href="constatexemple.html" target="_blank">'+données.ListeClient[0].Constat[0].IDConstat+'</a>' +
     '</ul>' +
     '</div>'
     );

    $.getJSON('FichierTestClients.json', function(données) {
        $.each(données.ListeClient, function(key,val){
            $('div#lesclients').append(
                '<div class="clientgeneral"><li class="client_list list-group-item" ><span class="badge">14</span>'+val.nom+'</li></div>' +
                    '<div class="fichierclientid" style="display:none">'+
                    '<ul class="list-group">' +
                    '<a class="client_fichier_list list-group-item" href="constatexemple.html" target="_blank">'+val.Constat[0].IDConstat+'</a>' +
                    '<a class="client_fichier_list list-group-item" href="constatexemple.html" target="_blank">'+val.Constat[1].IDConstat+'</a>' +
                    '</ul>' +
                    '</div>'
            );
        })
    })
}

function ChargerListeUsers() {

    var donnéesUsers = {
        "ListeUsers":[
        {
            "nom": "Yoann RAMOS",
            "mail":"mail de yoann",
            "adresse":"adresse de yoann",
            "ville":"ville de yoann",
            "CodePostal":"cp de yoann",
            "Téléphone":"tel de yoann"
        },
        {
            "nom": "Alexis ROCHE",
            "mail":"mail de alexis",
            "adresse":"adresse d'alexis",
            "ville":"ville d'alexis",
            "CodePostal":"cp d'alexis",
            "Téléphone":"tel d'alexis"
        },
        {
            "nom": "Emeric GAICHET",
            "mail":"mail d'emeric",
            "adresse":"adresse d'emeric",
            "ville":"ville d'emeric",
            "CodePostal":"cp d'emeric",
            "Téléphone":"tel d'emeric"
        }
    ]};
    $('div#lesusers').append(
        '<div class="usergeneral"><li class="client_list list-group-item">'+donnéesUsers.ListeUsers[0].nom+'</li></div>'+
        '<div class="Utilisateur">'+
        '<ul class="client_fichier_list list-group">'+
        '<li class="list-group-item">'+donnéesUsers.ListeUsers[0].mail+'</li>'+
        '<li class="list-group-item">'+donnéesUsers.ListeUsers[0].adresse+'</li>'+
        '<li class="list-group-item">'+donnéesUsers.ListeUsers[0].ville+'</li>'+
        '<li class="list-group-item">'+donnéesUsers.ListeUsers[0].CodePostal+'</li>'+
        '<li class="list-group-item">'+donnéesUsers.ListeUsers[0].Téléphone+'</li>'+
        '</ul>'+
        '</div>'
    );

    $.getJSON('FichierTestUsers.json', function(données) {
        $.each(données.ListeUsers, function(key,val){
            $('div#lesusers').append(
                '<div class="usergeneral"><li class="client_list list-group-item">'+val.nom+'</li></div>'+
                    '<div class="Utilisateur">'+
                    '<ul class="client_fichier_list list-group">'+
                    '<li class="list-group-item">'+val.mail+'</li>'+
                    '<li class="list-group-item">'+val.adresse+'</li>'+
                    '<li class="list-group-item">'+val.ville+'</li>'+
                    '<li class="list-group-item">'+val.CodePostal+'</li>'+
                    '<li class="list-group-item">'+val.Téléphone+'</li>'+
                    '</ul>'+
                    '</div>'
            )
        })
    })
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
