// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_seven(k,x,m){var n=jQuery;var t=n(this);var l=k.distance||5;var d=k.cols;var w=k.rows;var a=k.duration*2;var o=k.blur||50;var A=m.find(".ws_list");var D=[];var v=[];var u=n("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:(k.responsive>1?"hidden":"visible")});var c=u.clone().css("overflow","hidden");u.addClass("ws_effect ws_seven");m=m.parent();var r=!k.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;var j;var e=n("<div>").addClass("ws_parts");var y=n("<div>").addClass("ws_zoom");u.append(e,y,c).appendTo(m);var f={t:n(window).scrollTop(),l:n(window).scrollLeft(),w:n(window).width(),h:n(window).height()};jQuery.extend(jQuery.easing,{easeOutQuart:function(F,G,E,I,H){return -I*((G=G/H-1)*G*G*G-1)+E},easeInExpo:function(F,G,E,I,H){return(G==0)?E:I*Math.pow(2,10*(G/H-1))+E},easeInCirc:function(F,G,E,I,H){return -I*(Math.sqrt(1-(G/=H)*G)-1)+E}});function q(F,E){return Math.abs((E%2?1:0)+((E-E%2)/2)-F)/E}function C(I,H,J,E){var G=(H>=E)?(E)/(H):1;var F=(I>=J)?(J)/(I):1;return{l:F,t:G,m:Math.min(F,G)}}function i(H,L){var K=new Date().getTime(),E,J,G,I;var F=function(){var Q=new Date().getTime();var T=0;for(var S in H){if(H[S].disabled){continue}T++;if((K+H[S].delay)>Q){var M=0}else{var M=(Q-(K+H[S].delay))/H[S].duration}I={};if(M>1){if(H[S].callback){H[S].callback()}H[S].disabled=true;continue}M=n.easing[H[S].easing](1,M,0,1,1,1).toFixed(3);var P="";for(var O in H[S].begin){var X=H[S].begin[O]||0,R=H[S].end[O]||0;if(O=="translate"){var W=X[0]+(R[0]-X[0])*M;var V=X[1]+(R[1]-X[1])*M;var U=X[2]+(R[2]-X[2])*M;P+="translate3d("+W+"px,"+V+"px,"+U+"px)"}else{if(O=="scale"){var N=X+(R-X)*M;P+=" scale("+N+")"}else{I[O]=X+(R-X)*M}}}I.transform=P;delete I.translate;delete I.scale;H[S].item.css(I)}if(!T){cancelAnimationFrame(F);if(L){L()}}else{requestAnimationFrame(F)}};F()}function s(Q,E,F,I,S){var M=e.width(),O=e.height(),P=l*M/d,K=l*O/w,L=a*(I?4:5)/(d*w),H=I?"easeInExpo":"easeOutQuart";var G=f.h+f.t-O/w,N=f.w+f.l-M/d,T=e.offset().top+e.height(),J=e.offset().left+e.width();if(G<T){G=T}if(N<J){N=J}var R=[];n(Q).each(function(ab){var Y=ab%d,V=Math.floor(ab/d),Z=a*0.2*(q(Y,d)*45+V*4)/(d*w),X=e.offset().left+f.l+P*Y-M*l/2+P,aa=e.offset().top+f.t+K*V-O*l/2+K,U=C(X,aa,N,G);if(k.support.transform){var ac={opacity:1,translate:[M*Y/d,O*V/w,0],scale:1,width:M/d,height:O/w,zIndex:Math.ceil(100-q(Y,d)*100)},af={opacity:0,translate:[(P*Y-M*l/2.115)*U.l,(K*V-O*l/2.115)*U.t,0],scale:l*U.m,width:M/d,height:O/w,zIndex:Math.ceil(100-q(Y,d)*100)};n(this).find("img").css({transform:"translate3d("+(-M*Y/d+F.marginLeft)+"px,"+(-O*V/w+F.marginTop)+"px,0px)",width:F.width,height:F.height})}else{var ac={opacity:1,left:M*Y/d,top:O*V/w,width:M/d,height:O/w,zIndex:Math.ceil(100-q(Y,d)*100)},af={opacity:0,left:(P*Y-M*l/2)*U.l,top:(K*V-O*l/2)*U.t,width:P*U.m,height:K*U.m},ae={left:-(M*Y/d)+F.marginLeft,top:-(O*V/w)+F.marginTop,width:F.width,height:F.height},ad={left:-l*(M/d*Y-F.marginLeft)*U.m,top:-l*(O/w*V-F.marginTop)*U.m,width:l*F.width*U.m,height:l*F.height*U.m}}if(!I){var W=ac;ac=af;af=W;W=ae;ae=ad;ad=W}R.push({item:n(this),begin:ac,end:af,easing:H,delay:Z,duration:L,callback:I?function(){this.item.hide()}:0});if(ae){R.push({item:n(this).find("img"),begin:ae,end:ad,easing:H,delay:Z,duration:L})}});if(I){n(E).each(function(Y){var V=Y%d;var U=Math.floor(Y/d);var W=a*0.2+a*0.15*(q(V,d)*35+U*4)/(d*w);var X=a*4/(d*w);if(k.support.transform){var Z={translate:[M/2,O/2,0],scale:0,width:M/d,height:O/w,zIndex:Math.ceil(100-q(V,d)*100)},ab={translate:[M*V/d,O*U/w,0],scale:1,width:M/d,height:O/w,zIndex:Math.ceil(100-q(V,d)*100)};n(this).find("img").css({transform:"translate3d("+(-M*V/d+F.marginLeft)+"px,"+(-O*U/w+F.marginTop)+"px,0px)",width:F.width,height:F.height})}else{var Z={left:M/2,top:O/2,width:0,height:0,zIndex:Math.ceil(100-q(V,d)*100)},ab={left:M*V/d,top:O*U/w,width:M/d,height:O/w},ac={left:0,top:0,width:0,height:0},aa={left:-M*V/d+F.marginLeft,top:-O*U/w+F.marginTop,width:F.width,height:F.height}}R.push({item:n(this),begin:Z,end:ab,easing:"easeOutBack",delay:W,duration:X});if(ac){R.push({item:n(this).find("img"),begin:ac,end:aa,easing:"easeOutBack",delay:W,duration:X})}});y.delay(a*0.1).animate({opacity:1},a*0.2,"easeInCirc")}i(R,S);return{stop:function(){S()}}}var h;this.go=function(N,H,M){if(h){return H}if(M==undefined){M=(H==0&&N!=H+1)||(N==H-1)?false:true}f.t=n(window).scrollTop();f.l=n(window).scrollLeft();f.w=n(window).width();f.h=n(window).height();var E=Math.max((k.width||e.width())/(k.height||e.height())||3,3);d=d||Math.round(E<1?3:3*E);w=w||Math.round(E<1?3/E:3);var F=n(x.get(H));F={width:F.width(),height:F.height(),marginTop:parseFloat(F.css("marginTop")),marginLeft:parseFloat(F.css("marginLeft"))};e.css({position:"absolute",width:m.width(),height:m.height(),left:0,top:0,zIndex:8,transform:"translate3d(0,0,0)"});y.css({position:"absolute",width:m.width(),height:m.height(),top:0,left:0,zIndex:2,transform:"translate3d(0,0,0)"});for(var K=0;K<d*w;K++){var J=K%d;var I=Math.floor(K/d);n(D[K]=document.createElement("div")).css({position:"absolute",overflow:"hidden",transform:"translate3d(0,0,0)"}).appendTo(e).append(n("<img>").css({position:"absolute",transform:"translate3d(0,0,0)"}).attr("src",x.get(M?H:N).src));if(M){n(v[K]=document.createElement("div")).css({position:"absolute",overflow:"hidden",transform:"translate3d(0,0,0)"}).appendTo(y).append(n("<img>").css({position:"absolute",transform:"translate3d(0,0,0)"}).attr("src",x.get(N).src))}}D=n(D);if(M){v=n(v)}var G=0;if(M){y.css("opacity",0);if(r){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(L){r=0}j='<canvas width="'+u.width+'" height="'+u.height+'"/>';j=n(j).css({"z-index":1,position:"absolute",left:0,top:0}).css(F).appendTo(c);G=B(n(x.get(H)),F,o,j.get(0))}if(!r||!G){r=0;G=B(n(x.get(H)),F,8);if(j){j.remove();j=0}}}else{y.append(n("<img>").css({position:"absolute",top:0,left:0}).css(F).attr("src",x.get(H).src))}h=new s(D,v,F,M,function(){t.trigger("effectEnd");e.empty().removeAttr("style");y.empty().removeAttr("style");if(j){j.remove()}else{if(G){G.remove()}}h=0})};function B(K,F,J,G){var N=(parseInt(K.parent().css("z-index"))||0)+1;if(r){var Q=G.getContext("2d");Q.drawImage(K.get(0),0,0,F.width,F.height);if(!b(Q,0,0,G.width,G.height,J)){return 0}return n(G)}var R=n("<div></div>").css({position:"absolute","z-index":N,left:0,top:0,overflow:"hidden"}).css(F).appendTo(c);var P=(Math.sqrt(5)+1)/2;var H=1-P/2;for(var I=0;H*I<J;I++){var L=Math.PI*P*I;var E=(H*I+1);var O=E*Math.cos(L);var M=E*Math.sin(L);n(document.createElement("img")).attr("src",K.attr("src")).css({opacity:1/(I/1.8+1),position:"absolute","z-index":N,left:Math.round(O)+"px",top:Math.round(M)+"px",width:"100%",height:"100%"}).appendTo(R)}return R}var p=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var z=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function b(au,ab,Z,E,F,ak){if(isNaN(ak)||ak<1){return}ak|=0;var ao;try{ao=au.getImageData(ab,Z,E,F)}catch(at){console.log("error:unable to access image data: "+at);return false}var J=ao.data;var ai,ah,aq,an,Q,T,N,H,I,Y,O,aa,W,ae,aj,R,M,S,U,ad;var ar=ak+ak+1;var af=E<<2;var P=E-1;var am=F-1;var L=ak+1;var al=L*(L+1)/2;var ac=new g();var X=ac;for(aq=1;aq<ar;aq++){X=X.next=new g();if(aq==L){var K=X}}X.next=ac;var ap=null;var ag=null;N=T=0;var V=p[ak];var G=z[ak];for(ah=0;ah<F;ah++){ae=aj=R=H=I=Y=0;O=L*(M=J[T]);aa=L*(S=J[T+1]);W=L*(U=J[T+2]);H+=al*M;I+=al*S;Y+=al*U;X=ac;for(aq=0;aq<L;aq++){X.r=M;X.g=S;X.b=U;X=X.next}for(aq=1;aq<L;aq++){an=T+((P<aq?P:aq)<<2);H+=(X.r=(M=J[an]))*(ad=L-aq);I+=(X.g=(S=J[an+1]))*ad;Y+=(X.b=(U=J[an+2]))*ad;ae+=M;aj+=S;R+=U;X=X.next}ap=ac;ag=K;for(ai=0;ai<E;ai++){J[T]=(H*V)>>G;J[T+1]=(I*V)>>G;J[T+2]=(Y*V)>>G;H-=O;I-=aa;Y-=W;O-=ap.r;aa-=ap.g;W-=ap.b;an=(N+((an=ai+ak+1)<P?an:P))<<2;ae+=(ap.r=J[an]);aj+=(ap.g=J[an+1]);R+=(ap.b=J[an+2]);H+=ae;I+=aj;Y+=R;ap=ap.next;O+=(M=ag.r);aa+=(S=ag.g);W+=(U=ag.b);ae-=M;aj-=S;R-=U;ag=ag.next;T+=4}N+=E}for(ai=0;ai<E;ai++){aj=R=ae=I=Y=H=0;T=ai<<2;O=L*(M=J[T]);aa=L*(S=J[T+1]);W=L*(U=J[T+2]);H+=al*M;I+=al*S;Y+=al*U;X=ac;for(aq=0;aq<L;aq++){X.r=M;X.g=S;X.b=U;X=X.next}Q=E;for(aq=1;aq<=ak;aq++){T=(Q+ai)<<2;H+=(X.r=(M=J[T]))*(ad=L-aq);I+=(X.g=(S=J[T+1]))*ad;Y+=(X.b=(U=J[T+2]))*ad;ae+=M;aj+=S;R+=U;X=X.next;if(aq<am){Q+=E}}T=ai;ap=ac;ag=K;for(ah=0;ah<F;ah++){an=T<<2;J[an]=(H*V)>>G;J[an+1]=(I*V)>>G;J[an+2]=(Y*V)>>G;H-=O;I-=aa;Y-=W;O-=ap.r;aa-=ap.g;W-=ap.b;an=(ai+(((an=ah+L)<am?an:am)*E))<<2;H+=(ae+=(ap.r=J[an]));I+=(aj+=(ap.g=J[an+1]));Y+=(R+=(ap.b=J[an+2]));ap=ap.next;O+=(M=ag.r);aa+=(S=ag.g);W+=(U=ag.b);ae-=M;aj-=S;R-=U;ag=ag.next;T+=E}}au.putImageData(ao,ab,Z);return true}function g(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"seven",prev:"",next:"",duration:20*100,delay:20*100,width:960,height:360,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:true,caption:true,captionEffect:"parallax",controls:true,responsive:1,fullScreen:false,onBeforeStep:0,images:0});