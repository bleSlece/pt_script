// ==UserScript==
// @name         GGn Repost Check
// @namespace    Qwerty33
// @version      0.1
// @description  try to take over the world!
// @author       qwerty33
// @match        https://gazellegames.net/torrents.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gazellegames.net
// @require      https://code.jquery.com/jquery-3.7.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...

    var a = $('.group')
    
    var search_anchor = 'https://pterclub.com/torrents.php?tag_exclusive=&tag_internal=&tag_mandarin=&tag_cantonese=&tag_doityourself=&tag_master=&cat409=1&incldead=0&spstate=0&inclbookmarked=0&check=&helper=&search=SearchAnchor&search_area=0&search_mode=0'
    a.each(function (index) {
        var gp = $(this).find('#groupname')
        var game_name = gp.text()
        var search_link = search_anchor.replace('SearchAnchor', game_name)
        var search_html = '<span id="hyphen">---</span> <span><a href="'+search_link+'" target="_blank">Search</a></span>'
        gp.after(search_html)
    })

    console.log('GGn Repost Check Finish.')
})();
