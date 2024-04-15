//delete a game

// Compare this snippet from backend/src/routes/deletegameRoute.js:
import { gameData } from "../gameData";

export const deleteGameRoute = {
    path: '/api/game/:id',
    method: 'delete',
    handler: (req, res) => {
        //TODO: Uncomment to use DELETE to delete a game
            const id = req.params.id;
            const game = gameData.find((game) => game.id === parseInt(id));

            if (!game) {
                res.status(404).json({
                    message: 'game not found'

                });
            }

            const index = gameData.indexOf(game);
            console.log(index);
            console.log(game);
            gameData.splice(index, 1);
            res.status(200).json({
                message: 'game deleted successfully'
            });
    }
};

