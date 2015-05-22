function tools(generator,queue){
	generator.setMember('block1>div','id>listcontainer');
	generator.setMember('list>ul','id>toollist');
	for(var i=0; i<10; i++){
		generator.setMember('items'+i+'>li','id>toollist'+i);
		queue.setPattern('list>items'+i);
		window['items'+i].text='tool item'+i;
		if(i%2){
			window['items'+i].css.background_color='#ccc';
		}
		else{
			window['items'+i].css.background_color='#5d7';
		}
		window['items'+i].modify();
	}
	block1.css.width='160px';
	block1.modify();
	queue.setPattern('block1>list');
	queue.setPattern('hammer>block1');
};
