<?php

include('inc/common.inc.php');
include('inc/sidebar_allgemeines.inc.php');

$title =' | Schallsignale';   

$content .= '
<div class="text">
<h2>Schallsignale</h2>
<hr />'; 

	$content .= '
		<p>Damit Schiffsführer kommunizieren können, gibt es Schallsignale.
		Diese bestehen aus kurzen und langen Tönen. Die Pause dazwischen ist 1 Sekunde lang.<br />
		<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg> = 1 Sekunde<br />
		<svg height="10" width="32"><rect x="0" y="1" height="8" width="32px" /></svg> = 4 Sekunden<br />
		
		<table>
			<tr>
				<td>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
				</td>
				<td>Ich richte meinen Kurs nach Steuerbord</td>
			</tr>
			<tr>
				<td>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
				</td>
				<td>Ich richte meinen Kurs nach Backbord</td>
			</tr>
			<tr>
				<td>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
				</td>
				<td>Meine Maschine geht rückwärts</td>
			</tr>
			<tr>
				<td>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
				</td>
				<td>Ich bin manövrierunfähig</td>
			</tr>
			<tr>
				<td>
					<svg height="10" width="32"><rect x="0" y="1" height="8" width="32px" /></svg>
				</td>
				<td>Achtung ich behalte meinen Kurs bei, Hafenausfahrtssignal, Nebelsignal (ausgenommen Vorrangschiffe), Brückendurchfahrtssignal</td>
			</tr>
			<tr>
				<td>
					<svg height="10" width="32"><rect x="0" y="1" height="8" width="32px" /></svg>
					<svg height="10" width="32"><rect x="0" y="1" height="8" width="32px" /></svg>
				</td>
				<td>Nebelsignal der Vorrangschiffe</td>
			</tr>
			<tr>
				<td>
					<svg height="10" width="32"><rect x="0" y="1" height="8" width="32px" /></svg>
					<svg height="10" width="32"><rect x="0" y="1" height="8" width="32px" /></svg>
					<svg height="10" width="32"><rect x="0" y="1" height="8" width="32px" /></svg>
				</td>
				<td>Hafeneinfahrtssignal der Vorrangschiffe, Schleppverbände und Schiffe in Not</td>
			</tr>
			<tr>
				<td>
					Folge langer Töne
				</td>
				<td>Notsignal</td>
			</tr>	
			<tr>
				<td>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
					<svg height="10" width="10"><circle cx="5" cy="5" r="4"/></svg>
					<br />
					3x pro Minute<br />
					oder Glockengeläute
				</td>
				<td>Nebelsignal der Häfen, Landestellen und Nebelwarnanlagen</td>
			</tr>
		</table>
		</p>
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