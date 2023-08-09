import { Routes as RoutesRouterDom, Route, BrowserRouter, useParams } from "react-router-dom";
import React from 'react'

//Vistas
import HomeView from '../views/Home/HomeView'
import RegisterView from '../views/Register/RegisterView'
import LoginView from '../views/Login/LoginView';
import FixtureView from '../views/Fixture/FixtureView';
import RankingView from '../views/Ranking/RankingView';
import ProfileView from '../views/Profile/ProfileView';
import FeedView from "../views/Feed/FeedView";
import NavbarHeader from "../components/organisms/NavbarHeader/NavbarHeader";
import Footer from "../components/organisms/Footer/Footer";
import LeaguesView from "../views/Leagues/LeaguesView";
import Prode from "../views/Prode/Prode";

const Routes = () => {
  return (
    <BrowserRouter>
    <NavbarHeader/>
    <RoutesRouterDom>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/register' element={<RegisterView/>}/>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/prode/league/:idLeague/:idMatch' element={<Prode/>} />
        <Route path='/prode' element={<Prode/>}/>
        <Route path='/fixture' element={<FixtureView/>}/>
        <Route path='/ranking/leagues' element={<RankingView/>}/>
        <Route path='/profile/:idUser' element={<ProfileView/>}/>
        <Route path='/feed' element={<FeedView/>}/>
        <Route path='/leagues/:idLeague/ranking' element={<LeaguesView/>}/>
        <Route path='/leagues/:idLeague/scorers' element={<LeaguesView/>}/>
        <Route path='/leagues/:idLeague/fixture' element={<LeaguesView/>}/>
    </RoutesRouterDom>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routes