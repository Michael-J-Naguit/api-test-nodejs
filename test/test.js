describe('Validating Blogs', () => {
    it('Should allow users to get all posts/blogs', () => {
        chai.request(server)
            .get('/posts')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.length.should.be.above(10);
            });
    });

    it('Should allow users to get blog/post by id', () => {
        chai.request(server)
            .get('/posts/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.id.should.be.eql(1);
            });
    });

    it('Should allow users to submit a blog/post', () => {
        let data = {
            userId: 1,
            title: 'My Amazing Blog Post',
            body: 'This is an amazing blog post that I have written'
        };

        chai.request(server)
            .post('/posts')
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                // should also verify if data is posted
            });
    });

    it('Should allow users to edit a blog/post', () => {
        let edited_title = 'My Amazing Edited Blog Post';
        let edited_body = 'This is an amazing edited blog post that I have written';

        let data = {
            userId: 1,
            title: edited_title,
            body: edited_body
        };

        chai.request(server)
            .put('/posts/1')
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.title.should.be.eql(edited_title);
                res.body.body.should.be.eql(edited_body);
            });
    });
});