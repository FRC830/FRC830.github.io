var prefixes = [' Alpha', ' Atom', ' Atomic', ' Bionic', ' Blue', 
                ' Cyber', ' Digital', ' Electric', ' Electro', ' Flying',
                ' Gear', ' Green', ' Iron', ' Killer', ' Laser',
                ' Lightning', ' Mech', ' Mecha', ' Metal', ' Panther',
                ' Plasma', ' Quantum', ' Rainbow', ' Red', ' Robo', 
                ' Robotic', ' Rocket', ' STEAM', ' STEM', ' Sci',
                ' Steel', ' Tech', ' Techno', ' The', ' Thunder',
                ' Titanium', ' Turbo', ' Viking'];
                
var suffixes = [' Atoms', ' Beavers', ' Bees', ' Birds', ' Bots',
                ' Botz', ' Bulldogs', ' Cats', ' Chaos', ' Colts',
                ' Devils', ' Dogs', ' Dragons', ' Eagles', ' Fire',
                ' Force', ' Gears', ' Hawks', ' Huskies', ' Knights',
                ' Machines', ' Martians', ' Mayhem', ' Monkeys', ' Nerds',
                ' Ninjas', ' Pack', ' Panthers', ' Penguins', ' Phoenix',
                ' Pirates', ' Ponies', ' Rangers', ' Rats', ' Robotics',
                ' Sharks', ' Spartans', ' Stallions', ' Storm', ' Team',
                ' Tech', ' Tigers', ' Titans', ' Trojans', ' Warriors',
                ' Wolves', 'botics', 'gineers', 'heads', 'trons'];

$(function(){
    $(".button").click(function(){
        
        var pre_index = Math.floor(Math.random() * prefixes.length);
        var pre = prefixes[pre_index];
        
        var suf_index = Math.floor(Math.random() * suffixes.length);
        var suf = suffixes[suf_index];  

        var number = Math.floor(Math.random() * (999)) + 8000;
        
        var name = "Team #" + number + pre + suf;
        $("#team").html(name);
    }); 
});
