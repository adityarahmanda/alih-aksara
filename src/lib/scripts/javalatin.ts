const wyanjana:{ [id: string]: string; }  = {
    'ꦲ':'h',      // ha 
    'ꦤ':'n',      // na
    'ꦕ':'c',      // ca
    'ꦫ':'r',      // ra
    'ꦏ':'k',      // ka
    'ꦢ':'d',      // da
    'ꦠ':'t',      // ta
    'ꦱ':'s',      // sa
    'ꦮ':'w',      // wa
    'ꦭ':'l',      // la
    'ꦥ':'p',      // pa
    'ꦝ':'dh',      // dha
    'ꦗ':'j',      // ja
    'ꦪ':'y',      // ya
    'ꦚ':'ny',     // nya
    'ꦩ':'m',      // sa
    'ꦒ':'g',      // ga
    'ꦧ':'b',      // ba
    'ꦛ':'t',      // tha
    'ꦔ':'ng',     // nga
    'ꦟ':'n',       // na murda
    'ꦑ':'k',       // ka murda
    'ꦡ':'t',       // ta murda
    'ꦯ':'s',       // sa murda
    'ꦦ':'p',       // pa murda
    'ꦘ':'ny',      // nya murda
    'ꦓ':'g',       // ga murda
    'ꦨ':'b',       // ba murda
    'ꦰ':'s',       // sa mahaprana
    'ꦖ':'ch',      // cha mahaprana
    'ꦣ':'d',        // da mahaprana
    'ꦞ':'dh',      // dha mahaprana
    'ꦜ':'th',      // tha mahaprana
    'å':'jh',      // ja jera
    'ꦐ':'q',       // ka sasak
    'ꦬ':'r',       // ra agung
}

const rekan:{ [id: string]: string; }  = {
    'ꦢ':'dz',      // ga
    'ꦒ':'gh',      // gh
    'ꦗ':'z',      // za
    'ꦥ':'f',      // fa
    'ꦮ':'v',      // ga
}

const swara:{ [id: string]: string; }  = {
    'ꦄ':'A',        // a 
    'ꦆ':'I',        // i 
    'ꦅ':'I',        // i kawi
    'ꦈ':'U',        // u 
    'ꦌ':'E',        // e 
    'ꦎ':'O',        // o
}

// diacritics swara
const sandhanganSwara:{ [id: string]: string; }  = {
    'ꦶ':'i',        // i
    'ꦸ':'u',        // u
    'ꦼ':'ê',        // ê
    'ꦺ':'e',        // e
    'ꦺꦴ':'o',        // o
    'ꦻ':'ai',        // e
    'ꦻꦴ':'au',        // e
    'ꦷ':'ī',       // dirga melik, long i
    'ꦹ':'ū',       // dirga mendut, long u
}

// diacritics swara
const sandhanganWyanjana:{ [id: string]: string; }  = {
    'ꦿ':'r',       // cakra
    'ꦽ':'r',       // cakra kêrêt
    'ꦾ':'y',       // pengkal
}

const sandhanganPanyigeg:{ [id: string]: string; }  = {
    'ꦂ':'r',        // layar (r)
    'ꦁ':'ng',       // cecak (ng)
    'ꦃ':'h',        // wigyan (h)
    'ꦀ':'ṁ'          // panyangga (ṁ)
}

// punctuations
const pada:{ [id: string]: string; }  = {
    '​':' ',          // zero width non joiner
    '꧊':'',         // adeg
    '꧋':'',         // adeg-adeg
    'ꧏ':'',        // pangkrangkep
    '꧞':'',        // tirta tumetes
    '꧟':'',        // isen-isen
    '꧌':'(',        // pada piseleh
    '꧍':')',        // turned pada piseleh
    '꧁':'',        // left rerenggan
    '꧂':'',        // right rerenggan
    '꧈':',',        // pada lingsa
    '꧉':'.',        // pada lungsi
    '꧆':'',        // pada windu
    '꧃':'',         // pada andhap
    '꧄':'',         // pada madya
    '꧅':'',         // pada luhur
    '꧑':'1',        // angka 1
    '꧒':'2',        // angka 2
    '꧓':'3',        // angka 3
    '꧔':'4',        // angka 4
    '꧕':'5',        // angka 5
    '꧖':'6',        // angka 6
    '꧗':'7',        // angka 7
    '꧘':'8',        // angka 8
    '꧙':'9',        // angka 9
    '꧐':'0',        // angka 0
}

