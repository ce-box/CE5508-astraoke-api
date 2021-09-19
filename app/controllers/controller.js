const mongoose = require('mongoose');
const Song = require('../db/song');
const User = require('../db/user');

//GET USERS
const findAllUsers = (req,res)=>{
    User.find((err,users)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json(users);
    });
};

//GET USERS {id}
const findUser = (req,res)=>{
    User.findById(req.params.id, (err,user)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json(user);
    });
};

//POST USER
const addUser = (req,res)=>{
    let user = new User({
        name: req.body.name,
        username: req.body.username,
        pass: req.body.pass,
        email: req.body.email,
        premium: req.body.premium
    });

    user.save ((err,usr)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json(usr);
    });
};

//PUT USER
const modiUser = (req,res)=>{

    User.findByIdAndUpdate(req.params.id, req.body, (err,user)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json({user, message:'Successfully updated'});
    });

};

//DELETE USER
const deleteUser = (req,res)=>{
    User.deleteOne({_id: req.params.id}, (err,user)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json({message:'Successfully deleted'});
    });

};



//GET SONGS
const findAllSongs = (req,res)=>{
    Song.find((err,songs)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json(songs);
    });
};



//GET SONG {id}
const findSong = (req,res)=>{
    Song.findById(req.params.id, (err,song)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json(song);
    });
};

//POST SONG
const addSong = (req,res)=>{
    let song = new Song({
        name: req.body.name,
        artist: req.body.artist,
        album: req.body.album,
        imglogo: req.body.imglogo,
        url: req.body.url,
        lyric: req.body.lyric
    });

    song.save ((err,sng)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json(sng);
    });
};

//PUT SONG
const modiSong = (req,res)=>{

    Song.findByIdAndUpdate(req.params.id, req.body, (err,song)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json({song, message:'Successfully updated'});
    });

};

//DELETE USER
const deleteSong = (req,res)=>{
    Song.deleteOne({_id: req.params.id}, (err,user)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json({message:'Successfully deleted'});
    });

};

module.exports = {findAllUsers,findUser,addUser,modiUser,deleteUser,findAllSongs,findSong,addSong,modiSong,deleteSong};