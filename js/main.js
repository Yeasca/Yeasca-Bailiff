function openMoreFilter() {
        $('#filtreplus').slideToggle();

}

function AfficherListeClients() {
    $('#fichierclient').slideToggle();

}

function AfficherUsers() {
    $(".usergeneral").on("click", function() {
        if($(this).next(".Utilisateur").attr('style') == 'display: block;'){
            $(this).next(".Utilisateur").slideUp(200);
        } else {
            $(".Utilisateur").each(function(){
                $(this).slideUp(200);
            });
            $(this).next(".Utilisateur").slideToggle(200);
        }


    });
    $(".Utilisateur").on("click", function() {
        $(this).slideUp(200);
    });
}

function AfficherContratDuClient() {
    $(".clientgeneral").on("click", function() {
        if($(this).next(".fichierclientid").attr('style') == 'display: block;'){
            $(this).next(".fichierclientid").slideUp(200);
        } else {
            $(".fichierclientid").each(function(){
                $(this).slideUp(200);
            });
            $(this).next(".fichierclientid").slideToggle(200);
        }
    });
    $(".fichierclientid").on("click", function() {
        $(this).slideUp(200);
    });
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
    $.getJSON('FichierTestClients.json', function(données) {
        $.each(données.ListeClient, function(key,val){
            $('div#lesclients').append(
                '<div class="clientgeneral"><li class="client_list list-group-item" onclick="AfficherContratDuClient()"><span class="badge" >14</span>'+val.nom+'</li></div>' +
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
    $.getJSON('FichierTestUsers.json', function(données) {
        $.each(données.ListeUsers, function(key,val){
            $('div#lesusers').append(
                '<div class="usergeneral"><li class="client_list list-group-item" onclick="AfficherUsers()">'+val.nom+'</li></div>'+
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
