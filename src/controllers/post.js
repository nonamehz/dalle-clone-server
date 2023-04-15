import { request, response } from 'express';
import { Post } from '../models/index.js';
import { Cloudinary } from '../configuration/index.js';


const getAllPosts = async (_req = request, res = response) => {

    try {

        const posts = await Post.find();

        res.json({
            success: true,
            data: posts,
        });

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: error,
        });

    }

}

const insertPost = async (req = request, res = response) => {

    const { name, prompt, image } = req.body;

    try {

        const imageUrl = await Cloudinary.uploader.upload(image);

        const post = await Post.create({
            name,
            prompt,
            image: imageUrl.url,
        });

        res.status(201).json({
            success: true,
            data: post,
        });

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            status: false,
            message: error,
        });

    }

}


export {
    getAllPosts,
    insertPost,
}