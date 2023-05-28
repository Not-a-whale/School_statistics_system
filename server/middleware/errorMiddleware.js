const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(400);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // if status code is 200, set to 500, otherwise use the status code
    let message = err.message;

    if (err.name === 'CartError' && err.kind === 'ObjectId') {
        res.status(404);
        message = 'Resource not found';
    }
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack, // if in production, don't show stack trace
    });
}

export { notFound, errorHandler }


