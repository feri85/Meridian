window.onload=(function(){
  /*THis Is the test script for Meridian*/
var meridian=new Me.nsMeridian();
		
		Member({
			1:{name:'egg>div',attributes:'id>eggmember'},
			2:{name:'sandbox>div',attributes:'id>tryit>style>position:relative;width:800px;height:400px;overflow:hidden;border:1px solid black'},
			3:{name:'screwdriver>div',attributes:'id>metal'}
		});
		
		var align=Pattern();		
	
		var changenode=function(){
			egg.css.background_color=Use('stiling1').value;
			egg.css.width=Use('stiling2').value;
			egg.css.height=Use('stiling3').value;
			egg.css.margin=Use('stiling4').value;
			egg.text=Use('stiling5').value;
			egg.modify();
			egg['@hover']=function(){
				this.background_color='#d58';
			}
			egg.modify();
		}
		changenode();
		
		Use('changenode').onclick=function(){
			changenode();
		}
		
		screwdriver.css=function(){
			this.background_color='#a8b';
			this.width='150px';
			this.height='100px';
			this.margin='20px';
		};
		screwdriver.modify();
		
		align.setPattern('sandbox>egg>screwdriver');
		
});
