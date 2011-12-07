<?php

function escape($text) {
     return htmlspecialchars($text);
}

function getSidebar($daten){

$notAvailable = array(
	'Navigation',
	
	'Bootstypen',
	'Rumpfformen',
	'Bug- und Heckformen',
	'Takelungsarten',
	'Stehendes Gut',
	'Laufendes Gut',
	'Koch- & Sanitäreinrichtung',
	'Leinen',
	'Segeltheorie',
	'Segelpraxis',
	
	'Bootstypen',	
	'Der Motor',
	'Steuerung',
	'Sicherheit',
	'Fahrtheorie',
);

	$var ='<ul class="sidebar">';
	
		foreach($daten as $name => $link){
			$var .= '<li><a ';
			
			if(in_array($name, $notAvailable)) $var .= 'style="text-decoration: line-through"';
			 
			$var .= 'href="'.$link.'">'.$name.'</a></li>';
		}
	
	$var .='</ul>';
	
	return $var;
}