import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Card from './components/Card';
import Favorite from './components/Favorite';
import Home from './components/Home';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import Weekly from './components/Weekly';
import WeeklyBattle from './components/WeeklyBattle'
import NotFound from './components/NotFound'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weekly-battle" component={WeeklyBattle} />
          <Route path="/popular" component={Popular} />
          <Route path="/popular-battle" component={PopularBattle} />
          <Route path="/favorites" component={Favorite} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// ## 02 - App.js

// - Notre application possèdera 6 pages :
//     - `/` Home : la page d'accueil
//     - `/weekly` Weekly : les sorties de la semaine
//     - `/weekly-battle`WeeklyBattle : pour choisir entre deux films récents
//     - `/popular` Popular : les pépites du cinéma
//     - `/popular-battle` PopularBattle : pour choisir entre deux films cultes
//     - `/favorites` Favorites : les films qu'on a choisis
//     - `*` Error404 : s'affiche en cas d'erreur 404 - page non trouvée
// - Créez les composants pour chaque page (un simple h1 avec le nom du composant suffit pour l'instant)
// - Créez le routeur dans `App.js` qui bascule chaque route vers le composant correspondant
// - Créez une barre de navigation avec un lien vers chaque page

// Quand vous cliquez sur les liens de la navigation, le bon titre apparaît ?