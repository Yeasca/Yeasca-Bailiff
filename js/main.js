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

function AfficherConstat() {
    $(".constatgeneral").on("click", function() {
        if($(this).next(".Fichier").attr('style') == 'display: block;'){
            $(this).next(".Fichier").slideUp(200);
        } else {
            $(".Fichier").each(function(){
                $(this).slideUp(200);
            });
            $(this).next(".Fichier").slideToggle(200);
        }
    });
    $(".Fichier").on("click", function() {
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

function ChargerListeClients() {
    $.getJSON('FichierTestClients.json', function(données) {
        $.each(données.ListeClient, function(key,val){
            $('div#lesclients').append(
                '<div class="clientgeneral" onclick="AfficherContratDuClient()"><li class="client_list list-group-item"><span class="badge" >14</span>'+val.nom+'</li></div>' +
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
                '<div class="usergeneral" onclick="AfficherUsers()"><li class="client_list list-group-item" >'+val.nom+'<div class="row-reverse"><button class="btn btn-default col-xs-0 col-sm-0 col-md-0 col-lg-0"><span class="glyphicon glyphicon-pencil"></span></button></div></li></div>'+
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

function CreationClient() {
    $.post("/urlWS", {
        civilite : $("#civiliteClientCreation").val(),
        nom : $("#nomClientCreation").val(),
        prenom : $("#prenomClientCreation").val(),
        numeroVoie : $("#numVoieClientCreation").val(),
        repetitionVoie : $("#repetitionVoieClientCreation").val(),
        typeVoie : $("#typeVoieClientCreation").val(),
        nomVoie : $("#nomVoieClientCreation").val(),
        complementVoie : $("#complementVoieClientCreation").val(),
        cp : $("#cpClientCreation").val(),
        bp : $("#bpClientCreation").val(),
        ville : $("#villeClientCreation").val()
    }, function(reponse) {
        if(reponse.Reussite) {
            $("#civiliteClientCreation").empty();
            $("#nomClientCreation").empty();
            $("#prenomClientCreation").empty();
            $("#numVoieClientCreation").empty();
            $("#repetitionVoieClientCreation").empty();
            $("#typeVoieClientCreation").empty();
            $("#nomVoieClientCreation").empty();
            $("#complementVoieClientCreation").empty();
            $("#cpClientCreation").empty();
            $("#bpClientCreation").empty();
            $("#villeClientCreation").empty();
            $("#messageCreationClient").html("<span class='label label-success'>Création effectuée avec succès</span>");
        }
    },"json");
}

function ModificationClient() {
    $.post("/urlWS", {
        civilite : $("#civiliteClientModification").val(),
        nom : $("#nomClientModification").val(),
        prenom : $("#prenomClientModification").val(),
        numeroVoie : $("#numVoieClientModification").val(),
        repetitionVoie : $("#repetitionVoieClientModification").val(),
        typeVoie : $("#typeVoieClientModification").val(),
        nomVoie : $("#nomVoieClientModification").val(),
        complementVoie : $("#complementVoieClientModification").val(),
        cp : $("#cpClientModification").val(),
        bp : $("#bpClientModification").val(),
        ville : $("#villeClientModification").val()
    }, function(reponse) {
        if(reponse.Reussite) {
            $("#civiliteClientModification").empty();
            $("#nomClientModification").empty();
            $("#prenomClientModification").empty();
            $("#numVoieClientModification").empty();
            $("#repetitionVoieClientModification").empty();
            $("#typeVoieClientModification").empty();
            $("#nomVoieClientModification").empty();
            $("#complementVoieClientModification").empty();
            $("#cpClientModification").empty();
            $("#bpClientModification").empty();
            $("#villeClientModification").empty();
            $("#messageModificationClient").html("<span class='label label-success'>Modification effectuée avec succès</span>");
        }
    },"json");
}

function CreationUtilisateur() {
    $.post("/urlWS", {
        civilite : $("#civiliteUtilisateurCreation").val(),
        nom : $("#nomUtilisateurCreation").val(),
        prenom : $("#prénomUtilisateurCreation").val(),
        email : $("#emailUtilisateurCreation").val(),
        motDePasse : $("#motDePasseUtilisateurCreation").val()
    }, function(reponse) {
        if(reponse.Reussite) {
            $("#civiliteUtilisateurCreation").empty();
            $("#nomUtilisateurCreation").empty();
            $("#prénomUtilisateurCreation").empty();
            $("#emailUtilisateurCreation").empty();
            $("#motDePasseUtilisateurCreation").empty();
            $("#messageCreationUtilisateur").html("<span class='label label-success'>Création effectuée avec succès</span>");
        }
    },"json");
}

function ModificationUtilisateur() {
    $.post("/urlWS", {
        civilite : $("#civiliteUtilisateurModification").val(),
        nom : $("#nomUtilisateurModification").val(),
        prenom : $("#prénomUtilisateurModification").val(),
        email : $("#emailUtilisateurModification").val(),
        motDePasse : $("#motDePasseUtilisateurModification").val()
    }, function(reponse) {
        if(reponse.Reussite) {
            $("#civiliteUtilisateurModification").empty();
            $("#nomUtilisateurModification").empty();
            $("#prénomUtilisateurModification").empty();
            $("#emailUtilisateurModification").empty();
            $("#motDePasseUtilisateurModification").empty();
            $("#messageModificationUtilisateur").html("<span class='label label-success'>Modification effectuée avec succès</span>");
        }
    },"json");
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

if($("#roleUtilisateurCreation").val() == "Huissier")
{
    $("#civiliteUtilisateurCreation").prop( "disabled", true );
}