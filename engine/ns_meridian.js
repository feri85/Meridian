var ClassCreate={_combine:Function.prototype.combine=function(e,t){e instanceof Object||(e=new Object),t instanceof Object||(t=new Object);for(var r in e)t[r]=e[r];return t},_offsets:Function.prototype.offsets=function(e,t){this.prototype=new e;var r=Object.keys(e);this.superb={};for(var n in r)this[r[n]]=e[r[n]],this.superb[r[n]]=e[r[n]];for(var o in e.prototype)t[o]=e.prototype[o];this.prototype=t,ClassCreate.isready("offsets")},_construct_shell:Function.prototype.construct=function(e,t){if("function"==typeof e){var r=new e;if(e(),t instanceof Object){{this.combine(this.prototype.constructor.arguments,t)}r=this.combine(r,t)}for(var n in r)this.prototype.hasOwnProperty(n)&&(this.prototype[n]=r[n]),delete window[n]}ClassCreate.isready("construct")},isready:function(e){"complete"==document.readyState&&(Function.prototype[e].__proto__=null)}},Me={};Me.global_count=0,Me.nsMeridian=function(){Me.ready=!0},Me.ruleList={},Me.bound="",Me.Drive=function(){Me.Drive.prototype=this,Me.Drive.prototype.prefix=null,Me.Drive.prototype.err=null,Me.Drive.prototype.path=null,Me.Drive.prototype.appname=null,Me.Drive.usenode=Me.Use,Me.Drive.compare=!1,Me.Drive.count=null,Me.Drive.defaultName=null,Me.Drive.attributes=null,Me.Drive.bvCache=null,Me.Drive.system=window;var e=null;this.constructor.construct(function(){this.prefix="",this.err="no error",this.path=function(){return document.children?document.children[0]:document.childNodes[1].childNodes[0]}(),this.appname="meridian",Me.Drive.defaultName="defaultMember",Me.Drive.attributes=["name","type","id","class","action","value","alt","src","href","width","height","title","data","lang","dir","content"],Me.Drive.bvCache={},e=this});var t=function(e){var t={},r=function(){return e.path.childNodes[0].tagName?e.path.childNodes[0].childNodes:e.path.childNodes}();for(var n in r)"SCRIPT"==r[n].tagName&&(t[n]=r[n]);for(var o in t)if(t[o].attributes.getNamedItem("src")&&t[o].src.indexOf(e.appname))return{ready:!0,at:parseInt(o)}};Me.Drive.regx=function(e){return new RegExp(e+"[a-zéáűúöőóüíA-ZÉÁŰÚÖŐÓÜÍs #&.:;_?!%()/+0-9{1,}]{1,}","g")},Me.Drive.compare=t(this),Me.Drive.attrcreator=function(e,t,r){var n=document.createAttribute(t);n.value=r,e.attributes.setNamedItem(n)},Me.Drive.prepare_dna=function(e,t,r){if(Me.ready){var n=Me.Drive.system;n[t]=new Me.defineMember,n[t].initalized.member=e,n[t].initalized.memberName=t,n[t].initalized.componentName=t+r.membernum,n[t].initalized.number=r.membernum,this.constructor.combine(n[t].initalized,n[t]),delete n[t].initalized}},Me.Drive.even=function(t,r,n,o){function i(){return document.all?{capture:"attachEvent",pref:"on"}:{capture:"addEventListener",pref:""}}if(t&&n instanceof Function)try{r[i().capture](i().pref+t,n,o)}catch(s){e.err="Error wrong type"}},Me.Drive.prototype.getError=function(){return this.err},Me.Drive.prototype.isLoaded=function(){return Me.Drive.compare.ready}},Me.appdata={author:"Ferenc Szabo",protocollName:"nsMeridian",description:"Encounter for DOM level",version:"1.03"},Me.defineMember=function(){this.initalized={memberName:null,member:null,componentName:null,number:null},this.backup={},this.css={},this.component_data={},this.err_log="no",this.parent=function(){return this.member.parentNode},this.modify=function(){var e={},t=[],r=null,n=this.member.parentNode.tagName.toLowerCase(),o=this,i=(Me.Drive.attributes,new Me.CraftNew),s=0;this.constructor.combine(this,this.component_data);var a=Object.keys(this.component_data);for(var u in this.component_data)"function"!=typeof this.component_data[u]&&"object"!=typeof this.component_data[u]&&"err_log"!=u&&("text"==a[s]?"INPUT"==this.member.tagName?Me.Drive.attrcreator(this.member,"value",this.component_data[u]):this.member.textContent=this.component_data.text:Me.Drive.attrcreator(this.member,u,this.component_data[u])),s++;window.me_stylesets||(i.setMember("me_stylesets>style"),me_stylesets.type="text/css",me_stylesets.modify(),r=document.createTextNode(""),me_stylesets.member.appendChild(r),document.head.appendChild(me_stylesets.member)),rule_editor=function(e,r){var i=Object.keys(e),s="";if("undefined"!=typeof i[0]){for(var a in e)s+="		"+a.replace("_","-")+":"+e[a]+";\n",t=[];try{t.push(o.member.attributes.component.value),t.push(o.member.attributes.component.nodeName)}catch(u){o.err_log="This property cannot be set, or not allowed!"}""==r?Me.ruleList[t[0]]=n+" ["+t[1]+"="+t[0]+"]{\n"+s+"}\n":""!=r&&(Me.ruleList[t[0]+r.replace(":","_")]=n+" ["+t[1]+"="+t[0]+"]"+r+"{\n"+s+"}\n")}};!function(){if("function"==typeof o.css&&rule_editor(new o.css,""),Object.keys(o))for(var t in o)if("@"==t[0]&&"function"==typeof o[t]){var r=t.replace("@",":");rule_editor(new o[t],r)}if(Object.keys(o.css)){for(var n in o.css)"string"==typeof o.css[n]&&"@"!=n[0]&&(e[n]=o.css[n]);rule_editor(e,"")}}();me_stylesets.member.textContent="";for(var c in Me.ruleList)me_stylesets.member.textContent+=Me.ruleList[c]},this.get=function(e){if("string"==typeof e)try{return this.component_data[e]}catch(t){this.err_log="item not found!"}},this.on=function(e,t){e&&t&&Me.Drive.even(e,this.member,t,!1)},this.remove=function(e){0==e?this.member.parentNode.removeChild(this.member):(this.member.parentNode.removeChild(this.member),delete window[this.memberName])},this.restore=function(e){var t=0,r=this.member;switch(e){case"hide":if(this.member.hasChildNodes()){for(;this.member.firstChild;)this.backup["node"+t]=this.member.firstChild,this.member.removeChild(this.member.firstChild),t++;r.style.display="none"}break;default:if(Object.keys(this.backup)){for(var n in this.backup)this.member.appendChild(this.backup[n]);r.style.display="block"}}},this.getError=function(){return this.err_log}},Me.Use=function(e){Me.Use.offsets(Me.Drive,this),Me.Use.prototype=this,Me.Use.prototype.name=null,Me.Use.prototype.element=null;var t=null,r=0;this.constructor.construct(function(){Me.Use.attributes.push("component"),e?this.name=e:this.err="missing element property name!"});var n=function(e,t){return 0==t?document.querySelectorAll(e):document.querySelector(e)},o=function(e){if(e.name){do{r++;var o="["+Me.Use.attributes[r]+"="+arguments[0].name+"]";t="class"!=Me.Use.attributes[r]?n(o):n(o,!1)}while(r<Me.Use.attributes.length&&!n(o));arguments[0].element=t}};o(this),Me.Use.prototype.getresult=function(){return this.element},Me.Use.prototype.getError=function(){return this.err}},Me.CraftNew=function(){Me.CraftNew.offsets(Me.Drive,this),Me.CraftNew.prototype=this,Me.CraftNew.prototype.descriptor=null,Me.CraftNew.prototype.membernum=null,Me.CraftNew.new_member=null;var e=null,t=null,r=null;this.constructor.construct(function(){e=[],t=[],this.prefix="(.>)*",this.membernum=0},{descriptor:arguments});var n=function(e){Me.CraftNew.new_member=document.createElement(e)},o=function(e,t){r=document.createAttribute(e),r.value=t,Me.CraftNew.new_member.attributes.setNamedItem(r)},i=function(e){e.appendChild(Me.CraftNew.new_member)},s=function(r,s){var a=Me.CraftNew.regx(r.prefix);if(s[0]instanceof Object&&1==Me.ready){for(var u in s)for(var c in s[u])for(var l in s[u][c])"name"==l&&e.push(s[u][c].name.match(a)),"attributes"==l&&t.push(s[u][c].attributes.match(a));for(var m=0;m<e.length;m++)if("undefined"==typeof window[e[m][0]]){for(var p=0;p<e[m].length;p++)p%2&&(Me.global_count++,r.membernum=Me.global_count,n(e[m][p],e[m][p-1]),o("component",e[m][p-1]),o("membercount",Me.global_count));if(t[m])for(var h=0;h<t[m].length;h++)if(h%2){var f=t[m][h-1].replace("_","-"),d=t[m][h].replace("_","-");o(f,d)}i(document.body||document.head),Me.CraftNew.prepare_dna(Me.CraftNew.new_member,Me.CraftNew.new_member.attributes.getNamedItem("component").value,r)}}};s(this,this.descriptor),Me.CraftNew.prototype.craft=function(){e=[],t=[],s(this,Array.prototype.slice.call(arguments)[0])},Me.CraftNew.prototype.setMember=function(r,n){e=[],t=[],n||(n="no"),this.descriptor=[{n1:{name:r,attributes:n}}],s(this,this.descriptor)},Me.CraftNew.prototype.isMember=function(e){return window[e]?!0:!1}},Me.CreateQueue=function(){Me.CreateQueue.offsets(Me.Drive,this),Me.CreateQueue.prototype=this,Me.CreateQueue.prototype.descriptor=null;var e=this,t=null,r=null,n=null,o=0;this.constructor.construct(function(){this.prefix="(.>)*",t=[],n=Me.CreateQueue.usenode},{descriptor:arguments});var i=function(t,r){var i=null,s=null;i=new n(t).element,s=new n(r).element;try{i.appendChild(s)}catch(a){e.err="this thread is unavailable! ,row: "+o}},s=function(e){if(e.descriptor){for(var n=Me.CreateQueue.regx(e.prefix),s=0;s<e.descriptor.length;s++)t.push(e.descriptor[s].match(n));for(o=0;o<t.length;o++)for(var a=1;a<t[o].length;a++)r="body"==t[o][0]?document.body:t[o][0],i(r,t[o][a])}};s(this),Me.CreateQueue.prototype.shortqueue=function(){t=[],this.descriptor=arguments[0],s(this)},Me.CreateQueue.prototype.getError=function(){return this.err},Me.CreateQueue.prototype.setPattern=function(e){"string"==typeof e&&e.indexOf(">")>-1?(t=[],this.descriptor=new Array(e),s(this)):this.err="invalid expression, or string string not seperated. >"}},Me.setExternalSource=function(e,t,r){Me.setExternalSource.offsets(Me.Drive,this),Me.setExternalSource.prototype=this,Me.setExternalSource.prototype.source=null,Me.setExternalSource.prototype.handle=null,Me.setExternalSource.prototype.data=null;var n=null,o=null,i=null,s=null,a=null;this.constructor.construct(function(){this.handle=t,this.source=e,this.prefix="",this.data="",n=e.indexOf("jsx"),i=Me.CraftNew,s="",a=Me.setExternalSource.compare});var u=function(e){new i({1:{name:s+">"+o.cast,attributes:o.rel+"type>"+o.file+">"+o.anchor+">"+e.source}});var t="HTML"==e.path.tagName?e.path.childNodes[0]:e.path;t.insertBefore(window[s].member,t.childNodes[a.at])},c=function(i){if(i.source){i.source.indexOf("/")<0&&(i.source="./"+e);var a=i.source.lastIndexOf("/")+1;do s+=i.source[a],a++;while("."!=i.source[a]);switch(n){case-1:s+="_x",o={file:"text/css",cast:"link",anchor:"href",rel:"rel>stylesheet>"},u(i);break;default:o={file:"text/javascript",cast:"script",anchor:"src",rel:""},u(i),t&&!r&&"string"==typeof t?window[s].member.onload=function(){window[t]()}:i.err="arguments value need a string",t&&r&&"string"==typeof t?window[s].member.onload=function(){window[t].apply(this,r)}:i.err="arguments value incorrect, must be a string or array!"}}};c(this),Me.setExternalSource.prototype.getError=function(){return this.err}},Me.Emulate=function(){Me.Emulate.offsets(Me.Drive,this),Me.Emulate.prototype=this,Me.Emulate.prototype.component=null,Me.Emulate.prototype.mount=null,Me.Emulate.prototype.membernum=null;var e=null,t=null;this.constructor.construct(function(){e=Me.Emulate.usenode,t=Me.Emulate.prepare_dna,this.membernum=Me.global_count},{mount:arguments});var r=function(r){if(r.mount&&Me.ready)try{for(var n in r.mount){var o=new e(r.mount[n]);if(o.element)switch(typeof o.element.nodeType){case"undefined":for(var i=0;i<o.element.length;i++)r.membernum++,new t(o.element[i],o.element[i].className+i,r),Me.Emulate.attrcreator(o.element[i],"componenet",o.element[i].className+i),Me.Emulate.attrcreator(o.element[i],"membercount",r.membernum-1);break;default:r.membernum++,new t(o.element,r.mount[n],r),Me.Emulate.attrcreator(o.element,"componenet",r.mount[n]),Me.Emulate.attrcreator(o.element,"membercount",r.membernum-1)}else r.err="an error, a name can~t match any object(s)!"}}catch(s){r.err="unknown error!"}};r(this),Me.Emulate.prototype.emule=function(){this.mount=arguments[0],r(this)},Me.Emulate.prototype.getError=function(){return this.err}},Me.Controls=function(e){Me.Controls.offsets(Me.Drive,this),Me.Controls.prototype=this,Me.Controls.prototype.type=null;var t=null,r=null;this.constructor.construct(function(){this.type=e,this.path=self,t=Me.Controls.superb.bvCache,r=Me.Controls.superb.even}),Me.Controls.prototype.regist=function(n){var o=this;e&&!t.hasOwnProperty(this.type)?(t[this.type]=new Array,t[this.type][this.type.length]=n,r(this.type,this.path.parent,function(e){for(var r in t[o.type]){if(e)var i=e;else var i=null;n instanceof Function&&t[o.type][parseInt(r)](i)}},!1)):t[this.type].push(n)}},Me.nsMeridian.prototype={accessMember:window.Member=function(){var e=new Me.CraftNew;return e.craft(arguments),e},accessQueue:window.Pattern=function(){var e=new Me.CreateQueue;return e.shortqueue(arguments),e},accessUse:window.Use=function(e){var t=new Me.Use(e);return 1==arguments[1]?t:t.element},accessEmulate:window.Emule=function(){var e=new Me.Emulate;return e.emule(arguments),new Me.Emulate},accessXternal:window.loadModul=function(e,t,r){var n=new Me.setExternalSource(e,t,r);return n},accessControls:window.Behave=function(e){var t=new Me.Controls(e);return t},getVersion:function(){return Me.appdata}};
