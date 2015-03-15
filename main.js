var prefixes = ['Bionic', ' Cyber', ' Robo', ' Gear', ' STEM', ' STEAM', ' Killer', ' Techno', ' Tech', ' Mecha', ' Metal', ' Steel', ' Atomic', ' Atom', ' Viking', ' Mech', ' Rainbow', ' Sci', ' Laser', ' Panther', ' ', ' Green', ' Red', ' Blue', ' Flying', ' Titanium', ' Digital', ' Alpha', ' Electric'];
var suffixes = [' Gears', ' Bots', 'gineers', ' Hawks', ' Horses', ' Cats', ' Pack', ' Team', ' Devils', ' Storm', ' Warriors', ' Knights', 'heads', ' Atoms', ' Robotics', ' Dogs', ' botics', ' Monkeys', ' Birds', ' Tech', ' Dragons', ' Ponies', ' Botz', ' Sharks', ' Nerds', ' Force', ' Fire', ' Machines', ' Tigers', ' Ninjas', ' Bulldogs', ' Titans', ' Rats', ' Panthers', ' Stallions', ' Beavers', ' Colts', ' Chaos', ' Wolves', ' Eagles'];

$(function(){
	$(".button").click(function(){
		
		var pre_index = Math.floor(Math.random() * prefixes.length);
		var pre = prefixes[pre_index];
		
		var suf_index = Math.floor(Math.random() * suffixes.length);
		var suf = suffixes[suf_index];	

		var number = Math.floor(Math.random() * (999)) + 6000;
		
		var name = "Team #" + number + " The " + pre + suf;
		$("#team").html(name);
	});	
});