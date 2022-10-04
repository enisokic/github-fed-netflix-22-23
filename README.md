# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Enis Okic

  #### Je startniveau:
  Blauw

  #### Je focus:
  Surface plane

</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.netflix.com/

  #### Screenshot(s) van de eerste pagina (small screen):
  Startscherm gebruiker
  <img src="readme-images/startscherm-gebruiker.jpg" width="375px" alt="Startscherm van de gebruiker">

  #### Screenshot(s) van de tweede pagina (small screen):
  Film/Serie detail pagina
  <img src="readme-images/movie-serie-detail.jpg" width="375px" alt="Film/Serie detail pagina">

</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
  Tijdens de toegankelijkheidstest met m'n buddy is ons direct opgevallen dat het logo een link is. Echter is er tijdens het voorlezen niet verteld waar deze link de gebruiker naar toe neemt. Wat goed is aan de website waren de sliders de sliders bestaan uit 10+ foto's hiervan zie je er in eerste instantie maar een paar. Deze noemt de screenreader ook niet gelijk op tenzij je echt op de button klikt naar de volgende slide. Dit is goed omdat de gebruiker hiermee tijd kan besparen en niet perse alles hoeft te luisteren. Op pagina 2 werdt de like button benoemt zodanig dat je totaal niet wist wat voor button het nou is.

  Ik zou deze dingen op lossen door bijv. het logo een alt te geven genaamd bijv. "netflix logo home". Op pagina 2 zou ik hier een aria-label aan toevoegen die het duidelijk maakt.

  #### Muis en Toetsenbord
  Zodra je met een smallscreen test (venster verkleine) is het niet mogelijk om de dropdown menu te openen met je toetsenbord. Elke keer wordt je doorgestuurd naar een andere pagina. Door witte border kleur is focus state bij sommige covers onduidelijk. Ook onduidelijk als ik me bevindt op de geluidsknop. Vanaf het kopje meer zoals dit kan ik alleen op aanlijst toevoegen klikken maar niet op de series/films zelf.

  Voor de focus zou ik kleur proberen te zoeken die voor zo hoog mogelijk contrast zorgt en ook zou ik de focus stijlen zodat het echt los staat van de website en dus lekker opvalt.


  #### Motoriek (shocks, elastiekjes)
  Doordat achtergrond van de knop van de slider een lage opacity heeft valt de icon meer op en lijkt alsof je alleen op de icon kan klikken hier hadden mijn buddy en ik heel veel moeite mee. Ook duurde het lang aangezien de icon klein is.

  Ik zou dit oplossen door de opacity hoger te zetten en de knop wat groter te maken niet al te groot (eventueel ook andere kleuren).


  #### Visueel (brillen, contrast, kleurenblind, dark/light).
  Over het algemeen zorgt netflix voor een hoog contrast, wat ik jammer vindt is dat netflix niks doet met dark/light mode. De website is vooral vriendelijke naar mensen die niet tegen fellen kleuren kunnen. Dus een donkere site nodig hebben voor de rust van hun ogen. Voor kleurenblind is tijdens de test alles wel goed bevallen.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina:
  <img src="readme-images/breakdown-schets-1.png" width="375px" alt="breakdown van de hele pagina">

  <img src="readme-images/breakdown-schets-2.png" width="375px" alt="breakdown van de hele pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Omschrijving

  De eerste week was ik er niet, deze heb ik gemist. Ook dacht ik dat het gesprek online was. Gelukkig wou Eva de studentassistent het gesprek online met mijn voeren. Ik had niks om te laten zien wel kon ik mooi plan maken met Eva met wat ik als eerste moet doen om bij te komen. Ook heeft zij mij het een en andere uitgelegd

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Omschrijving

  Tijdens het gesprek had ik alleen de breakdownschetsen om te laten zien, dus heb ik dit gesprek voornamelijk geluisterd naar de vragen van andere en antwoorden hierop. Wel heeft de studentassistent mijn breakdownschetsen door genomen om te kijken of ik het wel goed heb gedaan.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  Tijdens de toegankelijkheidstest heb ik iemand anders laten kijken naar mijn website. Dit heb ik bewust gedaan omdat diegene nog niet wist hoe mijn website in elkaar zit. Zo weet ik is mijn website echt toegankelijk voor iedereen. Tijdens de test met de screenreader is gebleken een aantal van mijn buttons niet duidelijk werden benoemd. Ook dat er op pagina 2 een hele lap tekst werd opgelezen wat ervaren kan worden als vervelend omdat het meer tijd in beslag neemt.

  De buttons kunnen opgelost worden dmv een aria-label. De lap tekst zou ik nog niet weten.

  #### Muis en Toetsenbord
  Met de muis en toetsenbord was mijn website toegankelijk. Ook heb ik voor elkaar gekregen dat je op mijn website wel de menu kan openen dmv toetsenbord. De focus is ook duidelijker maar er kan nog wat gedaan worden aan de kleur die valt niet genoeg op.


  #### Motoriek (shocks, elastiekjes)
  Door de kleine tekst was het moeilijk op de tekst te klikken, ook waren een aantal iconen nog te klein en moeilijk klikbaar.

  Dit is op te lossen door het wat groter te maken.

  #### Visueel (brillen, contrast, kleurenblind, dark/light).
  De contrast heb ik hoger gemaakt op sommige punten zoals bij genres dat viel gelijk. Ook beviel dark mode en nieuwe light mode wel. Alleen mag het contrast wel hoger bij de lightmode.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Omschrijving
  De eerste pagina had ik bijna af, alleen was ik nog onzeker of ik het wel goed doe. De button en links begreep ik eerst niet helemaal maar de docent heeft hierbij goed geholpen. Dus weet ik nu dat link's zijn voor als je naar andere pagina linkt.

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/pagina1.jpg" width="375px" alt="uitomst opdracht 1">
  <img src="readme-images/pagina2.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd:
  Korte omschrijving met plaatjes
  Code netjes schrijven en comments toevoegingen ging goed.

  <img src="readme-images/comments.png" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  De toegankelijkheid vond ik heel erg lastig hier zou ik me graag meer in willen verdiepen.

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. https://css-tricks.com/
  2. https://www.w3schools.com/
  3. https://developer.mozilla.org/
  4. codepen.io

</details>
