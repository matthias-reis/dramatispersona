import React, { Component } from 'react';
import styled from 'styled-components';

import { FullSection } from '../../components';
import { SPACE_S, COL_TEXT_STRONGBRIGHT } from '../../config/style';

const factors = [
  {
    img: null,
    hd: 'Sternentstehungsrate',
    text: `Die mittlere Sternentstehungsrate pro Jahr in einer durchschnittlichen
    Galaxie wie unserer. Die Zahl laest sich ganz gut einschaetzen. Sie liegt
    Beobachtungen zufolge bei etwa 8 wenn man halbwegs vorsichtige Scaetzungen
    annimmt.`
  },
  {
    img: null,
    hd: 'Planetenfaktor',
    text: `Die Wahrscheinlichkeit, dass ein Stern Planeten
    aufweist. Wir koennen die Planetendichte in den naeheren Sternsystemen
    inzwischen etwas besser einschaetzen. in den letzten Jahren haben viele
    Entdeckungen dazu gefuehrt, dass diese Wahrscheinlichkeit deutlich nach oben
    korrigiert werden konnte. Allerdings haben gewisse Sternkonstellationen,
    vorrangig Mehr-Koerper-Systeme instabilere Planetenkonstellationen. Ausserdem
    geht man davon aus, dass sich die Wahrscheinlichkeit Richtung Galaxiezentrum
    deutlich verringert, da sich die Sternensysteme naeher stehen und dadurch mehr
    beeinflussen.`
  },
  {
    img: null,
    hd: 'Habitable Planeten',
    text: `Die durchschnittliche Anzahl an Planeten in einem
    Planetaren System, die sich innerhalb der habitablen Zone befindet. Im
    Sonnensystem sind das drei - Venus, Erde und Mars. Viele Wissenschaftler halten
    allerdings die Entstehung von Leben auf mindestens 2 weiter aussen liegenden
    Monden ebenfalls fuer moeglich. Pessimistisch koennte man daher von der Zahl 2
    ausgehen.`
  },
  {
    img: null,
    hd: 'Lebensfaktor',
    text: `Die Wahrscheinlichkeit, dass ein Planet in der
    Habitablen Zone auch Leben hervorbringt. Unsere Technik erlaubt es bislang
    nicht, Lebenszeichen wie Sauerstoff oder Methan ausserhalb des Sonnensystems
    messen zu koennen, aber die Technik liefert staendig praezisere Ergebnisse.
    Bislang konnten wir Leben also nur hier auf der Erde nachweisen, dessen
    Vorstufen wie komplexere organische Verbindungen allerdings auch anderswo,
    beispielsweise in Kometen. Darueber hinaus gibt es Experimente, die Bedingungen
    der Erdfruehzeit simulierend solche langkettigen organischen Molekuele entstehen
    liessen. Die Wahrscheinlichkeit ist daher nicht vollkommen gering, dennoch ist
    eine Schaetzung nach heutiger Erkenntniss hochspekulativ. Ich wuerde mit der
    Schaetzung auf 1 / 100 tippen.`
  },
  {
    img: null,
    hd: 'Intelligenzfaktor',
    text: `Die Wahrscheilichkeit, dass ein belebter Planet
    auch intelligentes Leben entwickelt. Wir wissen, dass diese Zahl groesser als 0
    ist. Dennoch scheiden sich die Geister bereits bei der Ausgangsfrage, wie
    Intelligenz ueberhaupt definiert ist. Diese Zahl weden wir noch naeher
    beleuchten und bezeichnen sie zunaechst als X`
  },
  {
    img: null,
    hd: 'Kommunikationsfaktor',
    text: `Die Wahrscheinlichkeit, dass eine intelligente
    Zivilisation auch kontaktfreudig genug ist, um aufgespuert werden zu koennen.
    Diese sollte relativ hoch sein. Dennoch bewegen wir uns hier ausschliesslich im
    philosophisch-spekulativen Bereich, der keinerelei wissenschaftliche Grundlage
    mehr hat. Die Schatzung pendelt sich fuer mich auf optimistische 50% ein.`
  },
  {
    img: null,
    hd: 'Lebensdauer einer Zivilisation',
    text: `Die Erde befindet sich
    erst seit ca. 100.000 Jahren auf diesem evolutionaeren Level und ihre Bewohner
    koennen seit ca. 3000 Jahren als Zivilisation bezeichnet werden. Die Menschheit
    stand bereits vor 50 Jahren der Ausloeschung durch einen Atomkrieg nahe und hat
    in 50 Jahren mit der Erderwaermung als naechste Katastrophe von globalem Ausmass
    zu kaempfen. Sollten wir das ueberstehen und uns auf andere Planeten verteilen
    koennen, waere ein wichtiges Nadeloehr durchschritten und unsere Zivilisation
    moeglicherweise langfristig lebensfaehig. Nehmen wir 10.000 Jahre an.`
  },
  {
    img: null,
    hd: 'Ergebnis',
    text: `Das Ergebnis ist klar. "N" ist die wahrscheinliche Anzahl intelligenter
    Zivilisationen in unserer Galaxie. Bekannt ist lediglich, dass die Zahl groesser
    gleich eins ist (denn immerhin gibt es offensichtlich uns). Darueberhinaus
    haengt das Resultat von den nebenstehenden 7 weitgehend unbekannten Faktoren ab.`
  }
];

