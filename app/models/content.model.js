'use strict';
function content{

	this.id=
	this.type="";
	this.title=""
	this.fileName=""; //initialisé avec content.fileName = content.id + ".txt" ;
	this.Data="";



//méthodes

function static create(content, callback){ //comment distinguer données et méta données ?

	console.log("Je suis dans le create de content.model.js");
	
	var fs = require("fs");



		fs.writeFile('content.fileName', content.getData(), function (err) {
		    if (err) {
		        return console.log(err);
		    }
		    console.log("The file was saved!");
		}); 
	 };



//stocke le contenu de [content.data] dans le fichier [content.fileName]
// et les méta dnnées dans [contentModel.id].meta.json dans le répertoire [CONFIG.contentDirectory]
}

function static read(id, callback){

	var fs = require('fs');

for(var i=2;i<data.length;i++){

fs.readFile(process.argv[2+i], function(err, data) { //ne peut pas marcher avec process.argv parce qu'on va récupérer du texte qui n'est pas muni d'un id, donc impossible à comparer
	if()
}
}
// utiliser un forEach pour parcourir le fichier JSON ? Un JSON.parse ?
	// prend un id en paramètre et retourne l'objet contentModel lu depuis [content.id].meta.json
};

function static update(content, callback){

	//prend l'id d'un contentModel en paramètre et met à jour le fichier [content.id].meta.json et le fichier [content.fileName] si content.data est renseigné non null et >0
}

function static delete(id, calback){

	const fs = require('fs');

	fs.unlink('direction', (err)=> { //quelle direction préciser ?
if(err) throw err;
console.log('successfully deleted');

	});

	// supprime les fichiers data et metadata
}

//constructeur



}
