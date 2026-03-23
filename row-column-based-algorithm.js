let Coder = function(SourceData, size){
    this.SourceData = SourceData;
    this.size = size;
    
    this.Encoder = function(){
        let arr = SourceData.split('');
        let l = 0;
        let map = [];
    
        let rowsize = size;
        if(arr.length > Math.pow(size,2)){
            rowsize = size + Math.floor((arr.length - Math.pow(size,2))/size);
        } else if(arr.length < Math.pow(size,2)){
            rowsize = size - Math.floor((Math.pow(size,2) - arr.length)/size);
        }
    
        for(let i=0; i<rowsize; i++){
            map[i] = [];
            for(let j=0; j<size; j++){
                map[i][j] = arr[l];
                l++;
                if(arr[l] == undefined){
                    arr[l] = " ";
                }
            }
        }
    
        l = 0;
        
        for(let j=0; j<size; j++){
            for(let i=0; i<rowsize; i++){
                arr[l] = map[i][j];
                l++;
            }
        }
        
        return arr.join("");
    }
    
    this.Decoder = function(){
        let arr = this.Encoder().split('');
        let l = 0;
        let map = [];
    
        let rowsize = size;
        if(arr.length > Math.pow(size,2)){
            rowsize = size + Math.floor((arr.length - Math.pow(size,2))/size);
        } else if(arr.length < Math.pow(size,2)){
            rowsize = size - Math.floor((Math.pow(size,2) - arr.length)/size);
        }
        
        for(let i=0; i<rowsize; i++){
            map[i] = [];
            for(let j=0; j<size; j++){
                map[i][j] = arr[l];
                l++;
            }
        }
    
        l = 0;
        
        for(let j=0; j<size; j++){
            for(let i=0; i<rowsize; i++){
                arr[l] = map[i][j];
                l++;
            }
        }
        
        return arr.join("");
    }

}

let hh = new Coder("Hajastani Hanrapetutjun", 5);

console.log(hh.Encoder());
console.log(hh.Decoder());
