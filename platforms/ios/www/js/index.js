// /*
//  * licensed to the apache software foundation (asf) under one
//  * or more contributor license agreements.  see the notice file
//  * distributed with this work for additional information
//  * regarding copyright ownership.  the asf licenses this file
//  * to you under the apache license, version 2.0 (the
//  * "license"); you may not use this file except in compliance
//  * with the license.  you may obtain a copy of the license at
//  *
//  * http://www.apache.org/licenses/license-2.0
//  *
//  * unless required by applicable law or agreed to in writing,
//  * software distributed under the license is distributed on an
//  * "as is" basis, without warranties or conditions of any
//  * kind, either express or implied.  see the license for the
//  * specific language governing permissions and limitations
//  * under the license.
//  */
// var app = {
//     // application constructor
//     initialize: function() {
//         this.bindevents();
//     },
//     // bind event listeners
//     //
//     // bind any events that are required on startup. common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindevents: function() {
//         document.addeventlistener('deviceready', this.ondeviceready, false);
//     },
//     // deviceready event handler
//     //
//     // the scope of 'this' is the event. in order to call the 'receivedevent'
//     // function, we must explicity call 'app.receivedevent(...);'
//     ondeviceready: function() {
//         app.receivedevent('deviceready');
//         if (parsefloat(window.device.version) >= 7.0) {
//           document.body.style.margintop = "50px";
//           // or do whatever layout you need here, to expand a navigation bar etc
//         }
//         navigator.splashscreen.hide();
//     },
//     // update dom on a received event
//     receivedevent: function(id) {
//         var parentelement = document.getelementbyid(id);
//         var listeningelement = parentelement.queryselector('.listening');
//         var receivedelement = parentelement.queryselector('.received');

//         listeningelement.setattribute('style', 'display:none;');
//         receivedelement.setattribute('style', 'display:block;');

//         console.log('received event: ' + id);
//     }
// };

$(document).ready(function() {
    //redirect to login
    document.location='./login.html';

    //display help message if there is a problem
    setTimeout(function(){
        $("#index-time-out").css("display","block");
    }, 5000);

});
