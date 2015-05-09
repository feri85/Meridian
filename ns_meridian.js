var ClassCreate={
	_combine:Function.prototype.combine=function(st,nd){
		if(!(st instanceof Object)){st=new Object()};
		if(!(nd instanceof Object)){nd=new Object()};
		for(var key in st){nd[key]=st[key]};return nd;
	},
	_offsets:Function.prototype.offsets=function(from,to){
		this.prototype=new from(); var props=Object.keys(from);this.superb={};
		for(var n in props){this[props[n]]=from[props[n]];this.superb[props[n]]=from[props[n]]};
		for(var i in from.prototype){to[i]=from.prototype[i]}
		this.prototype=to; ClassCreate.isready('offsets');
	},
	_construct_shell:Function.prototype.construct=function(data,optional){
		if(typeof data=='function'){
			var craft=new data();data();
			if(optional instanceof Object){
				var backup=this.combine(this.prototype.constructor.arguments,optional); craft=this.combine(craft,optional);
			}
			for(var keys in craft){
				if(this.prototype.hasOwnProperty(keys)){this.prototype[keys]=craft[keys];}delete window[keys]
			}
		} ClassCreate.isready('construct');
	},
	isready:function(state){if(document.readyState=='complete'){Function.prototype[state].__proto__=null}}
} /*Make FunctionObject with functionName.prototype=this expression  Use offsets(the old and ,this) to create advanced classes from others.*/

var Me={
	global_count:0,
	nsMeridian:function(){Me.ready=true;}
};

Me.Drive=function(){
	Me.Drive.prototype=this; 			  
	Me.Drive.prototype.prefix=null; 	  //public for object - protected for user
	Me.Drive.prototype.err=null;
	Me.Drive.prototype.path=null;
	Me.Drive.prototype.appname=null;
	Me.Drive.usenode=Me.Use;
	Me.Drive.compare=false;
	Me.Drive.count=null;
	Me.Drive.defaultName=null; //protected for object - public for user
	Me.Drive.attributes=null;
	Me.Drive.bvCache=null;
	Me.Drive.system=window;
	var _this=null;
	this.constructor.construct(function(){
		this.prefix="";
		this.err="no error";
		this.path=document.children[0];
		this.appname='meridian';
		Me.Drive.defaultName='defaultMember';
		Me.Drive.attributes=['name','type','id','class','action','value','component','alt','src','href','width','height','title','data'];
		Me.Drive.bvCache={};
		_this=this
	});
	var is_compare=function(_this){
		var wrapper={},count=[];
		var place=_this.path.childNodes[0].childNodes;
		for(var t in place){
			if(place[t].tagName=='SCRIPT'){
				wrapper[t]=place[t];
			};
		};
		for(var n in wrapper){
			if(wrapper[n].attributes.getNamedItem('src') && wrapper[n].src.indexOf(_this.appname)){
				return {ready:true,at:parseInt(n)};
			};
		};
	};
	Me.Drive.regx=function(p){
		return new RegExp(p+"[a-zéáűúőóüíA-ZÉÁŰÚŐÓÜÍ\s\ \#\&\.\_\?\!\%\(\)\/\+0-9{1,}]{1,}","g");
	};
	Me.Drive.compare=is_compare(this);
	Me.Drive.attrcreator=function(node,prop,attrvalue){
		var option=document.createAttribute(prop);
		option.value=attrvalue;
		node.attributes.setNamedItem(option);
	}
	Me.Drive.prepare_dna=function(component,pointerID,_this){
		if(Me.ready){
			var sys=Me.Drive.system;
			sys[pointerID]=new Me.defineMember();
			sys[pointerID].initalized.member=component;
			sys[pointerID].initalized.memberName=pointerID;
			sys[pointerID].initalized.componentName=pointerID+_this.membernum;
			sys[pointerID].initalized.number=_this.membernum;
			this.constructor.combine(sys[pointerID].initalized,sys[pointerID]);
			delete sys[pointerID].initalized;
		};
	};
	Me.Drive.even=function(type,content,handle,bool){
		if(type && handle instanceof Function){
			try{
				if(document.all){
					var type='on'+type;
					content.attachEvent(type,handle);
				}
				else{
					content.addEventListener(type,handle,bool);
				};
			}catch(e){
				_this.err="Error wrong type";
			};
		};
	};
	Me.Drive.prototype.getError=function(){
		return this.err;
	};
	Me.Drive.prototype.isLoaded=function(){
		return Me.Drive.compare.ready;
	};
};

