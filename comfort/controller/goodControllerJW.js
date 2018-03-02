const goodDao=require("../dao/goodDaoJW");
const goodxx={
    getAll(request,response){
        let huaji = {};
        goodDao.gete_name([]).then((data)=>{
            // response.render("goodxx",data)
            let lala = data[0].e_name;
            // console.log(lala);
            huaji.e_name = lala;
            // response.render("goodxx",{e_name:lala});
        });
        goodDao.getc_name([]).then((data)=>{
            let lala = data[0].c_name;
            huaji.c_name = lala;
            // response.render("goodxx",{c_name:lala});
        });
        goodDao.gettdd_pic([]).then((data)=>{
            let lala = data[0].pic_lujin;
            huaji.tdd_pic = lala;
            // response.render("goodxx",{tdd_pic:lala});
        });
        goodDao.getprice([]).then((data)=>{
            let lala = data[0].price;
            huaji.price = lala;
        });
            /*循环*/
        goodDao.getcolorImg([]).then((data)=>{
            huaji.colorImgData=data;
            // response.render("goodxx",{color_img:lala});
        });
        goodDao.getDesigner([]).then((data)=>{
            let lala = data[0].pic_lujin;
            huaji.designer=lala;
        });
        goodDao.getaRow([]).then((data)=>{
            // console.log("11111")
            // console.log(data)
            let xxx="%"+data[0].e_style+"_a%";
            // let aRow;
            console.log(xxx);
            goodDao.getaRow1([xxx]).then((data)=> {
                goodDao.getaRow1([xxx]).then((data) => {
                    let lala = data[0].pic_lujin;
                    // console.log("123"+lala);
                    // console.log("第二个取出的值"+huaji);
                    huaji.aRow = lala;
                    response.render("goodxx", huaji);
                });
            });
        });
        goodDao.getbRowData([]).then((data)=>{
            let lala=data;
            huaji.bRowData=lala;
        });
        goodDao.getstyle([]).then((data)=>{
            // let lala = data[0].style;
            huaji.styleData=data;
            // response.render("goodxx",{style:lala});
            // console.log(huaji);
            // response.render("goodxx",huaji);
        });
        goodDao.getshowx([]).then((data)=>{
            huaji.show_x=data;
        });
        goodDao.getsceney([]).then((data)=>{
            huaji.scene_y=data;
        });
        goodDao.getweight([]).then((data)=>{
            huaji.weight=data[0].weight;
        });
        goodDao.getmaterial([]).then((data)=>{
            huaji.material=data[0].material;
        });
        goodDao.getcoating([]).then((data)=>{
            huaji.coating=data[0].coating;
        });
        goodDao.getrule([]).then((data)=>{
            huaji.rule=data[0].rule;
        });
        goodDao.getaz([]).then((data)=>{
            huaji.az=data[0].az;
        });
        goodDao.getother([]).then((data)=>{
            huaji.other=data[0].other;
        });
        goodDao.getweihu([]).then((data)=>{
            huaji.weihu=data[0].weihu;
        });
        goodDao.getclean([]).then((data)=>{
            huaji.clean=data[0].clean;
        });
        goodDao.getmfrs([]).then((data)=>{
            huaji.mfrs=data[0].mfrs;
        });
        goodDao.getpsfs([]).then((data)=>{
            huaji.psfs=data[0].psfs;
        })
    }
};

module.exports=goodxx;