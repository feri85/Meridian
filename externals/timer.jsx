var datetime=function(elements,queue){
	var t=null;
	elements.setMember('clockboard>div','id>digitclock_board');
	elements.setMember('clocktitle>p','id>digitclock_title');
	elements.setMember('clock>p','id>digitclock');
	queue.setPattern('clockboard>clocktitle>clock');
	queue.setPattern('hammer>clockboard');
	if(t==null){
		t=setInterval(function(){timerset(clock)},1000);
	}
	
	clockboard.css.margin='60px';
	clockboard.css.padding='20px';
	clockboard.css.background_color='#eb5';
	clockboard.css.font_size='16pt';
	clockboard.css.color='#38e';
	clockboard.css.border='1px solid #38e';
	clockboard.css.border_radius='10px';
	clockboard.modify();
	
	clocktitle.text='clockboard:';
	clocktitle.css.font_size='12pt';
	clocktitle.css.margin='0px';
	clocktitle.css.padding='0px';
	clocktitle.modify();
};

function timerset(output){
	var date=new Date();
	var year=date.getFullYear();
	var month=date.getMonth();
	var day=date.getDate();
	var clockdata=''+date;
	var timer=clockdata.match(/([0-9]{1,}:[0-9]{1,}:[0-9]{1,})/g)[0];
	output.text=''+year+', '+correct(month)+', '+correct(day)+' - '+timer;
	output.modify();
}

function correct(data){
	if(parseInt(data)<10){
		return '0'+data;
	}
	else{
		return data;
	}
};