function convert(str:string):string {
    var length = str.length;
    var output = [];

    for (let i = 0; i < length; i++) {
        var c:string = str[i];

        if(isPangkon(c)) {
            if(output.length - 1 >= 0 && output[output.length - 1] === 'a') {
                output.pop();
                continue;
            }
        }

        if(isCecakTelu(c)) {
            if(i - 1 >= 0 && isRekan(str[i - 1])) {
                if(output.length - 1 >= 0 && output[output.length - 1] === 'a') {
                    output.pop();
                }
                output.pop();
                output.push(rekan[str[i - 1]]);
                output.push('a');
                continue;
            }
        }

        if(isSandhanganWyanjana(c)) {
            if(output.length - 1 >= 0 && output[output.length - 1] === 'a') {
                output.pop();
            }
            output.push(sandhanganWyanjana[c]); 
            if(isCakraKeret(c)) {
                output.push('ê');
            } else {
                output.push('a');
            }
            continue;
        } 
        
        if(isSandhanganSwara(c)) {
            if(i - 1 >= 0) {
                if(isWyanjana(str[i - 1]) || (isSandhanganWyanjana(str[i - 1]) && !isCakraKeret(str[i - 1]))) {
                    if(output.length - 1 >= 0 && output[output.length - 1] === 'a') {
                        output.pop();
                    }

                    output.push(sandhanganSwara[c]);
                    continue;
                }

                if(isCecakTelu(str[i - 1])) {
                    if(i - 2 >= 0) {
                        if(isWyanjana(str[i - 2]) || (isSandhanganWyanjana(str[i - 2]) && !isCakraKeret(str[i - 2]))) {
                            if(output.length - 1 >= 0 && output[output.length - 1] === 'a') {
                                output.pop();
                            }
        
                            output.push(sandhanganSwara[c]);
                            continue;
                        }
                    }
                }
            }
        }

        if(isTarung(c)) {
            if(output.length - 1 >= 0) {
                var lastOutput:string = output[output.length - 1];

                if(lastOutput === 'a') {
                    output.pop();
                    output.push('ā');
                    continue;
                }

                if(lastOutput === 'ê') {
                    output.pop();
                    output.push('êu');
                    continue;
                }

                if(lastOutput === 'e') {
                    output.pop();
                    output.push('o');
                    continue;
                }

                if(lastOutput === 'ai') {
                    output.pop();
                    output.push('au');
                    continue;
                }

                if(lastOutput === 'Ê') {
                    output.push('u');
                    continue;
                }
            }
        }
        
        if(isSandhanganPanyigeg(c)) {
            output.push(sandhanganPanyigeg[c]);
            continue;
        }

        if(isPaCeret(c)) {
            output.push('r');
            output.push('ê');
            continue;
        }

        if(isNgaLelet(c)) {
            output.push('l');
            output.push('ê');
            continue;
        }

        if(isNgaLeletRaswadi(c)) {
            output.push('l');
            output.push('êu');
            continue;
        }

        if(isSwara(c)) {
            output.push(swara[c]);
            continue;
        }
        
        if(isWyanjana(c)) {
            output.push(wyanjana[c]);
            output.push('a');
            continue;
        }
        
        if(isPada(c)) {
            output.push(pada[c]);
            continue;
        }
            
        output.push(c);
        // Debug.Log(output);
    }
    return output.join("");
}

function isWyanjana(key:string):boolean { return Object.prototype.hasOwnProperty.call(wyanjana, key); }

function isRekan(key:string):boolean { return Object.prototype.hasOwnProperty.call(rekan, key); }

function isSwara(key:string):boolean { return Object.prototype.hasOwnProperty.call(swara, key); }

function isSandhanganSwara(key:string):boolean { return Object.prototype.hasOwnProperty.call(sandhanganSwara, key); }

function isSandhanganWyanjana(key:string):boolean { return Object.prototype.hasOwnProperty.call(sandhanganWyanjana, key); }

function isSandhanganPanyigeg(key:string):boolean { return Object.prototype.hasOwnProperty.call(sandhanganPanyigeg, key); }

function isPada(key:string):boolean { return Object.prototype.hasOwnProperty.call(pada, key); }

function isPaCeret(s:string):boolean { return s === "ꦉ"; }

function isNgaLelet(s:string):boolean { return s === "ꦊ"; }

function isNgaLeletRaswadi(s:string):boolean { return s === "ꦋ"; }

function isPangkon(s:string):boolean { return s === "꧀"; }

function isCakraKeret(s:string):boolean { return s === "ꦽ" }

function isTarung(s:string):boolean { return s === "ꦴ"; }

function isCecakTelu(s:string):boolean { return s === "꦳"; }

export { convert };