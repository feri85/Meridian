window.onload=(function(){
  /*THis Is the test script for Meridian*/
	var meridian=new Me.nsMeridian();
	var member=Member({
			1:{name:'egg>div',attributes:'id>eggmember'},
			2:{name:'sandbox>div',attributes:'id>tryit>style>position:relative;width:700px;height:auto;border:1px solid black'},
			3:{name:'screwdriver>div',attributes:'id>metal'},
			4:{name:'oil>p',attributes:'id>machines'},
			5:{name:'hammer>div',attributes:'id>hard>style>width:300px;height:250px'}
	});
		
	var align=Pattern();		
		
	oil.text='oil: Black dust'
	oil.css.font_size='20px';
	oil.css.font_family='arial';
	oil.modify();
	
	hammer.text='hammer:';
	hammer.css.background_color='#ac9',
	hammer.css.position='absolute';
	hammer.css.top='10px';
	hammer.css.left='300px';
	hammer.css.border_radius='30px';
	hammer.css.text_align='center';
	hammer.css.border='1px solid blue';
	hammer.modify();
	
	var changenode=function(){
		egg.css.background_color=Use('stiling1').value;
		egg.css.width=Use('stiling2').value;
		egg.css.height=Use('stiling3').value;
		egg.css.margin=Use('stiling4').value;
		egg.text='egg: '+Use('stiling5').value;
		egg.css.color='yellow';
		egg.modify();
		egg['@hover']=function(){
			this.background_color='#d58';
	}
	egg.modify();
	}
	egg.on('click',function(){
		egg.text='snake';
		egg.modify();
	});
	changenode();
	align.setPattern('sandbox>egg>screwdriver>oil>hammer');
	Use('changelooking3').onclick=function(){
		if(Use('patterneditor').value){
			align.setPattern(Use('patterneditor').value);
		}
	}
	align.setPattern('sandbox>egg>screwdriver>oil>hammer');
		
		Use('changenode').onclick=function(){
			changenode();
			
	}
	screwdriver.text='screwdriver: build machines';
	screwdriver.css=function(){
		this.background_color='#a8b';
		this.width='150px';
		this.height='100px';
		this.margin='20px';
	};
		screwdriver.modify();
		
	Use('changelooking1').onclick=function(){
		align.setPattern('hammer>oil');
	}
	Use('changelooking2').onclick=function(){
		Pattern('screwdriver>oil','hammer>screwdriver>egg');
	}
	Use('loader1').onclick=function(){
		loadModul('./externals/tutorial.jsx','createmembers',[member,align]);
	}
	Use('loader2').onclick=function(){
		if( Use('pathname').value!='' && Use('handlername').value!='')
		loadModul(Use('pathname').value,Use('handlername').value,[member,align]);
	}
		
});
