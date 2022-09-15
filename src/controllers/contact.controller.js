exports.create = (req, res) => {
    return res.send({message: 'create handler'});
};

exports.findAll = (req, res) => {
    return res.send({message: 'findAll handerler'});
};

exports.findOne = (req, res) => {
    return res.send({message: 'findOne handerler'});
};

exports.update = (req, res) => {
    return res.send({message: 'update handerler'});
};

exports.delete = (req, res) => {
    return res.send({message: 'delete handerler'});
};

exports.deleteAll = (req, res) => {
    return res.send({message: 'updateAll handerler'});
};

exports.findAllFavorite = (req, res) => {
    return res.send({message: 'findAllFavorite handerler'});
};