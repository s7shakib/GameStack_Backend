//delete a game

// Compare this snippet from backend/src/routes/deletegameRoute.js:
import { gameData } from "../gameData";

export const putGameRoute = {
    path: '/api/game/:id',
    method: 'put',
    handler: (req, res) => {

        //TODO: Uncomment to use PUT to update a game

            const id = req.params.id;
            const game = gameData.find((game) => game.id === parseInt(id));

            if (!game) {
                res.status(404).json({
                    message: 'game not found'

                });
            }

            const index = gameData.indexOf(game);

            const { title, description, estimatedTime, imageUrl } = req.body;
            const data = {
                id: parseInt(id),
                title: title,
                description: description,
                estimatedTime: estimatedTime,
                imageUrl:imageUrl,
            }
            gameData[index] = data;
            res.status(200).json({
                message: 'game updated successfully'
            });
    }
};

