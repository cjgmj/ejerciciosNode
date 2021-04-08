exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: Date.now(),
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/book.png',
        creator: {
          name: 'admin',
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: 'Post created successfully!',
    post: {
      _id: Date.now(),
      title,
      content,
      imageUrl: 'images/book.png',
      creator: {
        name: 'admin',
      },
      createdAt: new Date(),
    },
  });
};