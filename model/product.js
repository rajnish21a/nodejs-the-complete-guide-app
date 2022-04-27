const { json } = require('express/lib/response');
const fs = require('fs');
const path = require("path");
let products = [];
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

module.exports = class Product{
    constructor(t){
        this.title = t
    }

    save(){
        //products.push(this);
        
        fs.readFile(p,(err,fileContent)=>{
            //let products = [];
            if(!err){
                products = JSON.parse(fileContent);
            };
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),err=>{
                console.log(err);
            });
        })
    }

    static fetchAll(cb){
        console.log(products);
        fs.readFile(p,(err,fileContent)=>{
            if(err){
             cb([]);
            }else{
                cb(JSON.parse(fileContent));
            }
        })
    }
}