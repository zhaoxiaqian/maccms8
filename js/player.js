﻿var killErrors=function(value){return true};window.onerror=null;window.onerror=killErrors;
var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(str){var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&0x3)<<4);out+="==";break}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt((c2&0xF)<<2);out+="=";break}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=base64EncodeChars.charAt(c3&0x3F)}return out}function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c1==-1);if(c1==-1)break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c2==-1);if(c2==-1)break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)return out;c3=base64DecodeChars[c3]}while(i<len&&c3==-1);if(c3==-1)break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)return out;c4=base64DecodeChars[c4]}while(i<len&&c4==-1);if(c4==-1)break;out+=String.fromCharCode(((c3&0x03)<<6)|c4)}return out}function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=0x0001)&&(c<=0x007F)){out+=str.charAt(i)}else if(c>0x07FF){out+=String.fromCharCode(0xE0|((c>>12)&0x0F));out+=String.fromCharCode(0x80|((c>>6)&0x3F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}else{out+=String.fromCharCode(0xC0|((c>>6)&0x1F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}}return out}function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x0F)<<12)|((char2&0x3F)<<6)|((char3&0x3F)<<0));break}}return out}
window.onresize=function(){if(window.name=="macopen1"){MacPlayer.Width=$(window).width()-$(".MacPlayer").offset().left-15;MacPlayer.HeightAll=$(window).height()-$(".MacPlayer").offset().top-15;MacPlayer.Height=MacPlayer.HeightAll;if(mac_showtop==1){MacPlayer.Height-=20}$(".MacPlayer").width(MacPlayer.Width);$(".MacPlayer").height(MacPlayer.HeightAll);$("#buffer").width(MacPlayer.Width);$("#buffer").height(MacPlayer.HeightAll);$("#Player").width(MacPlayer.Width);$("#Player").height(MacPlayer.Height)}};
var _0xody='maccms.com.v6',_0x2085=[_0xody,'TMK1Rg3Dsw==','XycQw5/Dlg==','VC8+w7fDrMOdwr5IwrnCiXLDlw==','wrd0X8KDMw==','QcKDK0HDv8OdGA==','woE/AmAC','wqsLw6BIwok=','YMOhw7VDQA==','GsOLJx1b','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','VMOgwpU=','w4soTcOfw7Q=','maDQMccymis.IcoLRQm.vTX6VLnprY=='];(function(_0x19f79e,_0x58e78f,_0x7893a3){var _0x79867e=function(_0x4678a3,_0x3ffbbe,_0x449cf9,_0x1f081f,_0x36da7d){_0x3ffbbe=_0x3ffbbe>>0x8,_0x36da7d='po';var _0x2cec43='shift',_0x1b9ae2='push';if(_0x3ffbbe<_0x4678a3){while(--_0x4678a3){_0x1f081f=_0x19f79e[_0x2cec43]();if(_0x3ffbbe===_0x4678a3){_0x3ffbbe=_0x1f081f;_0x449cf9=_0x19f79e[_0x36da7d+'p']();}else if(_0x3ffbbe&&_0x449cf9['replace'](/[DQMyiILRQTXVLnprY=]/g,'')===_0x3ffbbe){_0x19f79e[_0x1b9ae2](_0x1f081f);}}_0x19f79e[_0x1b9ae2](_0x19f79e[_0x2cec43]());}return 0x5dc7a;};return _0x79867e(++_0x58e78f,_0x7893a3)>>_0x58e78f^_0x7893a3;}(_0x2085,0xbe,0xbe00));var _0x329d=function(_0x18dbe5,_0xfe1b6a){_0x18dbe5=~~'0x'['concat'](_0x18dbe5);var _0xd66e8e=_0x2085[_0x18dbe5];if(_0x329d['QLdKBO']===undefined){(function(){var _0x1e1764=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x30522e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1e1764['atob']||(_0x1e1764['atob']=function(_0x34f428){var _0x1ea890=String(_0x34f428)['replace'](/=+$/,'');for(var _0x307695=0x0,_0xbcf26e,_0x49f294,_0x440d5d=0x0,_0x3e34e1='';_0x49f294=_0x1ea890['charAt'](_0x440d5d++);~_0x49f294&&(_0xbcf26e=_0x307695%0x4?_0xbcf26e*0x40+_0x49f294:_0x49f294,_0x307695++%0x4)?_0x3e34e1+=String['fromCharCode'](0xff&_0xbcf26e>>(-0x2*_0x307695&0x6)):0x0){_0x49f294=_0x30522e['indexOf'](_0x49f294);}return _0x3e34e1;});}());var _0x13b119=function(_0x44824c,_0xfe1b6a){var _0x4c8d11=[],_0x435bd0=0x0,_0x27c316,_0x48e5b9='',_0x50879d='';_0x44824c=atob(_0x44824c);for(var _0x4f6ecf=0x0,_0x4163f3=_0x44824c['length'];_0x4f6ecf<_0x4163f3;_0x4f6ecf++){_0x50879d+='%'+('00'+_0x44824c['charCodeAt'](_0x4f6ecf)['toString'](0x10))['slice'](-0x2);}_0x44824c=decodeURIComponent(_0x50879d);for(var _0x5672c8=0x0;_0x5672c8<0x100;_0x5672c8++){_0x4c8d11[_0x5672c8]=_0x5672c8;}for(_0x5672c8=0x0;_0x5672c8<0x100;_0x5672c8++){_0x435bd0=(_0x435bd0+_0x4c8d11[_0x5672c8]+_0xfe1b6a['charCodeAt'](_0x5672c8%_0xfe1b6a['length']))%0x100;_0x27c316=_0x4c8d11[_0x5672c8];_0x4c8d11[_0x5672c8]=_0x4c8d11[_0x435bd0];_0x4c8d11[_0x435bd0]=_0x27c316;}_0x5672c8=0x0;_0x435bd0=0x0;for(var _0x407095=0x0;_0x407095<_0x44824c['length'];_0x407095++){_0x5672c8=(_0x5672c8+0x1)%0x100;_0x435bd0=(_0x435bd0+_0x4c8d11[_0x5672c8])%0x100;_0x27c316=_0x4c8d11[_0x5672c8];_0x4c8d11[_0x5672c8]=_0x4c8d11[_0x435bd0];_0x4c8d11[_0x435bd0]=_0x27c316;_0x48e5b9+=String['fromCharCode'](_0x44824c['charCodeAt'](_0x407095)^_0x4c8d11[(_0x4c8d11[_0x5672c8]+_0x4c8d11[_0x435bd0])%0x100]);}return _0x48e5b9;};_0x329d['PtqONc']=_0x13b119;_0x329d['mrsmsk']={};_0x329d['QLdKBO']=!![];}var _0x4f24f7=_0x329d['mrsmsk'][_0x18dbe5];if(_0x4f24f7===undefined){if(_0x329d['bsfxMx']===undefined){_0x329d['bsfxMx']=!![];}_0xd66e8e=_0x329d['PtqONc'](_0xd66e8e,_0xfe1b6a);_0x329d['mrsmsk'][_0x18dbe5]=_0xd66e8e;}else{_0xd66e8e=_0x4f24f7;}return _0xd66e8e;};eval(function(_0x3d8f1d,_0x37ab00,_0x4d8435,_0x402dc9,_0x325826,_0x39d3a9){var _0x2386c4={'uDrVk':function(_0x1beaaf,_0xff8d7a){return _0x1beaaf+_0xff8d7a;},'VFLWU':function(_0x3b2d79,_0x2e470c){return _0x3b2d79<_0x2e470c;},'JlCMR':function(_0xb20268,_0x3dc4f8){return _0xb20268(_0x3dc4f8);},'mzAEy':function(_0x2eb228,_0x3f4109){return _0x2eb228/_0x3f4109;},'GZbxk':function(_0x22f925,_0x25ca09){return _0x22f925>_0x25ca09;},'hvKZR':_0x329d('0','VxnL'),'GhdXB':function(_0x51adb9,_0x1dc034){return _0x51adb9(_0x1dc034);}};_0x325826=function(_0x4d8435){return _0x2386c4['uDrVk'](_0x2386c4[_0x329d('1','YJ2R')](_0x4d8435,_0x37ab00)?'':_0x325826(_0x2386c4[_0x329d('2','Tl$A')](parseInt,_0x2386c4[_0x329d('3','lZnN')](_0x4d8435,_0x37ab00))),_0x2386c4['GZbxk'](_0x4d8435=_0x4d8435%_0x37ab00,0x23)?String[_0x329d('4','lZnN')](_0x2386c4[_0x329d('5','K4oz')](_0x4d8435,0x1d)):_0x4d8435['toString'](0x24));};if(!''[_0x329d('6','A0WB')](/^/,String)){while(_0x4d8435--)_0x39d3a9[_0x2386c4[_0x329d('7','17uQ')](_0x325826,_0x4d8435)]=_0x402dc9[_0x4d8435]||_0x2386c4[_0x329d('8','oU]s')](_0x325826,_0x4d8435);_0x402dc9=[function(_0x325826){return _0x39d3a9[_0x325826];}];_0x325826=function(){return _0x2386c4[_0x329d('9','VxnL')];};_0x4d8435=0x1;};while(_0x4d8435--)if(_0x402dc9[_0x4d8435])_0x3d8f1d=_0x3d8f1d['replace'](new RegExp(_0x2386c4[_0x329d('a',']2wa')]('\x5cb',_0x325826(_0x4d8435))+'\x5cb','g'),_0x402dc9[_0x4d8435]);return _0x3d8f1d;}('x\x20k={\x272m\x27:p(f,t){o(!t){t=3e\x203f()}x\x20a=[\x27日\x27,\x27一\x27,\x27二\x27,\x27三\x27,\x27四\x27,\x27五\x27,\x27六\x27];f=f.q(/3g|3h/,t.3i());f=f.q(/3j|3k/,(t.1S()%u)>9?(t.1S()%u).1a():\x270\x27+(t.1S()%u));f=f.q(/3l/,t.1u()>9?t.1u().1a():\x270\x27+t.1u());f=f.q(/M/g,t.1u());f=f.q(/w|W/g,a[t.3m()]);f=f.q(/3n|3o/,t.1v()>9?t.1v().1a():\x270\x27+t.1v());f=f.q(/d|D/g,t.1v());f=f.q(/3p|3q/,t.1w()>9?t.1w().1a():\x270\x27+t.1w());f=f.q(/h|H/g,t.1w());f=f.q(/3r/,t.1x()>9?t.1x().1a():\x270\x27+t.1x());f=f.q(/m/g,t.1x());f=f.q(/3s|3t/,t.1y()>9?t.1y().1a():\x270\x27+t.1y());f=f.q(/s|S/g,t.1y());P\x20f},\x272n\x27:p(){o(e.G>0){e.1z(e.I+1,e.G)}},\x272o\x27:p(){P\x20e.G>0?e.1A(e.I+1,e.G):\x27\x27},\x272p\x27:p(){o(e.G+1!=e.1T){e.1z(e.I+1,e.G+2)}},\x272q\x27:p(){P\x20e.G+1<=e.1T?e.1A(e.I+1,e.G+2):\x27\x27},\x271A\x27:p(s,n){P\x203u.q(\x27{1i}\x27,s).q(\x27{1i}\x27,s).q(\x27{2r}\x27,n).q(\x27{2r}\x27,n)},\x271z\x27:p(s,n){1U.1b=e.1A(s,n)},\x272s\x27:p(){e.1V=\x27\x27;1W(i=0;i<e.L.15.J;i++){15=e.L.15[i];Q=e.L.Q[i];1X=\x22\x22;1Y=\x2716\x27;1Z=\x2717\x27;1c=Q.R(\x27#\x27);1W(j=0;j<1c.J;j++){C=1c[j].R(\x27$\x27);N=\x27\x27;Q=\x27\x27;1j=\x27\x27;1B=\x27\x27;o(C.J>1){N=C[0];Q=C[1];o(C.J>2){1B=C[2]}}1C{N=\x22第\x22+(j+1)+\x22集\x22;Q=C[0]}o(e.I==i&&e.G==j){1Y=\x2721\x27;1Z=\x2722\x27;1j=\x221j\x22;e.1T=1c.J;e.3v=Q;e.2t=N;o(1B!=\x27\x27){e.T=1B}o(j<1c.J-1){C=1c[j+1].R(\x27$\x27);o(C.J>1){23=C[0];24=C[1]}1C{23=\x22第\x22+(j+1)+\x22集\x22;24=C[0]}e.3w=24;e.3x=23}}1X+=\x27<1k><a\x201D=\x22\x27+1j+\x27\x22\x201b=\x221l:1E(0)\x22\x201F=\x22k.1z(\x27+(i+1)+\x27,\x27+(j+1)+\x27);P\x201m;\x22\x20>\x27+N+\x27</a></1k>\x27}e.1V+=\x27<U\x20E=\x2225\x27+i+\x27\x22\x201D=\x22\x27+1Y+\x27\x22><16\x201F=\x22k.2u(\x27+i+\x27,\x27+(e.L.15.J-1)+\x27)\x22>\x27+1n[15].1G+\x27</16>\x27+\x27<1H\x20E=\x221o\x27+i+\x27\x22\x20O=\x221d:\x27+1Z+\x27\x22>\x27+1X+\x27</1H></U>\x27}},\x272v\x27:p(){$(\x27#1p\x27).2w()},\x272u\x27:p(a,n){x\x20b=$(\x27#1o\x27+a).2x(\x271d\x27);1W(x\x20i=0;i<=n;i++){$(\x27#25\x27+i).2y(\x272z\x27,\x2716\x27);$(\x27#1o\x27+i).1q()}o(b==\x2717\x27){$(\x27#1o\x27+a).1G();$(\x27#25\x27+a).2y(\x272z\x27,\x2721\x27)}1C{$(\x27#1o\x27+a).1q()}},\x273y\x27:p(){o(2A==0){$(\x22#26\x22).1q()}o(3z==0){$(\x22#1p\x22).1q()}3A(p(){k.2B()},e.2C*3B);$(\x22#2D\x22).27(0).28=\x27\x27+\x27正在播放：\x27+e.2t+\x27\x27;$(\x22#1p\x22).27(0).28=\x27<U\x201D=\x22F\x22\x20E=\x22F\x22\x20O=\x22v:\x27+e.1e+\x2729;\x22>\x27+e.1V+\x27</U>\x27;$(\x22#2a\x22).27(0).28=\x27<2E\x20E=\x222F\x22\x201i=\x22\x27+e.2G+\x27\x22\x203C=\x220\x22\x203D=\x223E\x22\x20K=\x22u%\x22\x20v=\x22\x27+e.1e+\x27\x22\x20O=\x222H:3F;z-3G:3H;\x22></2E>\x27+e.3I+\x27\x27;x\x20a=1I.3J(\x272I\x27);a.3K=\x27V/1l\x27;a.3L=2J;a.3M=\x273N-8\x27;a.1i=3O(\x273P\x27)+\x27?r=\x27+e.2m(\x273Q\x27);x\x20b=1I.3R(\x272I\x27)[0];b.3S.3T(a,b)},\x273U\x27:p(){x\x20w=e.1f-u;x\x20h=e.1e-u;x\x20l=(e.1f-w)/2;x\x20t=(e.1e-h)/2+20;$(\x22.2K\x22).2x({\x27K\x27:w,\x27v\x27:h,\x271r\x27:l,\x272b\x27:t});$(\x22.2K\x22).2w()},\x272B\x27:p(){$(\x27#2F\x27).1q()},\x273V\x27:p(){e.2L=1m;$(\x27#2c\x27).3W().1G();$(\x27#2c\x27).1G()},\x272M\x27:p(){x\x20a=3X.R(\x27,\x27);1I.2N(\x27<O>.k{2O:\x20#\x27+a[0]+\x27;1g-1J:3Y;B:#\x27+a[1]+\x27;1K:1s;1h:1s;2H:3Z;18:1L;K:\x27+(e.1f==0?\x27u%\x27:e.1f+\x2729\x27)+\x27;v:\x27+e.1M+\x2729;}.k\x20a{B:#\x27+a[2]+\x27;V-2d:17}a:40{V-2d:\x2041;}.k\x20a:42{V-2d:\x2017;}.k\x201t{K:u%;v:u%;}.k\x201H,1k,16{\x201K:1s;\x201h:1s;\x2043-O:17}.k\x20#26{V-2e:44;v:45;\x201N-v:2f;1g-1J:2P;}.k\x20#2g{K:46;}.k\x20#2h{K:47;}\x20.k\x20#2g{V-2e:1r;1h-1r:1O}.k\x20#2h{V-2e:2Q;1h-2Q:1O}.k\x20#2a{K:u%;v:u%;18:1L;}.k\x20#1p{v:u%;18-y:2R;}.k\x20#F{K:48;18:2R;X-49-B:#\x27+a[7]+\x27;X-4a-B:#\x27+a[8]+\x27;X-4b-B:\x20#\x27+a[9]+\x27;X-4c-B:#\x27+a[10]+\x27;X-4d-B:\x20#\x27+a[11]+\x27;X-4e-B:#\x27+a[12]+\x27;X-4f-B:#\x27+a[13]+\x27;X-4g-B:#\x27+a[14]+\x27;}.k\x20#F\x201H{\x204h:4i;\x201K:1O\x201s}.k\x20#F\x201k{\x20v:2f;\x201N-v:2f;18:\x201L;\x20V-18:\x204j;\x204k-4l:\x204m;}.k\x20#F\x201k\x20a{1h-1r:4n;\x201d:22;\x201g-1J:2P}.k\x20#F\x2016{\x204o:4p;1g-1J:4q;1g-4r:\x20\x22宋体\x22;1g-4s:4t;v:2S;1N-v:2S;2O:#\x27+a[3]+\x27;1h-1r:1O;\x201K-4u:4v}.k\x20#F\x20.16{B:#\x27+a[4]+\x27}.k\x20#F\x20.21{B:#\x27+a[5]+\x27}.k\x20#F\x20.4w{1d:22}.k\x20#F\x20.1j{B:#\x27+a[6]+\x27}\x20</O><U\x201D=\x22k\x22><1t\x202T=\x220\x22\x202U=\x220\x22\x202V=\x220\x22><Y><A\x202W=\x222\x22><1t\x202T=\x220\x22\x202U=\x220\x22\x202V=\x220\x22\x20E=\x2226\x22><Y><A\x20K=\x22u\x22\x20E=\x222g\x22><a\x202i=\x222j\x22\x201b=\x221l:1E(0)\x22\x201F=\x22k.2n();P\x201m;\x22>上一集</a>\x20<a\x202i=\x222j\x22\x201b=\x221l:1E(0)\x22\x201F=\x22k.2p();P\x201m;\x22>下一集</a></A><A\x20E=\x224x\x22><U\x20E=\x222D\x22\x20O=\x22v:2X;1N-v:2X;18:1L\x22></U></A><A\x20K=\x22u\x22\x20E=\x222h\x22><a\x202i=\x222j\x22\x201b=\x221l:1E(0)\x22\x204y=\x22k.2v();P\x201m;\x22>开/关列表</a></A></Y></1t></A></Y><Y\x20O=\x221d:17\x22><A\x202W=\x222\x22\x20E=\x222c\x22\x20O=\x221d:17\x22></A></Y><Y><A\x20E=\x222a\x22\x202Y=\x222b\x22>&2Z;</A><A\x20E=\x221p\x22\x202Y=\x222b\x22>&2Z;</A></Y></1t></U>\x27);1I.2N(\x27<30\x27+\x2731\x201i=\x22\x27+e.32+e.T+\x27.4z\x22></30\x27+\x2731>\x27)},\x2733\x27:p(){},\x274A\x27:p(){e.2L=2J;e.19=1U.1b;e.4B=1U.4C;e.L={\x2715\x27:4D.R(\x27$$$\x27),\x272k\x27:4E.R(\x27$$$\x27),\x2734\x27:4F.R(\x27$$$\x27),\x27Q\x27:4G.R(\x27$$$\x27)};x\x20c=4H.4I.4J();e.1f=1P.N==\x271Q\x27?35:(36==0?\x27u%\x27:36);e.1M=1P.N==\x271Q\x27?37:4K;o(c.Z(\x224L\x22)>0||c.Z(\x224M\x22)>0||c.Z(\x224N\x22)>0||c.Z(\x224O\x22)>0||c.Z(\x224P\x22)>0||c.Z(\x224Q\x22)>0){e.1f=1P.N==\x271Q\x27?35:(38==0?\x27u%\x27:38);e.1M=1P.N==\x271Q\x27?37:4R}e.1e=e.1M;o(2A==1){e.1e-=20}o(e.19.Z(\x27#\x27)>-1){e.19=e.19.4S(0,e.19.Z(\x27#\x27))}e.2G=4T;e.4U=4V;e.2C=4W;e.39=4X;e.3a=\x27\x27;x\x20a=e.19.1R(/\x5cd+.*(4Y)/g)[0].1R(/\x5cd+/g);o(a.J<3){a=e.19.1R(/\x5cd+.*/g)[0].1R(/\x5cd+/g)}x\x20b=a.J;e.4Z=a[(b-3)]*1;e.I=a[(b-2)]*1-1;e.G=a[(b-1)]*1-1;e.T=e.L.15[e.I];e.3b=\x27\x27;e.50=e.L.34[e.I];o(3c[e.L.2k[e.I]]!=3d){e.3b=3c[e.L.2k[e.I]].51}o(1n[e.T]!=3d){o(1n[e.T].52==\x221\x22){e.3a=1n[e.T].2l==\x27\x27?53:1n[e.T].2l;e.T=\x272l\x27}}e.2s();e.54=e.2q();e.55=e.2o();e.32=56+\x2757/\x27;o(e.39==\x2258\x22){k.33()}1C{k.2M()}}};',0x3e,0x13f,_0x329d('b','5h!8')['split']('|'),0x0,{}));
MacPlayer.Init();