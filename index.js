//index.js

module.exports = function(req, res, next) {
        saveData = req.get("Save-Data");
        if(saveData){
            req.dataSaver = true;
            req.saveData = req.dataSaver;
        }
        else{
            req.dataSaver = false;
            req.saveData = req.dataSaver;
        }
        next()
}
