<?php

include('inc/common.inc.php');
include('inc/sidebar_allgemeines.inc.php');

$title =' | Lichter';   

$content .= '
<div class="text">
<h2>Lichter</h2>
<hr />'; 

$content .= '
<h3>Navigationslichter</h3>
<p>Anhand der Lichter eines Schiffes lässt sich erkennen um welche Art von Schiff es sich handelt
und welchen Kurs es hat. Die Lichter müssen zwischen Sonnenuntergang und Sonnenaufgang und bei schlechter Sicht
geführt werden. Sie dienen NICHT dazu die Nacht zu erhellen um besser zu sehen, sondern ausschließlich um 
besser gesehen zu werden.</p>
<p>Es wird zwischen hellen und gewöhnlichen Lichtern unterschieden, wobei Gewerbliche Schiffe helle Lichter
führen müssen. Sie unterscheiden sich hauptsächlich in ihrer Sichtweite:</p>

<table>
<tr><th></th><th>Weiß</th><th>Grün & Rot</th></tr>
<tr><td>Hell</td><td>4 km</td><td>3 km</td></tr>
<tr><td>Gewöhnlich</td><td>2 km</td><td>1.5 km</td></tr>
</table>
<br />
<br />
<p>Im folgenden sehen sie die üblichen Lichter und die Sektoren in denen diese strahlen.</p>
<br />
<img src="img/beleuchtung.svg" alt="Lichterführung eines Bootes" />
<br />
<br />
<br />


<p>In folgender Tabelle sehen sie, welche Lichterführung zu welchem Fahrzeug gehört.</p>
<br />

<table>
<tr>
	<th>Fahrzeug</th>
	<th>Lichterführung</th>
</tr>
<tr>
	<td>Ruder-, Padel-, Tretboote</td>
	<td>Rundumlicht (weiß gewöhnlich)</td>
</tr>
<tr>
	<td>Segelboote unter Segel</td>
	<td>Rundumlicht (weiß gewöhnlich)</td>
</tr>
<tr>
	<td>Segelboote unter Motor</td>
	<td>Topplicht, Seitenlichter, Hecklicht (Seitenlichter und Hecklicht können auch in einer Dreifarbenlaterne zusammengefasst sein)</td>
</tr>
<tr>
	<td>Motorboot & Berufsfischer mit weniger als 4.4kW, Berufsfischer am Netz</td>
	<td>Rundumlicht (weiß gewöhnlich)</td>
</tr>
<tr>
	<td>Motorboot mit mehr als 4,4kW</td>
	<td>Topplicht, Seitenlichter (Können auch in einer Zweifarbenlaterne zusammengefasst sein)</td>
</tr>
<tr>
	<td>Gewerbeschiff</td>
	<td>Topplicht (Höher als Seitenlichter), Seitenlichter, Hecklicht</td>
</tr>
<tr>
	<td>Schleppverband, Gekuppelter Verband</td>
	<td>Schlepper: Topplicht, Seitenlichter, Hecklicht<br />
	Geschlepptes Fahrzeug: Rundumlicht</td>
</tr>
<tr>
	<td>Polizei, Feuerwehr, Rettungsdienste im Einsatz</td>
	<td>Topplicht, Seitenlichter, Hecklicht, Funkellicht</td>
</tr>
<tr>
	<td>Vorrangschiff</td>
	<td>Topplicht, Seitenlichter, Hecklicht, Rundumlicht (Grün, mindestens 1 m über Topplicht)</td>
</tr>
</table>
<hr />

<h3>Beleuchtung von Häfen und Landestellen</h3>
<p><img src="img/hafen.svg" alt="Beleuchtung von Häfen"/></p>
<hr />
';
		
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