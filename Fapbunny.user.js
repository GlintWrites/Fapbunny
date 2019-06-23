// ==UserScript==
// @name         Fapbunny
// @namespace    https://github.com/GlintWrites
// @version      1.4.1
// @license      Unlicense
// @description  A key-binding utility for one-handed keyboard navigation of Inkbunny ;D
// @author       Glint
// @include      *://inkbunny.net/s/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @homepageURL  https://github.com/GlintWrites/Fapbunny
// @supportURL   https://github.com/GlintWrites/Fapbunny/issues
// @downloadURL  https://github.com/GlintWrites/Fapbunny/raw/master/Fapbunny.user.js
// @updateURL    https://github.com/GlintWrites/Fapbunny/raw/master/Fapbunny.user.js
// ==/UserScript==

(function() {
    'use strict';

    //Compatibility for existing instances of jQuery on Inkbunny.
    var j = $.noConflict();

    //Generate help alert if this is the first time we run.
    var firstRunFlag = localStorage.getItem('hasBeenRun');
    if(!firstRunFlag){
        alert("Fapbunny installed successfully!\n\n"+
              "Controls:\n"+
              "\tLeft Arrow or A: Previous item in Pool.\n"+
              "\tRight Arrow or D: Next item in Pool.\n"+
              "\tUp Arrow or W: Previous item in Submission Files.\n"+
              "\tDown Arrow or S: Next item in Submission Files.\n\n"+
              "Thanks, and enjoy!\n"+
              "\t-Glint");
        localStorage.setItem('hasBeenRun', true);
    }

    //Instantly get to the top of the image
    var pos = j(".elephant.elephant_white.magicboxParent").position();

    if(pos){
        scrollTo(0, pos.top);
    }

    //Event binding for key presses
    document.onkeydown = checkKey;

    //Handles behaviour when keys are pressed
    function checkKey(e){
        e = e || window.event;

        // -- FILE SET NAVIGATION --
        //If you press left or A, go to the previous file
        if(e.keyCode == '38' || e.keyCode == '87'){
            var previousFile = j("#files_area > div a:contains('previous')").attr('href');
            if(previousFile){
                window.location.href = previousFile;
            }
        }
        //If you press right or D, go to the next file.
        else if(e.keyCode == '40' || e.keyCode == '83'){
            var nextFile = j("#files_area div a:contains('next')").attr('href');
            if(nextFile){
                window.location.href = nextFile;
            }
        }

        // -- POOL NAVIGATION --
        //If you press W or up, go to the previous pool item.
        if(e.keyCode == '37' || e.keyCode == '65'){
            var previousPoolItem = j(".pooltable_arrows[title='Previous']").attr('href');
            if(previousPoolItem){
                window.location.href = previousPoolItem;
            }
            console.log(previousPoolItem);
        }
        //If you press S or down, go to the next pool item.
        else if(e.keyCode == '39' || e.keyCode == '68'){
            var nextPoolItem = j(".pooltable_arrows[title='Next']").attr('href');
            if(nextPoolItem){
                window.location.href = nextPoolItem;
            }
        }
    }
})();