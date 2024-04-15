import { gameData } from "../gameData";

export const postGameRoute = {
    path: '/api/game',
    method: 'post',
    handler: (req, res) => {

        //TODO: Uncomment to add a game to the json file

        const { title, description, estimatedTime, imageUrl } = req.body;
        const id = Math.floor(process.uptime());
        const data = {
            id: id,
            title: title,
            description: description,
            estimatedTime: estimatedTime,
            imageUrl:imageUrl,
            
        }
        gameData.push(data);
        res.status(201).json({
            message: 'game created successfully',
            game: data,
        });

    },
};