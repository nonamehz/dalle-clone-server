import { request, response } from 'express';
import { OpenAI } from '../configuration/index.js';


const createImage = async (req = request, res = response) => {

    const { prompt } = req.body;

    try {

        const aiResponse = await OpenAI.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].b64_json;

        res.status(201).json({
            success: true,
            image,
        });

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            error
        });

    }
}


export {
    createImage,
}