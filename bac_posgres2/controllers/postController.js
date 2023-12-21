const db = require('../db');
class PostController {
    async createPost(req, res) {
        const { title, content, person_Id } = req.body;
        const newPost = await db.query(
            `INSERT INTO post (title, content, person_Id) values ($1, $2, $3) RETURNING *`,
            [title, content, person_Id],
        );
        res.json(newPost.rows[0]);
    }
    async getPostByUser(req, res) {}
}
module.exports = new PostController();