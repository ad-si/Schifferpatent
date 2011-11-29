<?php

$topics = array(
'Der Bodensee' 				=> 'motorbootstypen',
'Wetterkunde' 				=> 'motor',
'Navigation' 				=> 'propeller',
'Ausrüstung' 				=> 'steuerung',
'Anker' 					=> 'sicherheit',
'Schifffahrtszeichen' 		=> 'motorboottheorie',
'Lichter' 					=> 'motorbootprüfung',
'Schallsignale' 			=> 'schallsignale',
'Notsignale' 				=> 'notsignale',
'Vorfahrtsregeln' 			=> 'Vorfahrtsregeln',
); 

$content .='<ul class="sidebar">';

foreach($topics as $name => $link){
	$content .= '<li><a href="'.$link.'">'.$name.'</a></li>';
}

$content .='</ul>';

?>
