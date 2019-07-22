import App from '../src/App';
import Koa from 'koa';
import React from 'react';
import Router from 'koa-router';
import koaStatic from 'koa-static';
import fs from 'fs';
import path from 'path';
import {renderToString} from 'react-dom/server';

const app=new Koa();
app.use(koaStatic(path.join(__dirname,'../build'),{
    index:'root'
}))

app.use(
    new Router().get(
        '*',async (ctx,next)=>{
            ctx.response.type='html';
            let shtml='';
            await new Promise((resolve,reject)=>{
                fs.readFile(path.join(__dirname,'../build/index.html'),'utf-8',function(err,data){
                    if(err){
                        reject();
                        return console.log(err);
                    }
                    shtml=data;
                    resolve();
                })
            })
            ctx.response.body=shtml.replace('{{root}}',renderToString(<App />));
        }
    ).routes()

)


app.listen(4000);