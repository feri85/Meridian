# nsMeridian (encounter for DOM)
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
2. Pattern tool: this util helps you to manage an webpage design, orders the dependence between
	DOM's nodes. The setPattern is same as the original. Use node attribute-names in bracelet
	cases.
	Eg.:("to>ordered>...","_>_",...).
3. Use tool: select elements in a document, it's enough to use element one of attribute-name 
	for request it.
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

  
HUN. description / Magyar:

1.Member tool:

	Egy vagy több HTML elemet lehet készíteni vele, ezek a body részeként jelennek meg, alapértelmezett
	állapotban. Mindegyik elemhez regisztrál egy component azonosítót, melynek egyedinek kell lennie,
	és kötelező elem/ attribútum.
	A metódus 'árnyék' objektumokat készít a HTML elemmel egyidejűleg, melyek neve: 'Member' objektum, és  a
	window rétegen lesznek elhelyezve. Ezután az objektumokra a component nevükkel lehet hivatlozni.
	Egyetlen paramétere van, amely egy objektum, és ez bontódik több objektumra. Kizárólag objekumot fogad el.
	
	Szintaxis:
		(miután az alkalmazást aktiváltuk a feljebb leírtaknak megfelelően).
		
		Az objektumok (member) gyártása a következőképp történik.
		
		a, Több elem készítése egyszerre:
		
		 Member({
			1:{name:'componentname>tagname','attributename1>value1>attributename2>value2...n'},
			2:{name:'....n},
			n:{}
		});
		
		b, Vagy egyenként:
		
		var member=Member(...);
		member.setMember('componentname>tagname','attribute1>value1>attribute2>value2>..n');
		
	Az elkészült objektumok ezután közvetlenül elérhetők lesznek.
	
		A komponens nevének megadásával hivatkozunk az objektumra.
		
		Pl: (Member- componentname legyen 'haz>div')
		
		most csak a 'haz' kell.
		
		ekkor:
		
		haz.id='panelhaz';
		haz.class='tombhazak';
		...
		haz.css.background_color='';
		haz[@pseudo]=function(){
			this.border='';
			this.color='';
		}
		haz.modify();
		
		A modify függvény regisztrálja az adott HTML elemen és az objektumon a változásokat, ennek a metó-
		dusnak nincsenek argumentumai;
		
		Figyelmeztetés!
		
		A css attribútum megadásával egy css 'script' is létrejön, a head tag-en belül. az objektumon megadott
		tulajdonságok itt lesznek deklarálva. (Ez összeférhetetlenség forrása lehet).

		Továbbá a  html elérése a .member tulajdonságon keresztül lehetséges.

		Pl:  console.log(haz.member) ez a hivatkozott HTML objektumot adja.

2.Pattern tool:
		
		A  már lelkészült, vagy az oldalon alapból meglévő html elemek függőségi viszonyát lehet vele egyszerű
		módon
		rendezni. Az oldal 'mintázatáért' megjelenéséért felel. 
		
		Szintaxis:
		
			Itt is kétféle módon adhatjuk meg a paramétereket, tömbösített, vagy egyszeri beállításos
			módszerrel.

			a, Pattern('szülőelem>leszármazott1>leszármazott2>leszármazottn...'
			,'szülőelem0>leszármazott1>leszármazott2>leszármazottn...' ,'n.....' );

			b, var pattern=Pattern(...);
			    pattern.setPattern('szülőelem>leszármazott1>leszármazott2>...n');
		
		Az elemek HTML elemek és valamely attribútum értékkel kell megadni őket a string kifejezésben. A 
		paraméterek kizárólag csak sztringek lehetnek.


		Pl: pattern.setPattern('doboz>bohóc>csoki>tojás>stb... '); 

		az attribútum értékek lehetnek (id, component, alt src, href, name... ), többségében ami egy adott
		elemet azonosít.
		
		A karakter láncokat, a benne lévő elemek (tulajdonság értékeit) azonosítóit, itt is a '>' jellel
		választjuk el egymástól.
		A karakter sorozat ban megjelölt első kifejezés a tároló elem lesz, ez tart a '>' -jelig, az ezzt
		követőek pedig sorrendben
		az alkotórészek.

3:Use tool:

		Elemeket választhatunk ki vele az oldalon, elegendő az elem egy tulajdonság értékét megadni.( pl: egy
		input típusú elem esetén 
		a name tulajdonság értékét.), egyetlen paramétere van tehát, és string-ként kell megadni. vVsszatér a
		kiválasztott elemmel.

		Szintaxis:
			
			Use('anattributevalue');


		Figyelmeztetés!
		
		A kiválasztás a querySelector DOM beépített fügvénye segítségével történik. Ez a metódus nem képezi az
		alakalmazás fő vonalát.
		Lassabb lehet mint más eljárások.

		
		Pl: Use('glass')  ahol  <div alt=glass>

4.Emule tool:

		Az oldalon már meglévő (külsö) elemekből készít member objektumokat. Melyek megkapják az
		'elődefiniáltaknak' megfelelő  kialakítású member objektumot. Működését tekintve hasonlóan az Use
		függvényhez, string paramétereket kell megadni amelyek, az adott html elemek
		 egy tulajdonság értékei.
		
		Szintaxis:

			Emule('attrvalue1',attrvalue2,...n);


		Pl: Emule('mirror','magic');
		
5:loadModul tool:

		Egyes különálló programrészletek betöltését teszi lehetővé utólagosan, az oldal betöltődése után.
		Kétféle fájltípust képes importálni javascript valamint css fájlokat. A betöltött részek a az
		dokumentum head blokkjában kerülnek inicializálásra. A paraméterezés a stíluslapok kivételével, 
		1-3-ig terjed.
		A betöltött program esetében is egy objektum biztosítja, majd az elem gyors elérését. A componet a
		fálj neve lesz (kiterjesztés nélkül).
		Ezen keresztül tudjuk, majd elérni a hozzá rendelt objektumot, és  a script / style elemet.
	
		a, Stíluslapok betöltése:

			Egyetlen paramétert kell megadni, stringként. A teljes elérési útvonalat, és a fáljnevet a
			kiterjesztéssel (.css).
			A könyvtárak elválasztása a szokásos '/' jellel történik a karakterláncban (NEM  '>' ).

				Szintaxis:
		
					loadModul('./subfolder/filename.css');

			
			Pl: loadModul('./examples/styleupdate.css');


		b, Javascript betöltése:
		
			3 lehetséges módja van, ez esetbena betöltendő fájl nevét (.jsx) kiterjesztéssel
			megkülömböztetve kell megadni.

			1. csak a fájl elérési útvonalát adjuk meg a fájl nevével, egy stringet kell megadni
			paraméterként.
			2 .fáj elérési útvonala, és a meghívott függvény neve, 2db string paramétert kel megadni, a
			második a fügvény neve.
			3. fájl elérése, a meghívott függvény neve és annak paraméterei,  3 paramétert kell megadni az
			utolsó egy array típus mely a hívott függvénynek átadandó paramétereket tartalmazza.

				Szintaxis:

					1. LoadModul('./folder/filename.jsx');
					2. LoadModul('./folder/filename.jsx','handlername');
					3. LoadModul('./folder/filename.jsx','handlername',[parameters...]);

				
				Pl:  LoadModul('./termekek/lampaanimacio.jsx', 'demo', [kep1,kep2...]);


6 Behave tool:

		Esemény hozzáadása egy kiválasztott elemhez. Egy kiválasztott eseméyhez több viselkedés hozzáadását
		teszi lehetővé.
		A viselkedések különálló fügvényekként regisztrálódnak az alap eseményhez, a program bármely pontján.
		
		Kétféle módja van az eseménykezelő használatának:
		A kezelő minden esetben egy objektum típusú paramétert vár, majd az egyes viselkedésfüggvényeket erre
		az alapra lehet 'regisztrálni' a programunk egyes fázisaiban. 
		Alap esetben ha nem adjuk meg az elem nevét akkor a dokumentumunk body elemére vonatkozik majd az
		eseménykezelő.

		Szintaxis:

			Behave({type:'eventType'}).regist(handler);
			
			vagy
			
			var behave=Behave({type:'eventType'}); 
			     behave.regist(handler);

			ha több viselkedést akarunk használni, akkor mindenképpen a második formát használjuk.
			
			Viselkedések használata egy kiválasztoott objektumon.
			
			var behave=Behave({type:'eventType', connect:'nodename'});
			     behave.regist(handler1);
			     behave.regist(handler2);
			     ...
			     behave.regist(handlern);


		Pl: var ajto=Behave({type:'mousedown',connect:'ajtoID''});
		          ajto.regist(kinyit);
			
		         var  kinyit=function(e){
			  ....
		         };

 		         ajto.regist(becsuk);

		         var becsuk=function(e){
			  var m=e.target..
			  ....
		         };

		         ajto.regist(function(){
			  ....
		        });


		Figyelmeztetés!
			
		az esemény típusánál az on előtagot nem kell megadni. ('click', 'mouseup', 'load', 'mouseover', stb...);


Néhány egyéb funkció:
		
		Az  objektum törlése: a komponens nevének megadása után a remove() parancs megadásával,
		az objektum és a HTML elem is törlődni fog.
		
		pl: aranylabda.remove();

		A member (html node) blokkolása, szüneteltetése (breaking): az elem inaktív módba kerül, de az
		árnyékobjektum megmarad, a member tulajdonság továbbra is aktív.
		
		pl: popupmenu.restore('hide'). ekkor eltűnik az elem.
	                 popupmenu.restore(). ekkor ismét látható lesz az elem.


		Egy adott objektum meglétének ellenőrzése: amikor a Member()-t deklaráltuk és átadtuk egy változónak, 
		( var modell=Member();) A következőekben a változó segítségével lekérhetők egyéb lehetőség, pédául
		egy adott member objektum meglétének ellenőrzése.

		ekkor a  modell.isMember('objectname'); parancs hasznos lehet.


	
