Assassins FrontEnd README
=================

## Assassins

Assassins is a mobile app that allows users to organize, run, 
and keep track of the [Assassin's Game](http://en.wikipedia.org/wiki/Assassin_(game)). We keep track of things like who needs to kill whom, 
who is still alive, and who wins.

## Architecture

### Server Development

We have written our server code using Google App Engine and Flask, you need to 
go to this repository to install, build and deploy the server:

https://github.com/keeeeenw/AssassinServerAPI

### Client Development

This repository hosts the files for the Client component of our app, which builds on 
top of the PhoneGap framework.

### Cordova and PhoneGap

Cordova is an open source framework that enables us to write our mobile app 
using HTML, CSS, and JavaScript. PhoneGap builds on top of Cordova to 
provide extra features. We have tested deploying our app to iOS 7 and
Android platforms. For detailed platform support, check out this link:
http://docs.phonegap.com/en/edge/guide_support_index.md.html#Platform%20Support

If you are interested in learning more about PhoneGap, the developer document is
avaliable here:
http://docs.phonegap.com/en/edge/index.html

You don't need to have PhoneGap installed on your machine to run our app on your
browser, because the app is writen using pure HTML, CSS, and Javascript. To deploy
the app to a supported platform, you need to first install PhoneGap/Cordova utility:

1. Download and install [Node.js](http://nodejs.org). We need `npm` command to install
Cordova utility.

2. Download and install [git client](http://git-scm.com).

3. Install `phonegap` using `npm` (You may need sudo on Unix system). 

		$ sudo npm install -g phonegap

You can invoke `phonegap` command after install the utility.

### Before Building

Before building the app, you need to clone this repo to your local machine:

		$ git clone https://github.com/snaden/assassinsFrontend.git

You should be able to run `phonegap` command under `assassinsFrontend` directory.

The `www` folder includes the HTML, CSS, JavaScript files for the front end app. The
build program refers to theses files when building platform specific code. These files
can be tested using a normal web browser before deploying them to devices.
There are two JavaScript Libraries we are using: 
[jQuery](http://jquery.com) and [jQuery Countdown](http://keith-wood.name/countdown.html).

You need to point the app to your API server by changing the second line of 
`www/js/main.js`:

		window._app_base = "<YOUR-SERVER-API-PATH>";

### Building PhoneGap

To build PhoneGap for iOS or Android platform, run the following command:

		phonegap build ios
		phonegap build android

The `build` command compiles an application for the platform of your choice. You may
need to install additional packages according to the instruction of `build` command.
For iOS platform, we have added native Objective-C code under `platforms/ios` to support
iOS 7 features such as Status Bar. You open `platforms/ios/Assassins.xcodeproj` using
Xcode to make any iOS platform specific changes according to your need. For Android
plaftform, we did not include any platform specific tweak.

### Deploying PhoneGap

To run the app, you need to run the following command for iOS or Android platform:

		phonegap run ios
		phonegap run android

By default the `run` command automatically deploys the app to the simulator if you do not 
have any device connected to your computer. You may be asked to install some dependent 
packages or specify the path of your Android SDK. Alternatively, for iOS platform, 
you can deploy the app using Xcode by opening up the 
project file under `platforms/ios/Assassins.xcodeproj`.  We recommend using Xcode to run the app on iOS.

If you have your development phone connected to your computer, `run` command
deploys the app to your device. Notice that you need to enable USB Debugging on Android 
before deploying the app. For iOS, it is more complicated. You need to have a paid
developer account for on-device testing and set up your phone for development. If you have
deployed apps on your iOS devices before, `run` command should just work.

##ATTENTION USERS
Please see the document in this repository called "user_docs.md" to see how you can set up your own account.  Unfortunately this must be done from the back end as we haven't implemented this feature on the front end.  



















