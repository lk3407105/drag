

function drag(id) {
	var obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown = function(ev) {
		var ev = ev || window.event;
		
		disX = ev.clientX - obj.offsetLeft;
		disY = ev.clientY - obj.offsetTop;
		
		if(obj.setCapture) {
			obj.setCapture();			
		}
		
		document.onmousemove = function(ev) {
			var ev = ev || window.event;
			
			obj.style.left = ev.clientX - disX + 'px';
			obj.style.top = ev.clientY - disY + 'px';
		};
		document.onmouseup = function() {
			document.onmouseup =  document.onmousemove = null;
			
			if(obj.releaseCapture) {
				obj.releaseCapture();
			}
		};
		
		return false;
	};
}