Me.appdata={
	author:"Ferenc Szabo",
	protocollName:"nsMeridian",
	description:"Encounter for DOM level",
	version:'1.03'
}

Me.defineMember=function(){
	this.initalized={
		memberName:null,
		member:null,
		componentName:null,
		number:null,
	};
	this.component_data={};
	this.err_log='no';
	this.modify=function(){
		var block='', report={}, selector=[],calc=[], number=null, txt=null, bound='';
		var selfTag=this.member.parentNode.tagName.toLowerCase(), that=this, valid=Me.Drive.attributes, cssnode=new Me.CraftNew() ;
		var pref=null, i=0, d=0; 
		this.constructor.combine(this,this.component_data);
		var propdata=Object.keys(this.component_data);
		//browsercheck
		var browsertype=function(pref){
			if(pref.indexOf('m_')>-1 && navigator.userAgent.indexOf('Firefox')){return '-moz-'+pref.replace('m_','')};
			if(pref.indexOf('c_')>-1 && navigator.userAgent.indexOf('Chrome')){return '-webkit-'+pref.replace('c_','')};
			if(pref.indexOf('o_')>-1 && navigator.userAgent.match('OPR|Opera') instanceof Array){return '-o-'+pref.replace('o_','')}
			return pref;
		}
		for(var c in this.component_data){
			if(typeof this.component_data[c]!='function' && typeof this.component_data[c]!='object'){
				if(propdata[i]=="text"){
					if(this.member.tagName==('INPUT'||'TEXTAREA')){
						Me.Drive.attrcreator(this.member,'value',this.component_data[c]);
					}
					else{
						this.member.textContent=this.component_data['text'];
					};
				};
			};
			i++;
		};
		//css maker
		if(!window['stylesets']){
			cssnode.setMember('stylesets>style');
			stylesets.type='text/css';
			stylesets.modify();
			txt=document.createTextNode('');
			stylesets.member.appendChild(txt);
			document.head.appendChild(stylesets.member);
		};
		rule_editor=function(process,e){
			var items=Object.keys(process);
			var props='';
			if(typeof items[0]!='undefined'){
				for(var mark in process){
					mark=browsertype(mark);
					props+='\t\t'+mark.replace('_','-')+':'+process[mark]+';\n';
					calc=[];
				}
				try{
					calc.push(that.member.attributes['component'].value);
					calc.push(that.member.attributes['component'].nodeName)
				}catch(err){
						that.err_log='This property cannot be set, or not allowed!';
				};
				
				Me.bound+=selfTag+' ['+calc[1]+'='+calc[0]+']'+e+'{\n'+props+'}\n'
				stylesets.member.textContent=Me.bound;
			};
		};
		var css_perform=function(){ 
			if(typeof that.css=='function'){
				rule_editor(new that.css(),'');
			}
			if(Object.keys(that)){
				for(var q in that){
					if(q[0]=='@' && typeof that[q]=='function'){
						var ev=q.replace('@',':');
					rule_editor(new that[q](),ev);
					}
				}
			}
			if(Object.keys(that.css)){
				for(var n in that.css){
					if(typeof that.css[n]=='string' && n[0]!=('@')){
						report[n]=that.css[n];
					}
				};
				rule_editor(report,'');
			}
		}();
	};
	this.get=function(requested){
		if(typeof requested=='string'){
			try{
				return this.component_data[requested];
			}
			catch(e){
				this.err_log="item not found!";
			};
		};
	};
	this.on=function(ev_type,handle_me){
		if(ev_type && handle_me){
			Me.Drive.even(ev_type,this.member,handle_me,false);
		};
	};
	this.remove=function(q){
		if(q==false){
			delete window[this.memberName];
		}
		else{
			this.member.parentNode.removeChild(this.member);
			delete window[this.memberName];
		};
	};
	this.getError=function(){
		return this.err_log;
	};
};

