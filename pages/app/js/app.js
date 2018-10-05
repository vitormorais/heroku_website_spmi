// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app_spmi = angular.module('starter', ['ionic'])

app_spmi.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  // Override the android back button
  $ionicPlatform.registerBackButtonAction(function (e) {
        
             if ($rootScope.$viewHistory.backView) {
                $rootScope.$viewHistory.backView.go();
            } else {
                var confirmPopup = $ionicPopup.confirm({
                        title: 'Confirm Exit',
                        template: "Are you sure you want to close APPNAME?"
                    });
                confirmPopup.then(function (close) {
                    if (close) {
                        // there is no back view, so close the app instead
                        ionic.Platform.exitApp();
                    } // otherwise do nothing
                    console.log("User canceled exit.");
                });
            }

            e.preventDefault();
            return false;
        }, 101); // 1 more priority than back button
})





function PULMONAR_function() {
    
    var x = document.getElementById("PULMONAR");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function CARDIO_function() {
    var x = document.getElementById("CARDIO");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function METABOL_function() {
    var x = document.getElementById("METABOL");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function NERVOSO_function() {
    var x = document.getElementById("NERVOSO");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function GASTRO_function() {
    var x = document.getElementById("GASTRO");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function INFECTO_function() {
    var x = document.getElementById("INFECTO");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function INTENSIVO_function() {
    var x = document.getElementById("INTENSIVO");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function HEMATO_function() {
    var x = document.getElementById("HEMATO");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function OUTROS_function() {
    var x = document.getElementById("OUTROS");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function TABELAS_function() {
    var x = document.getElementById("TABELAS");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function AUTORES_function() {
    var x = document.getElementById("AUTORES");
    if (x.style.display === "none") {
        disableAll();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function disableAll() {
    var x = document.getElementById("PULMONAR");
    x.style.display = "none";
    var x = document.getElementById("CARDIO");
    x.style.display = "none";
    var x = document.getElementById("METABOL");
    x.style.display = "none";
    var x = document.getElementById("NERVOSO");
    x.style.display = "none";
    var x = document.getElementById("GASTRO");
    x.style.display = "none";
    var x = document.getElementById("INFECTO");
    x.style.display = "none";
    var x = document.getElementById("INTENSIVO");
    x.style.display = "none";
    var x = document.getElementById("HEMATO");
    x.style.display = "none";
    var x = document.getElementById("OUTROS");
    x.style.display = "none";
    var x = document.getElementById("TABELAS");
    x.style.display = "none";
    var x = document.getElementById("AUTORES");
    x.style.display = "none";
}

