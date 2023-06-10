const authenticate = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).send({ error: 'Access Denied' });

    const token = authHeader.replace('Bearer ', '');
  
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).send({ error: 'Token is not valid' });
    }
};