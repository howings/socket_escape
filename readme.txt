Socket Escape is a Real-time multiplayer online escape room game demo created with Zim.js framework. 
This is a small project for PWA and real-time socket game test.
Each room maximum fits 4 players.
As soon as one player of the team wins, game ends. 


***Information about ZIM.js framework for creative HTML canvas animation.***
ZIM Zapps - PWA Tool Instructions 
See https://zimjs.com/zapps 


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
GENERAL 
ZIM at https://zimjs.com is a JavaScript Canvas Framework to code creativity!
ZIM can be used for desktop or mobile apps.
Progressive Web Apps (PWA) can be run like native apps.
PWA replaces 70 steps using GitHub, Cordova, PhoneGap Build, signing keys, etc.
The system is better now and the ZIM Zapps tool makes it even easier.
Please consider a donation to https://zimjs.com/donate - on Patreon.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
USING THE FORM TOOL 
Most likely you have already used the form tool to get this readme.
Note that if you leave the fields blank then you will get 
a ZIP file with default values to build from.
The tool will add a PWA() call to the code if the HTML app page 
has a ZIM Frame call with the traditional template format.
If your main app script is in a remote js file then manually add the PWA() 
See https://zimjs.com/docs.html?item=PWA for options.

NOTE: the PWA() code requires ZIM Cat 04 or later. 
The PWA() code just makes a message for user to Add to Home Screen (A2HS).
A custom message could be used instead with older versions of ZIM.
See https://zimjs.com/pwa for such a custom message.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
USING THE ZIP 
1. The ZIM Zapps ZIP includes a zapp.html page
Replace your app HTML page with the contents of zapp.html file 

2. Add the rest of the files to your app directory.
These will include:

    manifest.json - holds app information
    serviceworker.js - holds links to cache local assets
    libraries/ - with local versions of CreateJS and ZIM
    icon/ - various size icons called in manifest 
    readme.txt - this file

3. Make sure that all your assets and scripts use local URLS
and that the relative path to the files is correct in the serviceworker.js
The tool will convert CDN links to local libraries/ links.
Local paths ensure that the app can be used without Internet
and that it will load quickly as files will be loaded from cache.

// For example - if you import a script called scripts/custom.js 
// and the ZIM code has:

    const assets = ["pic.png", "sound.mp3", {font:"FFF", src:"FFF.ttf"}];
    const path = ["assets/"];
    const frame = new Frame({assets, path});

// Then you should have added:
// "assets/" to the PATH field of the ASSETS section of the Tool form
// and "pic.png", "sound.mp3", "FFF.ttf" under FILE NAMES

// The serviceworker.js file would then have the following:
// Keep the ./ and then the name of your app HTML file
// Note the libraries/ folder with the CDN scripts 
// and the call to the local custom script

    var filesToCache = [
      './',
      'index.html',
      'libraries/1.3.2/createjs.js',
      'libraries/cat/04/zim.js',
      'scripts/custom.js',
      'assets/pic.png',
      'assets/sound.mp3',
      'assets/FFF.ttf'
    ];

// These can be manually added or adjusted afterwards


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CONCLUSION 
Please join us at https://zimjs.com/slack or https://zimjs.com/discord 
to report any issues, get involved in solutions and community!
Share some examples as well!  You will get free user testing ;-).

All the best,

Dr Abstract, Pragma, OwMe and the ZIM Team

