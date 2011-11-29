<?php

include('inc/common.inc.php');
include('inc/sidebar_allgemeines.inc.php');

$title =' | Allgemeines'; 
   
$content .=	
'<div class="text" id="general">';
	
		$content .=
		'<img src="img/schein_außen_small.png" alt="Bodenseeschifferpatent Umschlag" height="250px" />
		<img src="img/schein_innen_small.png" alt="Bodenseeschifferpatent Schein" height="250px" />
		<br />
		<br />
		
		<h3>Wer benötigt das Schifferpatent?</h3>
		
		<p>Jeder der mit einem Boot mit mehr als 12m<sup>2</sup> Segelfläche oder 4,4 kW Motorleistung
		auf dem Bodensee fahren möchte.</p>
		
		<table>
			<tr>
				<td>Kategorie A</td>
				<td>Patent für Motorboote über 4,4 kW. Mindestalter 18 Jahre. Ab einem Alter von 21 Jahren darf man
				auch Fahrgastschiffe führen, die für maximal 12 Fahrgäste zugelassen sind.</td>
			</tr>
			<tr>
				<td>Kategorie B</td>
				<td>Patent für Fahrgastschiffe die für mehr als 12 Fahrgäste zugelassen sind.</td>
			</tr>
			<tr>
				<td>Kategorie C</td>
				<td>Patent für Güterschiffe.</td>
			</tr>
			<tr>
				<td>Kategorie D</td>
				<td>Patent für Segelboote mit mehr als 12m<sup>2</sup> Segelfläche. Mindestalter 14 Jahre.
				Für Segelboote mit mehr als 4,4 kW Motorleistung werden das Patent der Kategorie D und der
				Kategorie A benötigt.</td>
			</tr>
		</table>
		
		<hr />
		
		<h3>Wie bekommt man das Schifferpatent?</h3>
		<p>Man muss sowohl eine theoretische, als auch eine praktische Prüfung 
		bei dem Prüfungsauschusses des zuständigen Landratsamtes ablegen.
		Die Zulassung zur Prüfung wird mit <a href="img/antrag.pdf">diesem Formular</a> beim Landratsamt beantragt.
		Dem Antrag muss folgendes beigefügt werden:
		<ul>
			<li>Ein Lichtbild (38mm x 45mm)</li>
			<li><a href="">Dieses amtsärztliche oder ärztliche Zeugnis</a> (Seh-, Hör-, Farbuntescheidungsvermögen)</li>
			<li>Ein Führungszeugnis (nur auf Verlangen)</li>
		</ul></p>
		<hr />
		
		<h3>Unter welchen Umständen darf das Patent wieder entzogen werden?</h3>
		<ul>
			<li>Wenn der Schiffsführer seine Pflichten als Schiffsführer "erheblich verletzt" hat.</li>
			<li>Wenn er ein Boot stark alkoholisiert oder unter Einwirkung anderer Rauschmittel geführt hat.</li>
		<ul>
		<hr />
		
		<h3>Was muss man bei einem Umzug beachten?</h3>
		<p>Bei einem Umzug in einen anderen Bodenseestaat als den, der das Schifferpatent ausgestellt hat,
		muss es aktualisiert werden, da ansonsten die Gültigkeit verfällt.</p>
		<hr />
		
		<h3>Beinhaltet das Bodenseeschifferpatent den Sportbootführerschein Binnen?</h3>
		<p>Ja, das Bodenseeschifferpatent kann ohne zusätzliche Prüfung mit <a href="">diesem Formular</a>
		in den Sportbootführerschein
		Binnen umgeschrieben werden. Zuständig hierfür ist der Deutsche Seglerverband (DSV)
		bzw. der Deutsche Motoryacht Verband (DMYV).<br />
		Außerdem befreit die Zusatzprüfung "Navigation" in der Kategorie A (Motor) von der 
		praktischen Prüfung für den amtlichen Sportbootführerschein See.</p>
		<hr />
		
		<h3>Ist ein Boot Zulassungs- und Registrierungspflichtig?</h3>
		<p>Motorboote und Segelboote, die mit einer Wohn-, Koch- oder sanitären Einrichtung ausgestattet sind
		benötigen eine amtliche Zulassung. Boote die nicht zulassungspflichtig sind aber länger als 2.50 m 
		(ausgeschlossen Surfbretter, Paddel- und Rennruderboote) müssen
		registriert werden und erhalten einen Bootsausweis. Sie muss beim zuständigen Landratsamt mit 
		<a href="">diesem Formular</a> beantragt werden. Dabei wird das Boot auf technische Mängel überprüft.
		Die Zulassung kann an bestimmte Auflagen gebunden sein und erlischt nach 3 Jahren, so dass eine
		Nachuntersuchung beantragt werden muss.<br />
		<br />
		Nicht zugelassen sind:
		<ul>
			<li>Motoren, die die vorgegebenen Grenzwerte (Kohlenmonoxid-, Kohlenwasserstoff- 
			und Stickstoffoxidemissionen) der BSO-Stufen 1 oder 2 oder der EU Sportbootrichtlinien überschreiten.</li>
			<li>Motoren, die lauter als maximal 72 dB(A) in 25 m seitlichem Abstand sind.</li>
		</ul>
		<br />
		<p>In folgenden Fällen muss das Landratsamt benachrichtigt werden:</p>
		<ul>
			<li>Bei einem Eigentümerwechsel innerhalb von 2 Wochen</li>
			<li>Bei einem Standortwechsel des Bootes oder des Eigentümers innerhalb von 2 Monaten.</li>
			<li>Wenn das Boot in Zukunft nicht mehr auf dem Bodensee genutzt werden soll,
			ist die Zulassungsurkunde zurückzugeben.</li>
		</ul>
		</p>
		<hr />
		
		<h3>Muss man sein Boot kennzeichnen?</h3>
		<p>Jedes zulassungs- und regisrierungspflichtige Boot erhält vom Landratsamt ein Kennzeichen.
		Alle anderes Wasserfahrzeuge sind mit Namen und Adresse des Besitzers zu versehen.
		Das Kennzeichen muss gut sichtbar und mindestens 8cm hoch sein.</p>
		<hr />';
	
$content .=
'</div>';

$template = new template($template_file);//Template parsen
$template->readtemplate();
$template->replace('TITLE', $title);
$template->replace('HEADER', $template_header);
$template->replace('MENU', $menu);
$template->replace('CONTENT', $content);
$template->replace('FOOTER', $footer);
$template->parse();

?>