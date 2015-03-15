var prefixes = ["Robo", "Tech"];
var suffixes = [" Eagles", "gineers"];

$(function(){
	$(".button").click(function(){
		
		var pre_index = Math.floor(Math.random() * prefixes.length);
		var pre = prefixes[pre_index];
		
		var suf_index = Math.floor(Math.random() * suffixes.length);
		var suf = suffixes[suf_index];		
		
		var name = pre + suf;
		$("#team").html(name)
	});	
});