Me.Use=function(name){
	Me.Use.offsets(Me.Drive,this);
	Me.Use.prototype=this;
	Me.Use.prototype.name=null;
	Me.Use.prototype.element=null;
	var q=null, i=0, _this=null;
	this.constructor.construct(function(){
		if(name){
			this.name=name;
		}
		else{
			this.err='missing element property name!'
		};
	});
	var search=function(xp,t){
		if(t==false){
			return document.querySelectorAll(xp);
		}
		else{
			return document.querySelector(xp);
		};
	};
	var engine=function(_this){
		if(_this.name){
			do{	i++;
				var str='['+Me.Use.attributes[i]+'='+arguments[0].name+']';
				if(Me.Use.attributes[i]!='class'){ 
					q=search(str);
				}
				else{
					q=search(str,false);
				};
			}
			while(i<Me.Use.attributes.length && !search(str))
			arguments[0].element=q;
		};
	};
	engine(this);
	Me.Use.prototype.getresult=function(){
		return this.element;
	};
	Me.Use.prototype.getError=function(){
		return this.err;
	};
};

Me.CraftNew=function(){
	Me.CraftNew.offsets(Me.Drive,this);
	Me.CraftNew.prototype=this;
	Me.CraftNew.prototype.descriptor=null;
	Me.CraftNew.prototype.membernum=null;
	Me.CraftNew.new_member=null;
	var _this=null;
	var unf_name=null;
	var unf_attributes=null;
	var attributeset=null;
	this.constructor.construct(function(){
		unf_name=[];
		unf_attributes=[];
		this.prefix='(.>)*';
		this.membernum=0;
	},{descriptor:arguments});
	var open_newresourcename=function(node){
		Me.CraftNew.new_member=document.createElement(node);
	};
	var open_newattributes=function(attrname,attrvalue){
		attributeset=document.createAttribute(attrname);
		attributeset.value=attrvalue;
		Me.CraftNew.new_member.attributes.setNamedItem(attributeset);
	};
	var append=function(place){
		place.appendChild(Me.CraftNew.new_member);
	};
	var engine=function(_this,proplist){
		var rquest=null;
		var request=Me.CraftNew.regx(_this.prefix);
		if(proplist[0] instanceof Object && Me.ready==true){
			for(var n in proplist){
				for(var t in proplist[n]){
					for(var i in proplist[n][t]){
						if(i=='name'){
							unf_name.push(proplist[n][t].name.match(request));	
						};
						if(i=='attributes'){
							unf_attributes.push(proplist[n][t].attributes.match(request));
						};
					};
				};
			}
			for(var dim=0;dim<unf_name.length;dim++){
				for(var nv=0;nv<unf_name[dim].length;nv++){
					if(nv%2){
						Me.global_count++;
						_this.membernum=Me.global_count;
						open_newresourcename(unf_name[dim][nv],unf_name[dim][nv-1]);
						open_newattributes('component',unf_name[dim][nv-1]);
						open_newattributes('membercount',Me.global_count);
					};
				};
				if(unf_attributes[dim]){
					for(var av=0;av<unf_attributes[dim].length;av++){
						if(av%2){
							open_newattributes(unf_attributes[dim][av-1],unf_attributes[dim][av])
						};
					};
				};
				append(document.body);
				Me.CraftNew.prepare_dna(
					Me.CraftNew.new_member,
					Me.CraftNew.new_member.attributes.getNamedItem('component').value,
					_this
				);
			};
		};
	};
	engine(this,this.descriptor);
	Me.CraftNew.prototype.craft=function(){
		unf_name=[];
		unf_attributes=[];
		engine(this,Array.prototype.slice.call(arguments)[0]);
	};
	Me.CraftNew.prototype.setMember=function(tn,ta){
		unf_name=[];
		unf_attributes=[];
		if(!ta){
			ta='no';
		};
		this.descriptor=[{n1:{name:tn,attributes:ta}}];
		engine(this,this.descriptor);
	};
};

