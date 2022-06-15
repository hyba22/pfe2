const express = require('express');
const multer = require('multer');
const FileSchema = require('../models/fileModel');
const router = express.Router();
const MIME_TYPE_MAP = {
    
    "file/png": "png",
    "file/jpeg": "jpg",
    "file/jpg": "jpg",
    "file/gif": "gif",
    "file/pdf": "pdf"
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req,file)
        cb(null, "documents");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");

        console.log(name)
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "-" + Date.now()+ "." + ext);
    }
});

router.post("/upload",
    multer({ storage: storage }).single("file"),
    (req, res, next) => {
        console.log(req.body)
        const url = req.protocol + "://" + req.get("host")
        console.log(url)
        const post = new FileSchema({
            title: req.body.title,
            content: req.body.content,
            imagePath: url + "/documents/" + req.file.filename,
            creator: req.userData.userId,
            postDate: req.body.postDate,
        })
        console.log(post)
        post.save().
            then(post => {
                if(post){
                    res.status(201).json({
                        message: "Post added successfully",
                        post: {
                            ...post,
                            id: post._id
                        }
                    })
                }

                    if(!post){
                        res.status(404).json({
                            message: "Error Adding Post",
                          
                        })
                    }
               
                
            })
            .catch(e => {
                console.log(e)
                res.status(501).json({ message: "Error Adding Post"+e });
            })
    })


module.exports = router;