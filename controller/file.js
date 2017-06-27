var express = require('express'),
	  app 	= express(),
		multer  = require('multer'),
    fs = require('fs'),
    router  = express.Router();

    require('rootpath')();
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
    			var dir = './public/uploads';  //folder name

    			if (!fs.existsSync(dir)){  //if directory doesn't there to create it
    			    fs.mkdirSync(dir);
    			}
            cb(null, dir);
        },
        filename: function (req, file, cb) {
            cb(null,  Date.now()+'-'+file.originalname);  //chage the file name here
        }
    });

    var upload = multer({ storage: storage });


    router.route('/process')
    .post(upload.single('imagefile'),function (req, res) {
      var details = 'details from db';
    	res.status(200).send({
    		success: true,
    		message: 'successfully login!',
    		details: req.file.filename
    	});
    });
    module.exports = router;
