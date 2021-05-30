import React from 'react';
import Navbar from '../components/navbar';
import {Route,BrowseRouter, Router,Switch} from 'react';

import { render } from '@testing-library/react';
export default function Header(){
 
    return(
        <>
        <Router>
            <Switch>
            
            <Route path="/navbar"><Navbar/></Route>
            </Switch>
        </Router>
        </>
         );
}
