import { gameData } from "../gameData";

export const getGameRoute = {
    path: '/api/game/:id',
    method: 'get',
    handler: (req, res) => {
        //TODO: Uncomment to get a game from the json file

        const id = req.params.id;
        const game = gameData.find((game) => game.id === parseInt(id));
        res.status(200).send(game);
    },
};