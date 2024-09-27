const userdatabase=require('../database/MOCK_DATA.json')

const findusercontroller=async(req,res)=>{

      res.json(userdatabase);

       

}

module.exports={findusercontroller};