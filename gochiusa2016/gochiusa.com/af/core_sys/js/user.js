function Flash_Call(swf,widht,height){
quality = 'high';
scale = 'noscale';

document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" WIDTH="'+widht+'" HEIGHT="'+height+'" id="flash" ALIGN="middle"><PARAM NAME=movie VALUE="'+swf+'"><param name="salign" value="lt" /><PARAM NAME=quality VALUE='+quality+'><param name="scale" value="'+scale+'" /> <PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src="'+swf+'" quality='+quality+' bgcolor=#FFFFFF scale='+scale+' salign="lt" WIDTH="'+widht+'" HEIGHT="'+height+'" NAME="flash" ALIGN="middle" TYPE="application/x-shockwave-flash"></EMBED></OBJECT>')
}


