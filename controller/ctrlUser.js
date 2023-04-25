const dbInstance = require('../models/index');

const user = dbInstance.user;

const addUser = async (req, res) => {

    let data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    }
    console.log("hello", data);
    await user.create(data).then((result) => {
        if (result) {
            console.log("result", result);
            res.status(200).json({ msg: "Successfully Added" });
        } else {
            res.status(200).json({ msg: "Something went wrong" });
        }
    }).catch((err) => {
        res.status(505).json({ msg: `Error: ${err}` })
    });

    // res.status(200).json({ msg: "SucessFully AddUser", data: resp1.toJSON() });
}




const getOne = async (req, res) => {

    let id = null;
    if (req.body.id) {
        id = req.body.id;
        console.log("id", id);
        const getUser = await user.findOne({ where: { 'id': id } })
        if (getUser !== null) {
            console.log("getUser>>", getUser);
            res.status(200).json({ data: getUser.toJSON() })
        }
        else {
            res.status(500).json({ "msg": "No finding user" });
        }
    }
}

const getAll = async (req, res) => {
    const allUser = await user.findAll();
    if (allUser) {
        res.status(200).json({ userData: allUser, msg: "success" });
    }
}

const update = async (req, res) => {
    let data = null;
    let id = null;

    if (req) {
        await user.update(req.body.data, { where: { 'id': req.body.id } })
            .then(function (updateRecord) {
                if (updateRecord == 1) {
                    res.status(200).json({ message: "Updated successfully" });
                }
                else {
                    res.status(404).json({ message: "something was wrong" });
                }
            }).catch(function (error) {
                res.status(404).json({ "Error": error });
            });
    }
}

const deleteUser = async (req, res) => {
    id = req.body.id
    await user.destroy({ where: { 'id': id } })
        .then(function (deletedRecord) {
            if (deletedRecord === 1) {
                res.status(200).json({ message: "Deleted successfully" });
            }
            else {
                res.status(404).json({ message: "record not found" });
            }
        }).catch(function (error) {
            res.status(500).json(error);
        })
}


module.exports = { addUser, getOne, getAll, update, deleteUser };