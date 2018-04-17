let fs=require('fs');
let list=[];
let isp='hotmail';
let writeF=fs.writeFileSync;
let wfile=`./dataAdamGo/${isp}USA.txt`;
let readMe=fs.readFileSync(`data4.txt`, 'utf8'); 
// form of lines in files: ||||||name|date|didech.abdel@gmail.com|gfhgf|56787
let lines = readMe.split('\n');
let emails=(line,pos)=>{
    for (let index = pos; index > 0; index--) {
        if (line.substring(index, index - 1) === '|') {
            return line.substring(index, pos + 12);
            break;
        }
    }
}
lines.forEach((line) => {
    let pos = line.indexOf(`@${isp}.com`);
    if(line.indexOf(`@${isp}.com`)>0){
        list.push(emails(line,pos));
        console.log(emails(line,pos));
    }
   
})
    console.log("-------------------------------------------------------------------------");
    console.log(list.length);
    writeF(wfile,list.join('\n'));
    console.log("DONE");
    console.log("-------------------------------------------------------------------------");
    