<?php

include('inc/common.inc.php');
include('inc/sidebar_motorboot.inc.php');

$title =' | Propeller';   

$content .= '
<div class="text">
<h2>Der Propeller</h2>
<p>Es gibt zunächst 4 Größen die einen Propeller beschreiben.</p>
<hr />'; 

$content .= 
'<h3>Die Anzahl der Flügel</h3>
<p>Es gibt Propeller mit einer verschiedenen Anzahl von Flügeln. Dabei ist zu beachten,
dass eine geringere Flügelanzahl zwar effizienter ist, jedoch die Vibrationen zunehmen.
Die meisten Bootspropeller sind Dreiflügler, da sie somit einen guter Kompromiss zwischen Wirkungsgrad,
Vibrationen und Herstellungskosten gewährleisten.</p>

<hr />
<h3>Der Durchmesser</h3>
<p>Propeller sind meist mit zwei Angaben beschriftet. Z.B. 270 x 235 (mm).
Der erste Wert gibt dabei den Durchmesser an und der zweite die Steigung.</p>

<hr />
<h3>Die Steigung</h3>
<p>Diese Größe beschreibt die Strecke, die ein Propeller bei einer ganzen Umdrehung horizontal zurücklegt.
So kann ein Motor, wenn die Steigung zu groß ist, bei Vollgas nicht auf die volle Drehzahl kommen.
Ist die Steigung hingegen zu gering, dann wird der Motor zu hoch drehen. Beides bewirkt Leistungseinbußen,
einen schnelleren Verschleiß des Motors, einen höheren Verbrauch und kann auch Getriebeschäden verursachen.</p>

<hr />
<h3>Die Drehrichtung</h3>
<p>Ein sich von hinten rechtsherum (im Uhrzeigersinn) drehender Propeller ist rechtsgängig. Ein sich linksherum
drehender linksgängig.<br />
Dies darf nicht mit rechs- und linksdrehend verwechselt werden, da sich z.B. beim Rückwärtsfahren
ein rechtsgängier Propeller linksherum dreht und somit linksdrehend ist.<br />
Motorboote haben fast ausschließlich rechtsgängige Propeller. Dies ist auch beim Steuern des Motorbootes zu beachten,
da durch die Drehrichtung des Propellers das Fahrverhalten des Bootes verändert wird.<p>
<p>Dies äußert sich im sogenannten <em>Radeffekt</em>.<br />
Dieser bewirkt, dass der Propeller nicht nur einen Schub längs des Bootes erzeugt, sondern das Boot auch zur Seite
zieht. So als würde der Propeller wie ein Rad auf dem Boden fahren.
Dementsprechend zieht ein rechtsgängiger Propeller das Heck eines Schiffes beim Vorwärtsfahren nach rechts und
beim Rückwärtsfahren nach links. Dieser Effekt ist vor allem beim Rückwärtsfahren in erhöhtem Maße spürbar und muss 
bei den Steuermanövern beachtet werden.
Bei Yachten mit zwei gegenläufigen Propellern hebt sich der Effekt natürlich vollständig auf.
</p>

<p></p>
<hr />
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