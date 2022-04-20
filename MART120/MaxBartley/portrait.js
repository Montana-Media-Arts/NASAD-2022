// variables
var diameter = 1;
var diameter2 = 40;
var growth = 1;
var growth2 = 1;
var x1 = 102;
var x2 = 422;
var y1 = 302; 
var y2 = 862;
var x3 = 382;
var y3 = 582;            
var size = 8;
var count = 0;
var sizeDirection = 1;

function setup()
{
    createCanvas(684,1004);
    // randomized speeds
    movement1 = floor(random() * 10) + 1;
    movement2 = floor(random() * 10) + 1;
    movement3 = floor(random() * 10) + 1;
    movement4 = floor(random() * 10) + 1;
    movement5 = floor(random() * 10) + 1;
    /* 
        I was sure this was unnecessary
        but without it the circle that moves 
        diagonally wouldn't work correctly
    */
    movement6 = movement5
}

function draw()
{
    // background
    fill(220);
    square(0,0,342);
    square(342,0,342);
    fill(200);
    square(342,342,342);
    square(0,342,342);
    fill(180);
    square(0,664,342);
    square(342,664,342);

    // line 1
    fill(165,204,201);
    circle(22,22,diameter);
    fill(160,199,196);
    circle(62,22,diameter);
    // skipped circle  
    fill(131,177,177);
    circle(142,22,diameter);
    fill(136,188,186);
    circle(182,22,diameter);
    fill(129,171,167);
    circle(222,22,diameter);
    fill(185,211,212);
    circle(262,22,diameter);
    fill(152,191,188);
    circle(302,22,diameter);
    fill(189,226,218);
    circle(342,22,diameter);
    fill(190,215,209);
    circle(382,22,diameter);
    fill(194,226,213);
    circle(422,22,diameter);
    fill(164,198,197);
    circle(462,22,diameter);
    fill(169,216,210);
    circle(502,22,diameter);
    fill(167,216,212);
    circle(542,22,diameter);
    fill(165,206,206);
    circle(582,22,diameter);
    fill(198,225,218);
    circle(622,22,diameter);
    fill(191,217,208);
    circle(662,22,diameter);
  
    // line 2
    fill(190,206,195);
    circle(22,62,diameter2);
    fill(167,200,191);
    circle(62,62,diameter2);
    fill(167,200,191);
    circle(102,62,diameter2);
    fill(167,200,191);
    circle(142,62,diameter2);
    fill(197,216,210);
    circle(182,62,diameter2);
    fill(197,217,208);
    circle(222,62,diameter2);
    fill(153,199,186);
    circle(262,62,diameter2);
    fill(182,212,214);
    circle(302,62,diameter2);
    fill(202,229,222);
    circle(342,62,diameter2);
    fill(186,218,207);
    circle(382,62,diameter2);
    fill(194,221,212);
    circle(422,62,diameter2);
    fill(170,208,195);
    circle(462,62,diameter2);
    fill(207,226,220);
    circle(502,62,diameter2);
    fill(177,210,199);
    circle(542,62,diameter2);
    fill(210,229,223);
    circle(582,62,diameter2);
    fill(173,205,200);
    circle(622,62,diameter2);
    fill(209,232,224);
    circle(662,62,diameter2);
   
    // line 3
    fill(159,186,177);
    circle(22,102,diameter);
    fill(171,198,191);
    circle(62,102,diameter);
    fill(182,208,195);
    circle(102,102,diameter);
    fill(188,216,204);
    circle(142,102,diameter);
    fill(192,212,201);
    circle(182,102,diameter);
    fill(187,209,206);
    circle(222,102,diameter);
    fill(176,205,196);
    circle(262,102,diameter);
    fill(177,211,212);
    circle(302,102,diameter);
    fill(158,194,192);
    circle(342,102,diameter);
    fill(161,201,190);
    circle(382,102,diameter);
    fill(193,216,208);
    circle(422,102,diameter);
    fill(191,223,212);
    circle(462,102,diameter);
    fill(188,220,209);
    circle(502,102,diameter);
    fill(201,237,225);
    circle(542,102,diameter);
    fill(183,213,203);
    circle(582,102,diameter);
    fill(210,233,225);
    circle(622,102,diameter);
    fill(207,233,222);
    circle(662,102,diameter);

    // line 4
    fill(150,192,188);
    circle(22,142,diameter2);
    fill(156,192,180);
    circle(62,142,diameter2);
    fill(155,197,183);
    circle(102,142,diameter2);
    fill(181,211,201);
    circle(142,142,diameter2);
    fill(174,201,192);
    circle(182,142,diameter2);
    fill(188,209,202);
    circle(222,142,diameter2);
    fill(178,205,196);
    circle(262,142,diameter2);
    fill(134,148,124);
    circle(302,142,diameter2);
    fill(104,103,99);
    circle(342,142,diameter2);
    fill(150,165,144);
    circle(382,142,diameter2);
    fill(180,212,197);
    circle(422,142,diameter2);
    fill(184,214,214);
    circle(462,142,diameter2);
    fill(154,200,198);
    circle(502,142,diameter2);
    fill(200,230,220);
    circle(542,142,diameter2);
    fill(171,209,198);
    circle(582,142,diameter2);
    fill(207,228,219);
    circle(622,142,diameter2);
    fill(195,222,213);
    circle(662,142,diameter2);

    // line 5
    fill(151,193,189);
    circle(22,182,diameter);
    fill(145,187,173);
    circle(62,182,diameter);
    fill(174,207,196);
    circle(102,182,diameter);
    fill(163,205,191);
    circle(142,182,diameter);
    fill(151,202,195);
    circle(182,182,diameter);
    fill(158,185,176);
    circle(222,182,diameter);
    fill(92,96,75);
    circle(262,182,diameter);
    fill(85,66,36);
    circle(302,182,diameter);
    fill(139,137,98);
    circle(342,182,diameter);
    fill(150,151,107);
    circle(382,182,diameter);
    // skipped circle
    fill(194,226,215);
    circle(462,182,diameter);
    fill(189,222,211);
    circle(502,182,diameter);
    fill(196,226,216);
    circle(542,182,diameter);
    fill(198,226,214);
    circle(582,182,diameter);
    fill(202,229,220);
    circle(622,182,diameter);
    fill(199,235,223);
    circle(662,182,diameter);

    // line 6
    fill(180,212,201);
    circle(22,222,diameter2);
    fill(179,209,197);
    circle(62,222,diameter2);
    fill(167,192,188);
    circle(102,222,diameter2);
    fill(163,189,180);
    circle(142,222,diameter2);
    fill(162,193,195);
    circle(182,222,diameter2);
    fill(84,86,72);
    circle(222,222,diameter2);
    fill(126,123,78);
    circle(262,222,diameter2);
    fill(168,168,130);
    circle(302,222,diameter2);
    fill(227,222,190);
    circle(342,222,diameter2);
    fill(192,188,150);
    circle(382,222,diameter2);
    fill(138,145,103);
    circle(422,222,diameter2);
    fill(142,157,138);
    circle(462,222,diameter2);
    fill(193,228,224);
    circle(502,222,diameter2);
    fill(172,217,212);
    circle(542,222,diameter2);
    fill(196,226,228);
    circle(582,222,diameter2);
    fill(206,229,221);
    circle(622,222,diameter2);
    fill(206,231,228);
    circle(662,222,diameter2);

    // line 7
    fill(158,194,194);
    circle(22,262,diameter);
    fill(167,208,204);
    circle(62,262,diameter);
    fill(163,193,193);
    circle(102,262,diameter);
    fill(160,198,195);
    circle(142,262,diameter);
    fill(162,195,186);
    circle(182,262,diameter);
    fill(117,137,102);
    circle(222,262,diameter);
    fill(188,192,155);
    circle(262,262,diameter);
    fill(214,209,169);
    circle(302,262,diameter);
    fill(232,218,191);
    circle(342,262,diameter);
    fill(222,215,187);
    circle(382,262,diameter);
    fill(163,170,128);
    circle(422,262,diameter);
    fill(143,138,106);
    circle(462,262,diameter);
    fill(184,207,199);
    circle(502,262,diameter);
    fill(182,216,215);
    circle(542,262,diameter);
    fill(191,217,208);
    circle(582,262,diameter);
    fill(189,222,211);
    circle(622,262,diameter);
    fill(208,229,222);
    circle(662,262,diameter);

    // line 8
    fill(161,203,199);
    circle(22,302,diameter2);
    fill(168,204,202);
    circle(62,302,diameter2);
    // skipped circle
    fill(163,198,191);
    circle(142,302,diameter2);
    fill(110,151,137);
    circle(182,302,diameter2);
    fill(133,154,113);
    circle(222,302,diameter2);
    fill(165,181,144);
    circle(262,302,diameter2);
    fill(212,208,179);
    circle(302,302,diameter2);
    fill(222,216,184);
    circle(342,302,diameter2);
    fill(218,214,177);
    circle(382,302,diameter2);
    fill(165,172,139);
    circle(422,302,diameter2);
    fill(143,137,111);
    circle(462,302,diameter2);
    fill(156,173,165);
    circle(502,302,diameter2);
    fill(174,215,211);
    circle(542,302,diameter2);
    fill(183,213,213);
    circle(582,302,diameter2);
    fill(184,216,215);
    circle(622,302,diameter2);
    fill(191,222,216);
    circle(662,302,diameter2);

    // line 9
    fill(164,190,189);
    circle(22,342,diameter);
    fill(173,204,206);
    circle(62,342,diameter);
    fill(144,185,181);
    circle(102,342,diameter);
    fill(137,183,180);
    circle(142,342,diameter);
    fill(97,117,92);
    circle(182,342,diameter);
    fill(133,137,100);
    circle(222,342,diameter);
    fill(115,136,95);
    circle(262,342,diameter);
    fill(126,130,95);
    circle(302,342,diameter);
    fill(162,159,116);
    circle(342,342,diameter);
    fill(221,207,168);
    circle(382,342,diameter);
    fill(187,181,147);
    circle(422,342,diameter);
    fill(138,133,101);
    circle(462,342,diameter);
    fill(147,161,144);
    circle(502,342,diameter);
    fill(165,210,207);
    circle(542,342,diameter);
    fill(165,220,214);
    circle(582,342,diameter);
    fill(188,220,219);
    circle(622,342,diameter);
    fill(186,221,217);
    circle(662,342,diameter);

    // line 10
    fill(161,196,198);
    circle(22,382,diameter2);
    fill(171,197,188);
    circle(62,382,diameter2);
    fill(161,196,192);
    circle(102,382,diameter2);
    fill(157,193,191);
    circle(142,382,diameter2);
    fill(129,174,143);
    circle(182,382,diameter2);
    fill(73,108,88);
    circle(222,382,diameter2);
    fill(196,202,164);
    circle(262,382,diameter2);
    fill(124,149,117);
    circle(302,382,diameter2);
    fill(178,177,146);
    circle(342,382,diameter2);
    fill(237,217,182);
    circle(382,382,diameter2);
    fill(197,193,146);
    circle(422,382,diameter2);
    fill(180,175,145);
    circle(462,382,diameter2);
    fill(207,213,201);
    circle(502,382,diameter2);
    fill(169,208,205);
    circle(542,382,diameter2);
    fill(179,213,212);
    circle(582,382,diameter2);
    fill(173,218,213);
    circle(622,382,diameter2);
    fill(180,216,214);
    circle(662,382,diameter2);

    // line 11
    fill(161,197,187);
    circle(22,422,diameter);
    fill(177,219,207);
    circle(62,422,diameter);
    fill(164,205,201);
    circle(102,422,diameter);
    fill(192,220,221);
    circle(142,422,diameter);
    fill(150,182,167);
    circle(182,422,diameter);
    fill(145,173,115);
    circle(222,422,diameter);
    fill(226,216,180);
    circle(262,422,diameter);
    fill(197,204,162);
    circle(302,422,diameter);
    fill(205,205,153);
    circle(342,422,diameter);
    fill(216,209,157);
    circle(382,422,diameter);
    fill(189,180,141);
    circle(422,422,diameter);
    fill(221,220,199);
    circle(462,422,diameter);
    fill(208,224,211);
    circle(502,422,diameter);
    fill(145,193,195);
    circle(542,422,diameter);
    fill(187,226,225);
    circle(582,422,diameter);
    fill(159,209,199);
    circle(622,422,diameter);
    fill(194,228,229);
    circle(662,422,diameter);

    // line 12
    fill(179,209,207);
    circle(22,462,diameter2);
    fill(187,215,216);
    circle(62,462,diameter2);
    fill(175,199,201);
    circle(102,462,diameter2);
    fill(160,199,196);
    circle(142,462,diameter2);
    fill(174,199,193);
    circle(182,462,diameter2);
    fill(96,92,57);
    circle(222,462,diameter2);
    fill(157,136,93);
    circle(262,462,diameter2);
    fill(193,185,148);
    circle(302,462,diameter2);
    fill(165,157,110);
    circle(342,462,diameter2);
    fill(156,136,85);
    circle(382,462,diameter2);
    fill(163,140,96);
    circle(422,462,diameter2);
    fill(215,196,164);
    circle(462,462,diameter2);
    fill(185,221,219);
    circle(502,462,diameter2);
    fill(142,195,187);
    circle(542,462,diameter2);
    fill(188,220,217);
    circle(582,462,diameter2);
    fill(186,225,224);
    circle(622,462,diameter2);
    fill(171,213,211);
    circle(662,462,diameter2);

    // line 13
    fill(162,204,202);
    circle(22,502,diameter);
    fill(173,206,199);
    circle(62,502,diameter);
    fill(181,215,214);
    circle(102,502,diameter);
    fill(172,204,203);
    circle(142,502,diameter);
    fill(173,208,201);
    circle(182,502,diameter);
    fill(89,61,39);
    circle(222,502,diameter);
    fill(161,142,109);
    circle(262,502,diameter);
    fill(150,117,76);
    circle(302,502,diameter);
    fill(178,153,99);
    circle(342,502,diameter);
    fill(211,185,128);
    circle(382,502,diameter);
    fill(190,181,140);
    circle(422,502,diameter);
    fill(196,195,167);
    circle(462,502,diameter);
    fill(178,217,216);
    circle(502,502,diameter);
    fill(164,206,204);
    circle(542,502,diameter);
    fill(168,208,207);
    circle(582,502,diameter);
    fill(178,221,214);
    circle(622,502,diameter);
    fill(177,216,215);
    circle(662,502,diameter);

    // line 14
    fill(152,197,194);
    circle(22,542,diameter2);
    fill(144,186,185);
    circle(62,542,diameter2);
    fill(178,210,209);
    circle(102,542,diameter2);
    fill(155,189,188);
    circle(142,542,diameter2);
    fill(174,210,198);
    circle(182,542,diameter2);
    fill(102,111,106);
    circle(222,542,diameter2);
    fill(194,132,73);
    circle(262,542,diameter2);
    fill(179,134,77);
    circle(302,542,diameter2);
    fill(123,83,48);
    circle(342,542,diameter2);
    fill(194,187,141);
    circle(382,542,diameter2);
    fill(210,209,178);
    circle(422,542,diameter2);
    fill(111,157,155);
    circle(462,542,diameter2);
    fill(158,200,198);
    circle(502,542,diameter2);
    fill(172,223,216);
    circle(542,542,diameter2);
    fill(166,208,206);
    circle(582,542,diameter2);
    fill(172,211,212);
    circle(622,542,diameter2);
    fill(176,218,214);
    circle(662,542,diameter2);

    // line 15
    fill(157,193,189);
    circle(22,582,diameter);
    fill(167,203,201);
    circle(62,582,diameter);
    fill(177,213,211);
    circle(102,582,diameter);
    fill(148,194,191);
    circle(142,582,diameter);
    fill(178,210,197);
    circle(182,582,diameter);
    fill(95,144,149);
    circle(222,582,diameter);
    fill(130,95,75);
    circle(262,582,diameter);
    fill(164,119,54);
    circle(302,582,diameter);
    fill(182,179,134);
    circle(342,582,diameter);
    // skipped circle
    fill(183,203,194);
    circle(422,582,diameter);
    fill(139,175,161);
    circle(462,582,diameter);
    fill(169,190,181);
    circle(502,582,diameter);
    fill(144,180,168);
    circle(542,582,diameter);
    fill(174,214,213);
    circle(582,582,diameter);
    fill(183,218,212);
    circle(622,582,diameter);
    fill(177,217,216);
    circle(662,582,diameter);

    // line 16
    fill(162,198,198);
    circle(22,622,diameter2);
    fill(166,202,200);
    circle(62,622,diameter2);
    fill(170,209,204);
    circle(102,622,diameter2);
    fill(132,177,172);
    circle(142,622,diameter2);
    fill(115,161,159);
    circle(182,622,diameter2);
    fill(71,114,104);
    circle(222,622,diameter2);
    fill(214,221,205);
    circle(262,622,diameter2);
    fill(188,195,144);
    circle(302,622,diameter2);
    fill(218,212,188);
    circle(342,622,diameter2);
    fill(156,180,158);
    circle(382,622,diameter2);
    fill(146,184,169);
    circle(422,622,diameter2);
    fill(169,193,177);
    circle(462,622,diameter2);
    fill(131,171,163);
    circle(502,622,diameter2);
    fill(163,197,180);
    circle(542,622,diameter2);
    fill(131,177,174);
    circle(582,622,diameter2);
    fill(142,193,186);
    circle(622,622,diameter2);
    fill(164,211,203);
    circle(662,622,diameter2);

    // line 17
    fill(184,209,203);
    circle(22,662,diameter);
    fill(146,187,173);
    circle(62,662,diameter);
    fill(124,158,157);
    circle(102,662,diameter);
    fill(176,199,189);
    circle(142,662,diameter);
    fill(117,156,138);
    circle(182,662,diameter);
    fill(130,162,151);
    circle(222,662,diameter);
    fill(214,212,199);
    circle(262,662,diameter);
    fill(221,216,187);
    circle(302,662,diameter);
    fill(148,177,157);
    circle(342,662,diameter);
    fill(163,187,165);
    circle(382,662,diameter);
    fill(120,165,158);
    circle(422,662,diameter);
    fill(170,192,180);
    circle(462,662,diameter);
    fill(101,141,143);
    circle(502,662,diameter);
    fill(173,218,189);
    circle(542,662,diameter);
    fill(142,181,180);
    circle(582,662,diameter);
    fill(109,160,155);
    circle(622,662,diameter);
    fill(143,192,197);
    circle(662,662,diameter);

    // line 18
    fill(145,182,175);
    circle(22,702,diameter2);
    fill(124,163,162);
    circle(62,702,diameter2);
    fill(109,151,147);
    circle(102,702,diameter2);
    fill(154,182,168);
    circle(142,702,diameter2);
    fill(140,173,164);
    circle(182,702,diameter2);
    fill(123,136,126);
    circle(222,702,diameter2);
    fill(231,219,195);
    circle(262,702,diameter2);
    fill(194,209,190);
    circle(302,702,diameter2);
    fill(153,198,178);
    circle(342,702,diameter2);
    fill(108,144,132);
    circle(382,702,diameter2);
    fill(145,189,176);
    circle(422,702,diameter2);
    fill(136,163,156);
    circle(462,702,diameter2);
    fill(178,202,188);
    circle(502,702,diameter2);
    fill(163,194,176);
    circle(542,702,diameter2);
    fill(150,194,179);
    circle(582,702,diameter2);
    fill(148,179,164);
    circle(622,702,diameter2);
    fill(168,195,186);
    circle(662,702,diameter2);

    // line 19
    fill(157,182,187);
    circle(22,742,diameter);
    fill(88,134,131);
    circle(62,742,diameter);
    fill(109,160,155);
    circle(102,742,diameter);
    fill(159,175,162);
    circle(142,742,diameter);
    fill(125,155,145);
    circle(182,742,diameter);
    fill(125,141,131);
    circle(222,742,diameter);
    fill(114,137,129);
    circle(262,742,diameter);
    fill(104,134,108);
    circle(302,742,diameter);
    fill(127,162,158);
    circle(342,742,diameter);
    fill(161,202,188);
    circle(382,742,diameter);
    fill(160,190,180);
    circle(422,742,diameter);
    fill(147,183,171);
    circle(462,742,diameter);
    fill(160,187,178);
    circle(502,742,diameter);
    fill(151,186,166);
    circle(542,742,diameter);
    fill(150,183,166);
    circle(582,742,diameter);
    fill(171,203,179);
    circle(622,742,diameter);
    fill(189,222,201);
    circle(662,742,diameter);

    // line 20
    fill(155,185,185);
    circle(22,782,diameter2);
    fill(89,138,134);
    circle(62,782,diameter2);
    fill(83,136,126);
    circle(102,782,diameter2);
    fill(135,160,157);
    circle(142,782,diameter2);
    fill(117,147,137);
    circle(182,782,diameter2);
    fill(96,124,112);
    circle(222,782,diameter2);
    fill(77,104,99);
    circle(262,782,diameter2);
    fill(145,168,148);
    circle(302,782,diameter2);
    fill(134,170,158);
    circle(342,782,diameter2);
    fill(137,169,158);
    circle(382,782,diameter2);
    fill(151,184,173);
    circle(422,782,diameter2);
    fill(133,168,164);
    circle(462,782,diameter2);
    fill(68,116,128);
    circle(502,782,diameter2);
    fill(143,183,182);
    circle(542,782,diameter2);
    fill(154,180,167);
    circle(582,782,diameter2);
    fill(165,202,185);
    circle(622,782,diameter2);
    fill(185,209,187);
    circle(662,782,diameter2);

    // line 21
    fill(167,188,179);
    circle(22,822,diameter);
    fill(101,151,148);
    circle(62,822,diameter);
    fill(74,114,124);
    circle(102,822,diameter);
    fill(137,164,155);
    circle(142,822,diameter);
    fill(130,149,143);
    circle(182,822,diameter);
    fill(117,146,128);
    circle(222,822,diameter);
    fill(121,148,139);
    circle(262,822,diameter);
    fill(133,164,149);
    circle(302,822,diameter);
    fill(128,172,157);
    circle(342,822,diameter);
    fill(105,158,150);
    circle(382,822,diameter);
    fill(167,187,176);
    circle(422,822,diameter);
    fill(141,177,177);
    circle(462,822,diameter);
    fill(89,139,146);
    circle(502,822,diameter);
    fill(100,155,150);
    circle(542,822,diameter);
    fill(145,188,169);
    circle(582,822,diameter);
    fill(191,206,185);
    circle(622,822,diameter);
    fill(190,207,189);
    circle(662,822,diameter);

    // line 22
    fill(105,145,144);
    circle(22,862,diameter2);
    fill(72,121,118);
    circle(62,862,diameter2);
    fill(78,116,127);
    circle(102,862,diameter2);
    fill(89,145,136);
    circle(142,862,diameter2);
    fill(105,126,131);
    circle(182,862,diameter2);
    fill(76,109,118);
    circle(222,862,diameter2);
    fill(146,169,161);
    circle(262,862,diameter2);
    fill(130,172,158);
    circle(302,862,diameter2);
    fill(148,189,175);
    circle(342,862,diameter2);
    fill(130,178,178);
    circle(382,862,diameter2);
    fill(177,207,197);
    circle(422,862,diameter2);
    fill(158,190,185);
    circle(462,862,diameter2);
    // skipped circle
    fill(114,155,137);
    circle(542,862,diameter2);
    fill(158,189,174);
    circle(582,862,diameter2);
    fill(175,191,180);
    circle(622,862,diameter2);
    fill(197,214,195);
    circle(662,862,diameter2);

    // line 23
    fill(82,124,123);
    circle(22,902,diameter);
    fill(84,132,134);
    circle(62,902,diameter);
    fill(67,107,115);
    circle(102,902,diameter);
    fill(118,172,159);
    circle(142,902,diameter);
    fill(86,115,110);
    circle(182,902,diameter);
    fill(82,122,121);
    circle(222,902,diameter);
    fill(118,145,136);
    circle(262,902,diameter);
    fill(141,185,170);
    circle(302,902,diameter);
    fill(138,182,167);
    circle(342,902,diameter);
    fill(136,182,179);
    circle(382,902,diameter);
    fill(154,181,172);
    circle(422,902,diameter);
    fill(149,181,178);
    circle(462,902,diameter);
    fill(112,158,171);
    circle(502,902,diameter);
    fill(138,182,167);
    circle(542,902,diameter);
    fill(161,191,165);
    circle(582,902,diameter);
    fill(167,184,165);
    circle(622,902,diameter);
    fill(164,201,182);
    circle(662,902,diameter);

    // line 24
    fill(91,118,109);
    circle(22,942,diameter2);
    fill(85,132,138);
    circle(62,942,diameter2);
    fill(59,99,107);
    circle(102,942,diameter2);
    fill(70,111,113);
    circle(142,942,diameter2);
    fill(73,109,109);
    circle(182,942,diameter2);
    fill(79,121,120);
    circle(222,942,diameter2);
    fill(103,147,132);
    circle(262,942,diameter2);
    fill(82,126,111);
    circle(302,942,diameter2);
    fill(117,153,153);
    circle(342,942,diameter2);
    fill(143,185,181);
    circle(382,942,diameter2);
    fill(126,168,164);
    circle(422,942,diameter2);
    fill(129,170,166);
    circle(462,942,diameter2);
    fill(89,138,143);
    circle(502,942,diameter2);
    fill(118,168,167);
    circle(542,942,diameter2);
    fill(146,174,159);
    circle(582,942,diameter2);
    fill(151,177,168);
    circle(622,942,diameter2);
    fill(200,217,198);
    circle(662,942,diameter2);

    // line 25
    fill(125,164,161);
    circle(22,982,diameter);
    fill(95,146,141);
    circle(62,982,diameter);
    fill(76,117,119);
    circle(102,982,diameter);
    fill(80,121,123);
    circle(142,982,diameter);
    fill(91,132,118);
    circle(182,982,diameter);
    fill(80,120,130);
    circle(222,982,diameter);
    fill(91,135,118);
    circle(262,982,diameter);
    fill(98,138,130);
    circle(302,982,diameter);
    fill(140,176,166);
    circle(342,982,diameter);
    fill(169,189,178);
    circle(382,982,diameter);
    fill(158,189,181);
    circle(422,982,diameter);
    fill(94,139,162);
    circle(462,982,diameter);
    fill(95,151,150);
    circle(502,982,diameter);
    fill(111,156,162);
    circle(542,982,diameter);
    fill(146,190,189);
    circle(582,982,diameter);
    fill(180,202,190);
    circle(622,982,diameter);
    fill(191,219,205);
    circle(662,982,diameter);

    // border
    line(62,62,624,62);
    line(62,62,62,944);
    line(624,62,624,944);
    line(62,944,624,944);
    line(65,65,621,65);
    line(65,65,65,941);
    line(621,65,621,941);
    line(65,941,621,941);

    // corners
    fill(94,139,162);
    triangle(0,60,60,0,0,0);
    triangle(624,0,684,60,684,0);
    triangle(0,944,0,1004,60,1004);
    triangle(624,1004,684,944,684,1004);

    // moving circles
    fill(156,188,177);
    circle(x1,22,40);
    fill(128,132,109);
    circle(x2,182,40);
    fill(169,200,192);
    circle(102,y1,40);
    fill(64,108,121);
    circle(502,y2,40);
    fill(213,216,173);
    circle(x3,y3,40);
    
    // signature
    fill(0,0,0);
    textSize(size);
    text('Max W. Bartley',522,905);
    frameRate(48)
    
    // if statements
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    
    if(diameter >= 90 || diameter <= 0)
    {
        growth*=-1;
    }

    if(diameter2 >= 50 || diameter2 <= 0)
    {
        growth2*=-1;
    }

    if(x1 >=464  || x1 <= 20)
    {
        movement1*=-1;
    }

    if(x2 >=600 || x2 <= 100)
    {
        movement2*=-1;
    }

    if(y1 >=804 || y1 <=42)
    {
        movement3*=-1;
    }
  
    if(y2 >=980 || y2 <=500)
    {
        movement4*=-1;
    }
 
    if(x3 >=582 || x3 <=82)
    {
        movement5*=-1;
    }
  
    if(y3 >=782 || y3 <=282)
    {
        movement6*=-1;
    }

    // variable adjustments
    diameter += growth;
    diameter2 += growth2;
    x1 += movement1
    x2 += movement2
    y1 += movement3
    y2 += movement4
    x3 += movement5
    y3 += movement6
    size += sizeDirection;
    count++;
}