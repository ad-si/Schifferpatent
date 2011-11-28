<?php

include('inc/common.inc.php');
include('inc/sidebar_allgemeines.inc.php');

$title =' | Schifffahrtszeichen';   

$content .= '
<div class="text">
<h2>Schifffahrtszeichen</h2>
<hr />
<h3>Verbote</h3>
<p>Die hier aufgeführten Zeichen entsprechen denen, der Anlage B der 
<a href="http://de.wikipedia.org/wiki/Bodensee-Schifffahrtsordnung" title="Bodensee-Schifffahrtsordnung">Bodensee-Schifffahrtsordnung</a>.
</p>
<br />'; 

$signs = array(
'Durchfahrt der gesperrten Wasserfläche für Fahrzeuge aller Art verboten',
'Fahrverbot für Fahrzeuge mit Maschinenantrieb',
'Überholverbot',
'Begegnungs- und Überholverbot',
'Liegeverbot',
'Ankerverbot',
'Festmacheverbot',
'Wendeverbot',
'Verbot, schädlichen Wellenschlag oder Sog zu erzeugen',
'Verbot, außerhalb der angezeigten Begrenzung zu fahren',
'Verbot des Wasserskifahrens',
'Verbot des Segelsurfbrettfahrens',
'Verbot des Fahrens mit Segelfahrzeugen',
'Gebot, die durch den Pfeil angezeigte Richtung einzuschlagen',
'Gebot, unter bestimmten Umständen anzuhalten',
'Geschwindigkeitsbegrenzung (auf 5 km/h)',
'Gebot, ein Schallzeichen zu geben',
'Gebot, besondere Vorsicht walten zu lassen',
'Beschränkte Durchfahrtshöhe',
'Beschränkte Durchfahrtsbreite',
'Das Fahrwasser ist eingeengt; die Zahl gibt den Abstand an, mit dem sich Fahrzeuge vom Schild entfernt halten sollen.',
'Empfehlung, sich auf der mit „grün“ bezeichneten Fahrwasserseite zu halten',
'Empfohlene Durchfahrtsöffnung bei Brücken für Verkehr in beiden Richtungen',
'Empfohlene Durchfahrtsöffnung bei Brücken für Verkehr nur in der Richtung in der die Zeichen sichtbar sind',
'Erlaubnis zum Stilliegen',
'Erlaubnis zum Ankern',
'Ende eines Verbots oder Gebots',
'Erlaubnis zum Wasserskifahren',
'Erlaubnis zum Segelsurfbrettfahren',
'Kennzeichnung der 2 m-Wasserlinie. Bei 2,5 m am Konstanzer Pegel ist seewärts der markierten Stelle eine Mindestwassertiefe von 2 m. Die Zahl auf der Tafel entspricht der in den verschiedenen Bodensee-Schifffahrtskarten eingetragenen Ordnungsnummer.',
'Taucherflagge (50 m Abstand)',
'Untiefen und Schifffahrtshindernisse');

for($i=1; $i<=count($signs); $i++){
	$content .= '
	<div class="sign">
		<img src="img/schifffahrtszeichen/'.$i.'.svg" alt="'.$signs[$i-1].'" />
		<br />
		<span>'.$signs[$i-1].'</span>
	</div>';
	
	if($i == 13) $content .= '<hr /><h3>Gebote</h3><br />';	
	if($i == 18) $content .= '<hr /><h3>Einschränkungen</h3><br />';
	if($i == 21) $content .= '<hr /><h3>Empfehlungen</h3><br />';
	if($i == 24) $content .= '<hr /><h3>Hinweiszeichen</h3><br />';
}

		
$content .= '</div>';

$template = new template($template_file);//Template parsen
$template->readtemplate();
$template->replace('TITLE', $title);
$template->replace('HEADER', $template_header);
$template->replace('MENU', $menu);
$template->replace('CONTENT', $content);
$template->replace('FOOTER', $footer);
$template->parse();

?>