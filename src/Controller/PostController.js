import PostService from "../Service/PostService.js";

class PostController {
   async create(req, res) {
        try {
            const { author, title, content} =  req.body;
            const post = await PostService.create({ author, title, content})
            console.log(post);
            return res.status(200).json(post);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            return res.status(200).json(posts);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const newPost = req.body;
            const post = await PostService.update(newPost);
            return res.status(200).json(post);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }
}

export default new PostController();