const Factor = styled.div`
  padding: ${SPACE_S};
  text-align: center;
  position: relative;
  &::before {
    content: 'x';
    font-weight: normal;
    position: absolute;
    left: 0;
    top: 8px;
  }
  &:first-child::before {
    content: '';
  }
  &:last-child::before {
    content: '';
  }
`;

const Var = styled.div`
  height: 40px;
  color: ${COL_TEXT_STRONGBRIGHT};
  font-size: 2rem;
  font-weight: bold;
`;

const SelectedFactorBaseStyle = styled.div`
  background: white;
  color: green;
  grid-column: span 8;
`;

const SelectedFactorStyle = styled.div`
  background: white;
  color: red;
  grid-column: span 8;
`;

const SelectedFactor = ({ id }) =>
  id === 0 ? (
    <SelectedFactorBaseStyle>
      Ihr könnt mit der Masus über die einzelnen Faktoren fahren, um mehr
      darüber herauszubekommen
    </SelectedFactorBaseStyle>
  ) : (
    <SelectedFactorStyle>
      <h3>{factors[id - 1].hd}</h3>
      <p>{factors[id - 1].text}</p>
    </SelectedFactorStyle>
  );

// **N** = **R\*** x **fp** x **ne** x **fl** x **fi** x **fc** x **L**
export default class extends Component {
  state = {
    equation: [8, 0.2, 2, 0.01, 1 / 160, 0.5, 10.0],
    hovered: 0
  };

  handleHover = id => {
    this.setState({ hovered: id });
  };
  render() {
    return (
      <FullSection id="title" grid={8}>
        <Factor onMouseEnter={e => this.handleHover(1)}>
          <Var>
            R<sub>*</sub>
          </Var>
          <p>Stern&shy;ent&shy;ste&shy;hungs&shy;ra&shy;te</p>
        </Factor>
        <Factor onMouseEnter={e => this.handleHover(2)}>
          <Var>
            f<sub>p</sub>
          </Var>
          <p>Pla&shy;ne&shy;ten&shy;fak&shy;tor</p>
        </Factor>
        <Factor onMouseEnter={e => this.handleHover(3)}>
          <Var>
            n<sub>e</sub>
          </Var>
          <p>Ha&shy;bi&shy;ta&shy;ble Pla&shy;ne&shy;ten</p>
        </Factor>
        <Factor onMouseEnter={e => this.handleHover(4)}>
          <Var>
            f<sub>l</sub>
          </Var>
          <p>Le&shy;bens&shy;fak&shy;tor</p>
        </Factor>
        <Factor onMouseEnter={e => this.handleHover(5)}>
          <Var>
            f<sub>i</sub>
          </Var>
          <p>In&shy;tel&shy;li&shy;genz&shy;fak&shy;tor</p>
        </Factor>
        <Factor onMouseEnter={e => this.handleHover(6)}>
          <Var>
            f<sub>c</sub>
          </Var>
          <p>Kom&shy;mu&shy;ni&shy;ka&shy;tions&shy;fak&shy;tor</p>
        </Factor>
        <Factor onMouseEnter={e => this.handleHover(7)}>
          <Var>L</Var>
          <p>
            Le&shy;bens&shy;dau&shy;er ei&shy;ner
            Zi&shy;vi&shy;li&shy;sa&shy;tion
          </p>
        </Factor>
        <Factor onMouseEnter={e => this.handleHover(8)}>
          <Var>= N</Var>
          <p>
            <strong>
              Anzahl kontaktierbarer Zivilisationen in der Milchstraße
            </strong>
          </p>
        </Factor>
        <SelectedFactor id={this.state.hovered} />
      </FullSection>
    );
  }
}
