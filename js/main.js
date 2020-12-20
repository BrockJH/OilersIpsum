
$(function() {
    jQuery.extend({
        random: function(c) {
            return Math.floor(c * (Math.random() % 1))
        },
        randomBetween: function(d, c) {
            return d + jQuery.random(c - d + 1)
        }
    });
    function b(d, c) {
        if (!Array.indexOf) {
            Array.prototype.indexOf = function(m) {
                var k = 0
                  , j = this.length;
                for (; j--; k++) {
                    if (this[k] == m) {
                        return k
                    }
                }
                return -1
            }
        }
        var f, g, e = [], h = c || 1;
        if (d instanceof Array === false || h > (f = d.length)) {
            return null
        }
        while (e.length != h) {
            g = Math.floor(Math.random() * f);
            if (e.indexOf(g) == -1) {
                e.push(g)
            }
        }
        return h == 1 ? e[0] : e
    }
    function a(c) {
        return c.charAt(0).toUpperCase() + c.substr(1)
    }
    $("#generator").submit(function() {
        $("#output p").remove();
        var e = Array("Zack Kassian scores!",
"A nice cut in by Zack Kassian",
"He's got quick hands",
"Great save by Mike Smith",
"Wow!",
"A chance for McDavid,",
"Connor McDavid waits...  What a play!!!",
"What a goal!",
"Connor McDavid, welcome back!",
"Classic Conner makes it three to nothing for the Oilers",
"Leon Draisaitl, McDavid, Draisaitl!  OHHHHHHHH!!!",
"It's a three on one for the Oilers",
"What a save by Koskinen!",
"The big Fin stole that goal!",
"That's the save of the game",
"lightning fast",
"1983–84 Stanley Cup Champions.",
"1984–85 Stanley Cup Champions.",
"1986–87 Stanley Cup Champions.",
"1987–88 Stanley Cup Champions.",
"1989–90 Stanley Cup Champions.",
"1982–83 Western Conference Champions.",	
"1983–84 Western Conference Champions.",
"1984–85 Western Conference Champions.",
"1986–87 Western Conference Champions.",
"1987–88 Western Conference Champions.",
"1989–90 Western Conference Champions.",
"2005–06 Western Conference Champions.",
"Five time Stanley Cup Champions.",
"Seven time Western Congrence Champions",
"1985–86 Preidents' Trophy Winner",
"1986–87 Presidents' Trophy Winner",
"Wayne Gretzky 1980–81 Art Ross Trophy Winner.",
"Wayne Gretzky 1981–82 Art Ross Trophy Winner.",
"Wayne Gretzky 1983–84 Art Ross Trophy Winner.",
"Wayne Gretzky 1984–85 Art Ross Trophy Winner.",
"Wayne Gretzky 1985–86 Art Ross Trophy Winner.",
"Wayne Gretzky 1986–87 Art Ross Trophy Winner.",
"Connor McDavid 2016-17 Art Ross Trophy Winner.",
"Connor McDavid 2017–18 Art Ross Trophy Winner.",
"Leon Draisaitl 2019-20 Art Ross Trophy Winner.",
"Connor McDavid again!",
"McDavid looking for Draisaitl,",
"What a play by Yamamoto and Draisaitl!",
"Leon Draisaitl a career high one-hundred and ten points.",
"Four goals for Leon Driasaitl, what a game for number 29.",
"What a shot by Nugent-Hopkins!",
"And now Smith coming up to center ice...",
"It's Tkchuck and Bear!",
"Bear comes over the top with a right!",
"Smith and Talbot are going to go!",
"What a move. What a play. What a GOAL!",
"Absoultely undressed him",
"Nurse passes the puck,",
"Kelfbom from the point!",
"Tkachuck. Kassian.  An anticipated fight",
"and now Nugent-Hopkins and Monahan are going to go",
"Nugent-Hopkins trying to come back",
"here's a left from Nugent-Hopkins.",
"the battle of Alberta",
"Turtlechuck",
"what a huge hit from Leon Draisaitl",
"Darnell Nurse says I'm going to remember that",
"Kassian started swinging, Tkachuck was not ready to go.", 
"Here he comes... Scores!",
"Nugent-Hopkins scores!",
"Neal shoots!",
"wide open net",
"Tkchuck turtles from Kassian again",
"Alex Chiasson put it home", "Nice save by Smith",
"Nice save by Koskinen",
"Mikko Koskinen with a hot glove hand",
"the puck goes down the ice,",
"Another Connor McDavid beauty!",
"Rebound in front",
"Save by Koskinen",
"Save by Smith",
"Great save by Smith!",
"Fantastic save", "now a chance for McDavid",
"McDavid moves in with Draisaitl",
"Here he comes... Scores!", 
"The Edmonton Oilers with their first pick would like to sign from the Erie Ottors; Connor McDavid.",
"Neal to McDavid,",
"Nugent-Hopkins out in front",
"Neal looking open",
"Yamamoto with the assist",
"Yamamoto throws his stick in the air","William Lagesson assigned to European Team Kristianstads IK-Sweden",
"Dominik Kahun assigned to European Team EHC Munchen-Germany",
"William Lagesson re-signed Two-year contract",
"Dominik Kahun signed as Free Agent One-year contract",
"Kris Russell contract extended One-year contract extension",
"Mike Smith signed as Free Agent One-year contract",
"Tyson Barrie signed as Free Agent One-year contract",
"Cameron Hebig became Unrestricted Free Agent Not tendered a qualifying offer",
"Alan Quine signed as Free Agent One-year contract",
"Tyler Ennis became Unrestricted Free Agent",
"Tyler Ennis signed as Free Agent One-year contract",
"Matt Benning became Unrestricted Free Agent Not tendered a qualifying offer",
"Josh Currie became Unrestricted Free Agent",
"Brandon Manning became Unrestricted Free Agent",
"Anton Forsberg signed as Free Agent One-year contract",
"Logan Day became Unrestricted Free Agent Not tendered a qualifying offer",
"Markus Granlund became Unrestricted Free Agent",
"Brad Malone became Unrestricted Free Agent",
"Angus Redmond became Unrestricted Free Agent Not tendered a qualifying offer",
"Shane Starrett became Unrestricted Free Agent",
"Nolan Vesey became Unrestricted Free Agent Not tendered a qualifying offer",
"Kyle Turris signed as Free Agent Two-year contract",
"Mike Smith became Unrestricted Free Agent",
"Ryan Mantha became Unrestricted Free Agent Not tendered a qualifying offer",
"Mike Green became Unrestricted Free Agent",
"Seth Griffith signed as Free Agent Two-year, two-way contract",
"Andreas Athanasiou became Unrestricted Free Agent Not tendered a qualifying offer",
"Riley Sheahan became Unrestricted Free Agent",
"Keegan Lowe became Unrestricted Free Agent",
"Tomas Jurco became Unrestricted Free Agent",
"Ryan Kuffner became Unrestricted Free Agent Not tendered a qualifying offer",
"Olivier Rodrigue assigned to European Team Graz 99ers-Austria",
"Jesse Puljujarvi assigned to European Team Karpat Oulu-Finland",
"Jesse Puljujarvi re-Signed Two-year contract",
"Adam Cracknell assigned to European Team Esbjerg Energy-Denmark",
"Patrick Russell assigned to European Team Rungsted Seier Capital-Denmark",
"Raphael Lavoie assigned to European Team Vasby IK-Sweden",
"Tyler Benson assigned to European Team GCK Lions-Switzerland",
"Cooper Marody assigned to European Team Dornbirn Bulldogs-Austria",
"Adam Cracknell signed as Free Agent One-year, two-way contract",
"Evan Bouchard assigned to European Team Sodertalje SK-Sweden",
"Gaetan Haas assigned to European Team SC Bern-Switzerland",
"Ryan McLeod assigned to European Team EV Zug-Switzerland",
"Patrick Russell contract extended One-year contract extension",
"Mike Green retired",
"Joakim Nygard assigned to European Team Farjestad BK-Sweden",
"Philip Broberg assigned to European Team Skelleftea AIK-Sweden",
"Mike Green returned from Leave of Absence",
"Kirill Maximov assigned to European Team CSKA Moscow-KHL",
"Markus Niemelainen assigned to European Team Assat Pori-Finland",
"Dylan Wells sent to minors Bakersfield-AHL",
"Olivier Rodrigue sent to minors Moncton-QMJHL",
"Theodor Lennstrom assigned to European Team Frolunda HC-Sweden",
"Dmitry Samorukov assigned to European Team CSKA Moscow-KHL",
"William Lagesson called up from minors from Bakersfield-AHL",
"Dylan Wells called up from minors from Bakersfield-AHL",
"Evan Bouchard called up from minors from Bakersfield-AHL",
"Olivier Rodrigue called up from minors from Moncton-QMJHL",
"Stuart Skinner called up from minors from Bakersfield-AHL",
"Tyler Benson called up from minors from Bakersfield-AHL",
"Cooper Marody called up from minors from Bakersfield-AHL",
"Ryan McLeod called up from minors from Bakersfield-AHL",
"Mike Green granted Leave of Absence Opted out of 2020 playoffs", "Tippett does not look happy about that call.", "Neal puts one in the back of the net" );
        var g = e.length;
        var k = $("#pNum").val();
        var m = $("input[type=radio]:checked").val();
        var h = 0;
        var d = 0;
        var f = 0;
        var c = false;
      
        if ($("input[type=checkbox]:checked").val() == "true") {
            c = true
        }
        switch (m) {
        case "small":
            f = 4;
            d = 9;
            break;
        case "medium":
            f = 8;
            d = 12;
            break;
        case "large":
            f = 10;
            d = 20;
            break
        }
        for (i = 0; i < k; i++) {
            var l = "<p>";
            if (c == true && i == 0) {
                var j = "Let's go Oilers! "
            } else {
                j = a(e[b(e)]) + " "
            }
            h = $.randomBetween(f, d);
            for (x = 0; x <= h; x++) {
                if (x % 7 == 1) {
                    j += e[b(e)] + ". " + a(e[b(e)]) + " "
                } else {
                    j += e[b(e)] + " "
                }
            }
            l += $.trim(j) + ".</p>";
            $("#output").append(l)
        }
        return false
    })
});
