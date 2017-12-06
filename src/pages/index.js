import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div>
    <h1>Dramatis Persona</h1>
    <h2>Willkommen in anderen Welten</h2>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
    <p>
      <Link to="/page-2/">Page 2</Link>
    </p>
    <p>
      <Link to="/der-fels/">Der Fels</Link>
    </p>
    <p>
      <Link to="/die-goettin/">Die Göttin</Link>
    </p>
  </div>
);
