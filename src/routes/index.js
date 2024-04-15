//TODO: Uncomment imports to include routes

import { getGamesRoute } from './getGames';
import { getGameRoute } from './getGameRoute';
import { postGameRoute } from './postGameRoute';
import { deleteGameRoute } from './deleteGameRoute';
import { putGameRoute } from './putGameRoute';
import { testRoute } from './testRoute';


export const routes = [
    testRoute,

    //TODO: Uncomment the routes below to use them

    getGamesRoute,
    getGameRoute,
    postGameRoute,
    deleteGameRoute,
    putGameRoute
];