Me.CreateQueue=function(){
	Me.CreateQueue.offsets(Me.Drive,this);
	Me.CreateQueue.prototype=this;
	Me.CreateQueue.prototype.descriptor=null;
	var _this=this, definelist=null, ownernode=null, usenode=null, c=0;
	this.constructor.construct(function(){
		this.prefix='(.>)*';
		definelist=[];
		usenode=Me.CreateQueue.usenode;
	},{descriptor:arguments});
	var moveto=function(to,target){
		var o1=new usenode(to).element;
		var o2=new usenode(target).element;
		try{
			o1.appendChild(o2);
		}catch(e){
			_this.err='this thread is unavailable! ,row: '+c;
		};
	};
	var engine=function(_this){
		if(_this.descriptor){
			var request=Me.CreateQueue.regx(_this.prefix);
			for(var p=0;p<_this.descriptor.length;p++){
				definelist.push(_this.descriptor[p].match(request));
			}
			for(c=0;c<definelist.length;c++){
				for(var t=1;t<definelist[c].length;t++){
					if(definelist[c][0]=='body'){
						ownernode=document.body;
					}
					else{	
						ownernode=definelist[c][0];
					};
					moveto(ownernode,definelist[c][t])
				};
			};
		};
	};
	engine(this);
	Me.CreateQueue.prototype.shortqueue=function(){
		definelist=[];
		this.descriptor=arguments[0];
		engine(this);
	};
	Me.CreateQueue.prototype.getError=function(){
		return this.err;
	};
	Me.CreateQueue.prototype.setPattern=function(uint){
		if(typeof uint=='string' && uint.indexOf('>')>-1){
			definelist=[];
			this.descriptor=new Array(uint);
			engine(this);
		}
		else{
			this.err='invalid expression, or string string not seperated. >'
		};
	};
};

Me.setExternalSource=function(source,handle,list){
	Me.setExternalSource.offsets(Me.Drive,this);
	Me.setExternalSource.prototype=this;
	Me.setExternalSource.prototype.source=null;
	Me.setExternalSource.prototype.handle=null;
	var xt=null, strv=null, loader_config=null, byname=null, cf=null, q=[];
	this.constructor.construct(function(){
		this.handle=handle;
		this.source=source;
		this.prefix='';
		xt=source.indexOf('js');
		loader_config=Me.CraftNew;
		byname='';
		cf=Me.setExternalSource.compare;
		q=Me.setExternalSource.regx('()');
	});
	var import_as=function(p){
		new loader_config({
			 1:{
				name:byname+'>'+strv.cast,
				attributes:strv.rel+'type>'+strv.file+'>'+strv.anchor+'>'+p.source
			}
		});
		var place=p.path.childNodes[0];
		place.insertBefore(window[byname].member,place.childNodes[cf.at]);
	}
	var whichfile=function(_this){
		if(_this.source){
			if(_this.source.indexOf('/')<0){
				_this.source='./'+source;
			};
			var i=_this.source.lastIndexOf("/")+1;
			do{
				byname+=_this.source[i];
				i++;
			}while(_this.source[i]!='.');
			switch(xt){
				case -1:
					strv={file:'text/css',cast:'link',anchor:'hrref',rel:'rel>stylesheet>'};
					import_as(_this);
				break;
				default:
					strv={file:'text/javascript',cast:'script',anchor:'src',rel:''};
					import_as(_this);
					if(handle && !list && typeof handle=='string'){
						window[byname].member.onload=function(){
							window[handle]();
						};
					}
					else{
						_this.err='arguments value need a string';
					};
					if(handle && list && typeof handle=='string'){
						window[byname].member.onload=function(){
							window[handle].apply(this,list);
						};
					}
					else{
						_this.err='arguments value incorrect, must be a string or array!';
					};
				break;
			};
		};
	};
	whichfile(this);
	Me.setExternalSource.prototype.getError=function(){
		return this.err;
	};
}

Me.Emulate=function(){
	Me.Emulate.offsets(Me.Drive,this);
	Me.Emulate.prototype=this;
	Me.Emulate.prototype.component=null;
	Me.Emulate.prototype.mount=null;
	Me.Emulate.prototype.membernum=null;
	var eqvip=null, bound_DNA=null;
	this.constructor.construct(function(){
		eqvip=Me.Emulate.usenode;
		bound_DNA=Me.Emulate.prepare_dna;
		this.membernum=Me.global_count;
	},{mount:arguments});
	var engine=function(_this){
		if(_this.mount && Me.ready){
			try{
				for(var uints in _this.mount){
					var echo=new eqvip(_this.mount[uints]);
					if(echo.element){
						switch(typeof echo.element.nodeType){
						case 'undefined':
							for(var i=0; i<echo.element.length; i++){
								_this.membernum++;
								bound_DNA(echo.element[i],echo.element[i].className+i,_this);
								Me.Emulate.attrcreator(echo.element[i],'componenet',echo.element[i].className+i); 	//to listed elements if set the class, then simply operate
								Me.Emulate.attrcreator(echo.element[i],'membercount',_this.membernum-1);
							}
						break;
						default:
							_this.membernum++;
							bound_DNA(echo.element,_this.mount[uints],_this);
							Me.Emulate.attrcreator(echo.element,'componenet',_this.mount[uints]);
							Me.Emulate.attrcreator(echo.element,'membercount',_this.membernum-1);
						break;
						};
					}
					else{
						_this.err='an error, a name can~t match any object(s)!';
					};
				};
			}catch(e){
				_this.err='unknown error!'; 
			};
		};
	};
	engine(this);
	Me.Emulate.prototype.emule=function(){
		this.mount=arguments[0];
		engine(this);
	};
	Me.Emulate.prototype.getError=function(){
		return this.err;
	};
};

