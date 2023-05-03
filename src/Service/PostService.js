import Post from "../Entity/Post.js";

class PostService{
    async create(post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async update(post) {

        if ( !post._id ) 
            throw new Error('Not found ID');

        await Post.findByIdAndUpdate(post._id , post);

        return post;
    }
}

export default new PostService();