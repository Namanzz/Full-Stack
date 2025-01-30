import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
    .prompt([
        {
        type:'input',
        name: 'link',
        message: 'Enter the link you want to generate a QR code for',}
    ])
    .then((answers) => {
        const link=answers.link;
        const qrcode=qr.image(link,{type:'png'});
        const filename = "qrcode.png";
        const textFileName = 'input_link.txt';
        fs.writeFileSync(textFileName, link, 'utf8');
        qrcode.pipe(fs.createWriteStream(filename));
        console.log(`QR code generated and saved as ${filename}`);
        console.log(`Link saved in ${textFileName}`);
    })
    .catch((error)=>{
        if(error.isTtyError){
            console.error("Prompt failed");
        }
        else{
            console.error(error);
        }
    });