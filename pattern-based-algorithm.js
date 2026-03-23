let a = prompt("Source Data:");

function Encoder(SourceData){
    let EncryptedString = "";
    let InputPattern = "123456EvriDByGoOtseUL";
    let OutputPattern = "EvriBoDyGetsLOU123456";

    for(let i=0; i<SourceData.length; i++){
        if(InputPattern.indexOf(SourceData[i]) > -1){
            EncryptedString += OutputPattern[InputPattern.indexOf(SourceData[i])];
        }else{
            EncryptedString += SourceData[i];
        }
    }
    
    return EncryptedString;
}

let b = Encoder(a);
console.log(b);

function Decoder(EncryptedString){
    let DecryptedString = "";
    let OutputPattern = "EvriBoDyGetsLOU123456";
    let InputPattern = "123456EvriDByGoOtseUL";

    for(let i=0; i<EncryptedString.length; i++){
        if(OutputPattern.indexOf(EncryptedString[i]) > -1){
            DecryptedString += InputPattern[OutputPattern.indexOf(EncryptedString[i])];
        }else{
            DecryptedString += EncryptedString[i];
        }
    }
    
    return DecryptedString;
}

let c = Decoder(b);
console.log(c);

