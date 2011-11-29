<?php

$topics = array(
'Bootstypen' 				=> 'segelbootstypen',
'Rumpfformen' 				=> 'rumpfformen',
'Bug- und Heckformen' 		=> 'bug-und-heckformen',
'Takelungsarten' 			=> 'takelung',
'Stehendes Gut' 			=> 'stehendes-gut',
'Laufendes Gut' 			=> 'laufendes-gut',
'Das Segel' 				=> 'segel',
'Beschläge' 				=> 'beschläge',
'Koch- & Sanitäreinrichtung'=> 'einrichtung',
'Leinen' 					=> 'leinen',
'Segeltheorie' 				=> 'segeltheorie',
'Segelpraxis'				=> 'segelpraxis',
'Die praktische Prüfung'	=> 'segelbootprüfung',
); 

$content .='<ul class="sidebar">';

foreach($topics as $name => $link){
	$content .= '<li><a href="'.$link.'">'.$name.'</a></li>';
}

$content .='</ul>';

?>