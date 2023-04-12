const UserModel = require("../models/User");
const bcrypt = require('bcrypt');
exports.getFormLogin = (req, res, next) => {
    res.render('lognin');
}

exports.postLogin = async (req, res, next) => {
    console.log(req.body);
    const body = req.body;
    const user = await UserModel.findOne({
        username: body.username
    });
    if (user) {
        console.log(user)
        //lay dc user roi thi kiem tra pass
        const validatePass = await bcrypt.compare(body.password, user.password);
        if (validatePass) {
            //login ok
            req.session.user = user
            res.redirect('/')
        } else {
            // res.status(400).json({error:'Sai mat khau'});
            res.render('lognin', { msg: 'Sai mật khẩu' });
        }
    } else {
        // res.status(401).json({error:'Khong ton tai user'});
        res.render('lognin', { msg: 'không tồn tại user' })
    }
}

//sign up
exports.getFormRegister = (req, res, next) => {
    res.render('lognout')
}
exports.postRegister = async (req, res, next) => {
    console.log(req.body);
    console.log(req.body.password);
    if (req.body.password != req.body.password2) {
        return res.render('lognout', { msg: 'Mật khẩu không khớp nhau' });
    }
    //cac xu ly validate viet tiep o day

    const salt = await bcrypt.genSalt(10);
    console.log(salt);

    let objUser = {
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, salt)
    }
    //ghi vao csdl
    await UserModel.create(objUser, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Save DB thanh cong")
        }
    })
    res.redirect('/');
}
//get user
exports.getUser = (req, res, next) => {
    res.render('users', { users: req.session.user });
}
//log out
exports.Logout = (req, res, next) => {
    req.session.destroy(function () {
        console.log("Dang xuat thanh cong");
    });
    res.redirect('/lognin');
}