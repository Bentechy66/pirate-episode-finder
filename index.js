function YarHarFiddleDeeDee(show, season, episode) {
	/// CommonJS import
	const PirateBay = require('thepiratebay')
	const open = require("open");

	PirateBay.search(`${show} S0${season}E0${episode}`, {
	  category: 205
	})
	.then(results => open(results[0].magnetLink))
	.catch(err => console.log(err))
}

 
var prompt = require('prompt-console');
 
//syntax: prompt.ask(array of objects(with question details), success callback function); 
 
prompt.ask(
    [{   
    question: 'What show would you like to search for?',
        validator: 'notNULL',
        color: 'green',
        name: 'show'
    },{   
        question: 'Which season? ',
        validator: /\d/, //can be any regex expression or function 
        color: 'yellow',
        name: 'season'
    },{
        question: 'And episode? ',
        validator: /\d/, //can be any regex expression or function 
        color: 'yellow',
        name: 'episode'
    }], function(response){
        YarHarFiddleDeeDee(response.show, response.season, response.episode);
    }
);
 
// the validator can be a pattern or a function(returning true/false) 
 
