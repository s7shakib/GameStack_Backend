import { gameData } from "../gameData";

export const getGamesRoute = {
    path: '/api/game',
    method: 'get',
    handler: (req, res) => {
        //TODO: Uncomment get the Games from json file
        res.status(200).send(gameData);
    },
};