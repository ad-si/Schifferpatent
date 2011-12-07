<?php

include('inc/common.inc.php');
include('inc/sidebar_motorboot.inc.php');

$title =' | Sicherheit';   

$content .= '
<div class="text">
<h2>Sicherheit</h2>
<hr />'; 

$content .= '
<h3>Die Tankanlage</h3>
<ul>
	<li>Der Tank sollte sich in einem abgeschotteten Bootsteil befinden, damit sich im Falle
	eines Lecks das Benzin nicht im ganzen Schiff verteilt.</li>
	<li>Der Tank muss so sicher eingebaut sein, dass er sich selbst bei starkem Sehgang nicht löst.</li>
	<li>Die Außenhaut des Schiffes darf nicht Teil des Tankes sein</li>
	<li>An der Treibstoffleitung muss direkt am Tank ein Absperrhahn angebracht sein, damit
	mit bei einem Bruch der Leitung nicht das Boot vollläuft.</li>
	<li>Aus der Tankentlüftung entweichende Gase dürfen nicht ins Boot gelangen können.
	Außerdem sollten sie ein Zündgitter zum Schutz vor Flammen haben.</li>
	<li>Dieseltanks dürfen nie ganz leer gefahren werden, da sonst Luft angesaugt werden würde, wodurch der Motor
	wiederum aufwendig entlüftet werden müsste</li>
	<li>Die Tankanlage muss geerdet sein</li>
</ul>

<hr />

<h3>Das Tanken</h3>
<p>Nach dem Tanken können sich Benzindämpfe im Schiff bilden, die beim Einschalten der Zündung
schwere Explosionen hervorrufen können.<br />
Um dies zu vermeiden muss beim Tanken folgendes beachtet werden:</p>
<ul>
	<li>Motor ausschalten</li>
	<li>Nicht rauchen</li>
	<li>Keine elektrischen Schalter betätigen</li>
	<li>Nicht von Board gehen</li>
	<li>Kontakt zwischen den Metallteilen des Tankhahns und des Einfüllstutzen herstellen</li>
</ul>
<br />
<p>Nach dem Tanken ist folgendes zu beachten:</p>
<ul>
	<li>Luken und Fenster öffnen</li>
	<li>Verschütteten Treibstoff beseitigen</li>
	<li>Das Lüftergebläse im Motorraum für kurze Zeit laufen lassen (sollte auch vor dem Start des Motors gemacht werden)</li>	
</ul>

<hr />

<h3>Brandschutz</h3>
<p>Trotz aller Sicherheitsmaßnahmen ist ein Brand an Bord niemals völlig auszuschließen.
Deshalb müssen immer fachgerecht geprüfte Feuerlöscher an Bord mitgeführt werden.
Für Boote mit einem Einbaumotor mit mehr als 4,4 kW, einem Außenborder mit mehr als 7,4 kW
oder mit Koch- und Heizeinrichtungen ist mindestens ein 2 kg Feuerlöscher vorgeschrieben.
Pro 100 l Treibstoff muss ein weiterer Feuerlöscher mitgeführt werden.</p>
<table>
	<tr>
		<th></th>
		<th>Glutbrandlöscher</th>
		<th>Schaumlöscher</th>
		<th>CO<sub>2</sub>-Löscher</th>
	</tr>
	<tr>
		<td>Funktionsweise</td>
		<td>Funktionieren mit dem <a href="http://de.wikipedia.org/wiki/Heterogene_Inhibition">antikatalytischen Prinzip</a>.</td>
		<td>Die geschlossene Oberfläche verhindert ein erneutes Nachzünden und kühlt den Brandherd ab.</td>
		<td>Verdrängt den für ein Feuer nötigen Sauerstoff und funktioniert somit rückstandsfrei.</td>
	</tr>
	<tr>
		<td>Nachteile</td>
		<td>Gelöschtes Material wird nicht abgekühlt. Somit gast es weiter</td>
		<td>Es bleiben Rückstände</td>
		<td>Gefahr einer CO<sub>2</sub>-Vergiftung in kleinen Räumen</td>
	</tr>
	<tr>
		<td>Brandklasse A: Feste Stoffe<br />(Holz, Papier, Textilien, Gummi)</td>
		<td>+</td>
		<td>+</td>
		<td></td>
	</tr>
	<tr>
		<td>B: Flüssige und flüssig werdene Stoffe<br />(Benzin, Öle, Lacke, Wachse, Alkohol, Kunststoffe)</td>
		<td>+</td>
		<td>+</td>
		<td>+</td>
	</tr>
	<tr>
		<td>C: Gasförmige Stoffe<br />(Methan, Propan, Wasserstoff, Stadtgas)</td>
		<td>+</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>D: Metalle<br />(Aluminium, Magnesium, Lithium, Natrium, Kalium)</td>
		<td>~</td>
		<td></td>
		<td></td>
	</tr>
</table>
<hr />

<h3>Gasanlagen</h3>
<p></p>
';
		
$content .= '</div>';

$template = new template($template_file);
$template->readtemplate();
$template->replace('TITLE', $title);
$template->replace('HEADER', $template_header);
$template->replace('MENU', $menu);
$template->replace('CONTENT', $content);
$template->replace('FOOTER', $footer);
$template->parse();

?>