Me.Controls=function(type){
	Me.Controls.offsets(Me.Drive,this);
	Me.Controls.prototype=this;
	Me.Controls.prototype.type=null;
	var cache=null, even=null;
	this.constructor.construct(function(){
		this.type=type;
		this.path=self;
		cache=Me.Controls.superb.bvCache;
		even=Me.Controls.superb.even;
	});
	Me.Controls.prototype.regist=function(behavior){
		var that=this;
		if(type && !cache.hasOwnProperty(this.type)){
			cache[this.type]=new Array();
			cache[this.type][this.type.length]=behavior;
			even(this.type,this.path.parent,function(event){  //registred only once
				for(var i in cache[that.type]){
					if(event){
						var e=event;
					}
					else{
						var e=null;
					};
					if(behavior instanceof Function){
						cache[that.type][parseInt(i)](e);
					};
				};
			},false);
		}
		else{
			cache[this.type].push(behavior);
		};
	};
};

//This nsMeridian top Handlers, that must be in ISOLATED and separated names, allows to navigate.

Me.nsMeridian.prototype={
	accessMember:window['Member']=function(){
		var craftmember=new Me.CraftNew();
			craftmember.craft(arguments);
		return craftmember;
	},
	accessQueue:window['Pattern']=function(){
		var inshort=new Me.CreateQueue();
			inshort.shortqueue(arguments);
		return inshort;
	},
	accessUse:window['Use']=function(option){
		var eqvip=new Me.Use(option);
		return eqvip;
	},
	accessEmulate:window['Emule']=function(){
		var converter=new Me.Emulate();
			converter.emule(arguments);
		return new Me.Emulate;
	},
	accessXternal:window['loadModul']=function(s,f,a){
		var boot=new Me.setExternalSource(s,f,a);
		return boot;
	},
	accessControls:window['Behave']=function(t){
		var behavior=new Me.Controls(t);
		return behavior;
	},
	getVersion:function(){
		return Me.appdata;
	}
}

/*Documentation:

1. Member tool: creates one or more HTML objects to want, and places them in the body tag.
	This method need to call only one, and the setMember allows you to create one by one
	member objects. The original calls allowed to sets more items in an object.
	This section generates shadow objects for every performed html tags too, and sets on a 
	window theme. It's makes a direct connection for the member node.
	Eg.: {1:{name:_>type,attributes:item>values>...},2:{},3{},...}}
	(this means under construction, it may changed any time).
2. Pattern tool: this util helps you to manage a page design, orders the dependence between
	DOM's nodes. The setPattern is same as the original. Use node attribute-names in bracelet
	cases.
	Eg.:("to>ordered>...","_>_",...).
3. Use tool: select elements in a document, it's enough to use element one of attribute-name 
	for request it, and the .element postfix has instance of the result.
	Eg.:("atttrname").element
4. LoadModul tool: loads external css or javascript source. Assync with the main process.
	basic setup:
		-source:add full path of the script file.
		-optional handle: which will called if you needed. If handele name only a string.
		-optional list, handle argumentlist.
	Eg.:(source,handle,[argument list to call]).
5. Emulate tool: convert single HTML nodes to quick access objects in a DOM window. Usage to
	make a simple list from the attribute-names in a declaration part.
	Eg.:(name1,name2,name3...).
6. Behave tool: Event manipulation creates a typed event in window document chain wrapping 
	registered functions on at time. Usage this process, first call Behave and sets the type
	of event, the second case register the (event called) handlers for the event declared.
	(this means under construction, it may changed any time).
	Eg.: (etype).regist(handler), or var newevent=(type) newevent.regist(handler)...
	
   About window member objects:
	if the navigator objects already set in the page, you can simply use the HTML objects
	with them. The connection of both segment is the component name, that declares the 
	window's member. Accessing all properties of the given element across of this. 
	
	for more information of the author :Szabo Ferenc email:szaboferenc008@gmail.com
*/
