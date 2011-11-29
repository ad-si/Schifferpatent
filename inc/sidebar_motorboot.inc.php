<?php

$topics = array(
'Bootstypen' 				=> 'motorbootstypen',
'Der Motor' 				=> 'motor',
'Der Propeller' 			=> 'propeller',
'Steuerung' 				=> 'steuerung',
'Sicherheit' 				=> 'sicherheit',
'Fahrtheorie' 				=> 'motorboottheorie',
'Die praktische Prüfung' 	=> 'motorbootprüfung',
); 

$content .='<ul class="sidebar">';

foreach($topics as $name => $link){
	$content .= '<li><a href="'.$link.'">'.$name.'</a></li>';
}

$content .='</ul>';

?>
