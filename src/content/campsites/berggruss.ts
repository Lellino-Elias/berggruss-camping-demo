import type { CampsiteConfig } from "../types";

/**
 * Camping Berggruss — Berg im Drautal, Kärnten.
 * Alle Texte/Fakten belegt aus berggruss.at (Stand-Scrape 2026-06): Startseite,
 * FAQ, Preisliste, Lageplan, Impressum, Platzordnung. Bilder = ausschließlich
 * eigene Berggruss-Fotos in /public/campsites/berggruss/.
 * EHRLICH: Der Platz liegt NICHT an einem See (Weißensee ~15 Autominuten) →
 * kein `see`, keine "am See"-Rahmung. Inhabergeführter Familien-Campingplatz
 * (kein Massencamping, 65 parzellierte Plätze), keine Mietunterkünfte → kein
 * `mobilheime`. Pool ist 10 × 5 m (laut FAQ) — bewusst nicht als "groß" geframt.
 * Keine eindeutig belegbare Auszeichnung → awards leer (Google-Bewertung wird
 * nur ehrlich im Trust-Text erwähnt). Preise = reale Preisliste 2026 (cent-genau).
 */
const IMG = "/campsites/berggruss";

export const berggruss: CampsiteConfig = {
  name: "Camping Berggruss",
  shortName: "Berggruss",
  slug: "berggruss",
  ort: "Berg im Drautal",
  region: "Kärnten",
  brandKind: "Familiencamping",
  // Kein See am Platz → `see` bewusst weggelassen.
  regionLong: "Oberes Drautal · Kärnten · Österreich",

  claim: "Camping zwischen den Bergen",
  claimEmphasis: "zwischen den Bergen",
  intro:
    "Ein familiengeführter Campingplatz in Berg im Drautal — eingebettet zwischen Kreuzeckgruppe und Gailtaler Alpen, mit mildem Südklima, 65 großzügigen Plätzen und frischem Bergquellwasser.",

  // Logo der Quelle ist weiß-auf-transparent → auf der hellen Footer-Kachel
  // unsichtbar. Daher kein `logo` → Wortmarke statt Bild.

  statement: {
    text: "Seit den 1970er-Jahren in dritter Generation geführt — kein Massencamping, sondern überschaubar und persönlich.",
    emphasis: "überschaubar und persönlich",
  },

  pillars: [
    {
      title: "Eingebettet im Drautal",
      text: "Südlich des Alpenhauptkammes, zwischen Kreuzeckgruppe und Gailtaler Alpen — am Talboden des oberen Drautals.",
      image: { src: `${IMG}/luftbild-drautal.webp`, alt: "Luftaufnahme von Camping Berggruss im oberen Drautal mit Drau und Bahnlinie" },
    },
    {
      title: "Sonniges Südklima",
      text: "Milde Mittelmeerluft strömt aus dem Süden ein, die Hohen Tauern halten das Wetter aus dem Norden ab — oft sonnig bis in Frühling und Herbst.",
      image: { src: `${IMG}/sonniger-tag.webp`, alt: "Sonniger Tag am Camping Berggruss mit blauem Himmel und Bergen" },
    },
    {
      title: "Überschaubar & familiär",
      text: "Bewusst klein mit nur 65 Plätzen, dreiseitig von Wald umgeben — ruhig, sicher und persönlich geführt.",
      image: { src: `${IMG}/luftbild-platz-wald.webp`, alt: "Luftaufnahme des überschaubaren, von Wald umgebenen Campingplatzes Berggruss" },
    },
  ],

  usps: [
    "Stellplatz inkl. 2 Personen",
    "Gratis Glasfaser-WLAN",
    "Gratis Bus & Bahn mit Gästekarte",
    "Pool am Platz",
    "Hunde willkommen",
    "Drauradweg R1 in ~1 km",
    "Bahnhof nur ~300 m",
    "Frisches Bergquellwasser",
  ],

  trust: {
    heading: "Worauf bei Camping Berggruss Verlass ist",
    headingEmphasis: "Verlass",
    intro:
      "Gegründet in den 1970er-Jahren und in dritter Generation von Familie Tiefnig geführt — von über 150 Google-Bewertungen mit „Ausgezeichnet“ bedacht. Moderne Sanitäranlagen, große parzellierte Plätze und eine ruhige Lage im oberen Drautal.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-berge-wohnwagen.webp`, alt: "Camping Berggruss zwischen den Bergen mit Wohnwagen und Zelten" },
  },

  camping: {
    heading: "Camping zwischen Wald und Bergen",
    intro:
      "65 großzügige, parzellierte Stellplätze ab über 80 m², dreiseitig von Wald umgeben und mit schattenspendenden Bäumen zwischen den Reihen — eben, sonnig und ruhig.",
    features: [
      { title: "Große Plätze mit Bergblick", text: "Über 80 m² je Parzelle, eben und sonnig, mit Blick auf die umliegenden Berge — Platz für Auto, Caravan, Wohnmobil und Zelt.", image: { src: `${IMG}/stellplaetze-bergblick.webp`, alt: "Stellplätze am Camping Berggruss mit Bergpanorama an einem sonnigen Tag" } },
      { title: "Wohnwagen & Wohnmobile", text: "Ebenes Gelände und breite Einfahrt — auch für große Wohnmobile gut geeignet.", image: { src: `${IMG}/wohnmobile-stellplatz.webp`, alt: "Wohnwagen und Wohnmobile auf den Wiesenplätzen am Camping Berggruss" } },
      { title: "Moderne Sanitäranlagen", text: "Helle, gepflegte Waschräume; Duschen per Münze (€ 1,00 für 6 Minuten).", image: { src: `${IMG}/sanitaer-waschraum.webp`, alt: "Heller, moderner Waschraum mit Waschbecken am Camping Berggruss" } },
      { title: "Familienfreundlich", text: "Eigene Kinderwaschbecken und kindgerechte Sanitärbereiche für entspanntes Familiencamping.", image: { src: `${IMG}/sanitaer-kinder.webp`, alt: "Sanitärraum mit Kinderwaschbecken am Camping Berggruss" } },
      { title: "Ver- & Entsorgung", text: "Entsorgungsstation für Wohnmobile mit Frischwasserbezug; Strom am Platz (€ 3,00/Tag).", image: { src: `${IMG}/entsorgungsstation.webp`, alt: "Entsorgungsstation für Wohnmobile am Camping Berggruss" } },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro:
      "Spielplatz mit Schaukel, Karussell und Kletterturm, ein Beachvolleyball-Platz, Tischtennis und ein Pool zum Abkühlen — kindersicher und überschaubar. Tipp: Eintrittskarten fürs örtliche Freibad mit Wasserrutsche gibt es an der Rezeption.",
    features: [
      { title: "Spielplatz", text: "Schaukel, Karussell und Kletterturm mitten im Grünen — der Spielplatz lädt zum Toben ein.", image: { src: `${IMG}/spielplatz.webp`, alt: "Kinderspielplatz mit Kletterturm und Schaukeln am Camping Berggruss" } },
      { title: "Pool & Freibad", text: "Ein 10 × 5 m großer Pool am Platz; das örtliche Freibad mit Wasserrutsche liegt nur rund 500 m entfernt (Eintrittskarten an der Rezeption).", image: { src: `${IMG}/pool-02.webp`, alt: "Pool am Camping Berggruss mit Blick auf die Berge" } },
      { title: "Spiel & Sport", text: "Beachvolleyball, Tischtennis und Federball auf der Wiese — Bewegung und Spaß für Groß und Klein.", image: { src: `${IMG}/federball.webp`, alt: "Federballspiel auf der Wiese am Camping Berggruss" } },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv in Berg im Drautal",
    intro:
      "Ein idealer Ausgangspunkt: Radfahren am Drauradweg, Wandern und Bergtouren direkt vom Platz, Baden im Pool und im nahen Freibad — dazu Golf und Tennis fußläufig sowie Paragleiten an der Emberger Alm.",
    items: [
      { title: "Drauradweg R1", text: "Der beliebte Drauradweg verläuft rund 1 km vom Platz — familien- und genusstauglich; das Rad reist bequem per Bahn mit.", image: { src: `${IMG}/einfahrt-drauradweg.webp`, alt: "Einfahrt zum Camping Berggruss mit Infotafel und Anbindung an den Radweg" } },
      { title: "Wandern & Bergtouren", text: "Direkt vom Platz auf gemütliche Talwanderungen oder anspruchsvollere Bergtouren in den Gailtaler Alpen und der Kreuzeckgruppe.", image: { src: `${IMG}/sonnenaufgang-berge.webp`, alt: "Sonnenaufgang über den Bergen und dem Drautal bei Berg im Drautal" } },
      { title: "Baden & Erfrischung", text: "Pool am Platz, das örtliche Freibad mit Wasserrutsche in rund 500 m und der Weißensee mit klarem Bergwasser in etwa 15 Autominuten.", image: { src: `${IMG}/pool-bergblick.webp`, alt: "Pool am Camping Berggruss mit Bergkulisse" } },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Im oberen Drautal gelegen — Berg 49, 9771 Berg im Drautal. Ebenes Gelände und breite Einfahrt, auch für große Wohnmobile gut geeignet." },
      { title: "Mit Bahn & Bus", text: "Der Bahnhof liegt nur rund 300 m entfernt — Camping ganz ohne Auto ist möglich. Bus und Bahn in Kärnten nutzt du als Gast mit der digitalen Gästekarte kostenlos." },
      { title: "Mit dem Rad", text: "Über Nebenstraßen bist du in etwa 1 km am Drauradweg R1; dein Fahrrad reist bequem mit der Bahn an." },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Sonnige Wiesen, Berge ringsum, Pool und gepflegte Anlagen — ein paar Eindrücke von Camping Berggruss.",
    tag: "Mai bis September",
    images: [
      { src: `${IMG}/sonniger-tag-03.webp`, alt: "Sonniger Tag am Camping Berggruss mit Bergkulisse" },
      { src: `${IMG}/beachvolleyball.webp`, alt: "Beachvolleyball-Platz am Camping Berggruss" },
      { src: `${IMG}/lageplan.webp`, alt: "Lageplan von Camping Berggruss mit den parzellierten Stellplätzen" },
      { src: `${IMG}/waschhaus.webp`, alt: "Modernes Sanitärgebäude am Camping Berggruss" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum und Personen — Familie Tiefnig meldet sich mit deiner persönlichen Verfügbarkeit. Eine Reservierung ist nicht zwingend, in der Hauptsaison aber empfohlen.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz inkl. 2 Personen (Auto/Caravan/Wohnmobil/Zelt) · weitere Person = Erwachsenentarif, Kinder 2–17 J. günstiger, unter 2 J. frei · zzgl. Orts-/Nächtigungstaxe € 2,70 pro Erw./Nacht · Strom € 3,00/Tag · Hund € 5,00/Tag · Radfahrer-Tarif Nebensaison, Hauptsaison € 23,60 · Stand 2026.",
    highlight: {
      title: "Direkt & ohne Gebühren",
      text: "Bei Direktbuchung: persönliche Beratung, flexible Aufenthaltsdauer und keine Buchungsgebühren. Zahlung bar oder mit Karte (EC, Mastercard, VISA).",
    },
    categories: [
      // Reale Preisliste Berggruss 2026 (Stellplatz = Basis 2 Pers.; Aufpreis = zusätzl. Erwachsener ab 17 J.).
      { id: "neben", label: "Stellplatz · Nebensaison", perNight: 24.6, perExtraGuest: 9.3 },
      { id: "haupt", label: "Stellplatz · Hauptsaison", perNight: 32.6, perExtraGuest: 12.3 },
      { id: "rad", label: "Radfahrer · Zelt (2 P.)", perNight: 20.6 },
    ],
  },

  kontakt: {
    tel: "+43 650 888 11 59",
    telHref: "tel:+436508881159",
    mail: "camping.berggruss@aon.at",
    adresse: "Berg 49 · 9771 Berg im Drautal · Kärnten",
    // Koordinaten aus dem Google-Maps-Link der Quelle (Platzmarker !3d…!4d…).
    coords: { lat: 46.740584, lng: 13.13174 },
  },

  languages: ["DE", "EN", "NL", "CS"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
        { label: "Wohnmobile", href: "#camping" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Spielplatz", href: "#kinder" },
        { label: "Pool & Freibad", href: "#kinder" },
        { label: "Spiel & Sport", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Drauradweg R1", href: "#aktivitaeten" },
        { label: "Wandern & Bergtouren", href: "#aktivitaeten" },
        { label: "Baden & Erfrischung", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Lage & Anreise",
      href: "#anreise",
      children: [
        { label: "Anreise", href: "#anreise" },
        { label: "Galerie", href: "#galerie" },
      ],
    },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anfrage", href: "#booking" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default berggruss;
