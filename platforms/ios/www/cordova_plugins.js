cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.photokandy.nativecontrols/www/PKNativeControls.js",
        "id": "com.photokandy.nativecontrols.PKNativeControls",
        "clobbers": [
            "window.nativeControls"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.photokandy.nativecontrols": "1.0.2",
    "org.apache.cordova.device": "0.2.9",
    "org.apache.cordova.splashscreen": "0.3.0"
}
// BOTTOM OF METADATA
});