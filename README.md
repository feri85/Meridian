# Meridian (encounter for DOM). v. 1.03.
javascript web-application (front-end).

This is the basic documentation for my 'short' javascript web program.
you will find this guide in the end of the source code too.

Ez az alapvető dokumentáció a javascript web alkalmazásomhoz.

For initialize this code on your webpage:

The source file-name must be contain the 'meridian' word.

A forráskód fájlnévnek tartalmaznia kell a 'meridian' szavat.

window.onload=function(){
  var meridian=new nsMeridian();
}

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
	
	Needed experience for beginners to this app:
	
	Perfect HTML skills, general knowledge for write javascript codes.
	
	(Sory for my English skills). 
	
	A magyar nyelvű leírást is mellékelem majd hamarosan, ha egyszer oda jutok :)
	
	
