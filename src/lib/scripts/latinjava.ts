const wyanjana:{ [id: string]: string; }  = {
    b: 'ꦧ',       // ba
    bh: 'ꦨ',       // ba murda
    c: 'ꦕ',       // ca
    ch: 'ꦖ',       // cha mahaprana
    d: 'ꦢ',       // da
    dh: 'ꦝ',       // dha
    ḍ: 'ꦝ',       // dha
    ḍh: 'ꦞ',       // dha mahaprana
    dz: 'ꦢ꦳',     // dza rekan
    f: 'ꦥ꦳',      // fa rekan
    g: 'ꦒ',       // ga
    gh: 'ꦒ꦳',     // gha rekan
    h: 'ꦲ',       // ha
    j: 'ꦗ',       // ja
    jh: 'ꦙ',       // jha murda
    k: 'ꦏ',       // ka
    kh: 'ꦏ꦳',     // kha rekan
    l: 'ꦭ',       // la
    m: 'ꦩ',       // ma
    n: 'ꦤ',       // na
    ng: 'ꦔ',      // nga
    ŋ: 'ꦔ',       // nga
    ny: 'ꦚ',       // nya
    nc: 'ꦚ꧀ꦕ',       // nca
    nj: 'ꦚ꧀ꦗ',       // nja
    ñ: 'ꦚ',       // nya
    ṇ: 'ꦟ',       // na murda
    p: 'ꦥ',       // pa
    ph: 'ꦦ',       // pa murda
    q: 'ꦐ',       // ka sasak
    r: 'ꦫ',       // ra
    ṛ: 'ꦬ',        // ra agung
    s: 'ꦱ',       // sa
    ś: 'ꦯ',       // sa murda
    ṣ: 'ꦰ',       // sa mahaprana
    t: 'ꦠ',       // ta
    th: 'ꦛ',       // ta
    ṭ: 'ꦡ',       // ta murda
    ṭh: 'ꦜ',      // tha mahaprana
    v: 'ꦮ꦳',      // va rekan
    w: 'ꦮ',       // wa
    x: 'ꦏ꧀ꦱ',     // ks 
    y: 'ꦪ',       // ya
    z: 'ꦗ꦳',      // za rekan,
}

const swara:{ [id: string]: string; }  = {
   A: 'ꦄ',       // aksara swara a
   Ā: 'ꦄꦴ',       // aksara swara aa
   Aa: 'ꦄꦴ',       // aksara swara aa
   Ô: 'ꦄ',         // aksara swara aa
   Ôô: 'ꦄꦴ',        // aksara swara aa
   I: 'ꦆ',       // aksara swara i
   Ii: 'ꦇ',       // aksara swara a
   Ī: 'ꦇ',       // aksara swara a
   U: 'ꦈ',       // aksara swara u
   Ū: 'ꦈꦴ',       // aksara swara uu
   Uu: 'ꦈꦴ',       // aksara swara uu
   E: 'ꦌ',       // aksara swara e
   È: 'ꦌ',       // aksara swara e
   É: 'ꦌ',       // aksara swara e
   Ê: 'ꦄꦼ',      // aksara swara ê
   Ě: 'ꦄꦼ',      // aksara swara ê
   O: 'ꦎ',       // aksara swara o
   Ai: 'ꦍ',       // aksara swara ai
   Eu: 'ꦎꦴ',       // aksara swara êu
   lêu: 'ꦋ',       // aksara lêu
   rêu: 'ꦉꦴ',       // aksara rêu
}

const murdaConsonants:{ [id: string]: string; } = {
    'n': 'ꦟ',      // na murda
    'k': 'ꦑ',       // ka murda
    'kh': 'ꦑ꦳',       // kha murda
    't': 'ꦡ',       // ta murda
    's': 'ꦯ',      // sa murda
    'p': 'ꦦ',       // pa murda
    'f': 'ꦦ꦳',       // fa murda
    'ny': 'ꦘ',      // nya murda
    'ñ': 'ꦘ',       // nya murda
    'g': 'ꦓ',      // ga murda
    'gh': 'ꦓ꦳',      // gha murda
    'b': 'ꦨ',       // ba murda
}

const sandhanganWyanjana:{ [id: string]: string; } = {
    r: 'ꦿ',   // cakra
    ṛ: 'ꦽ',   // cakra keret
    y: 'ꦾ',   // pengkal
}

const sandhanganPanyigeg:{ [id: string]: string; } = {
    r: 'ꦂ',
    h: 'ꦃ', 
    ng: 'ꦁ',
}

const sandhanganSwara:{ [id: string]: string; } = { 
    a: '',
    ô: '',
    aa: 'ꦴ',
    ai: 'ꦻ',
    au: 'ꦻꦴ',
    ôô: '',
    ā: 'ꦴ',
    i: 'ꦶ',
    ii: 'ꦷ',
    ī: 'ꦷ',
    u: 'ꦸ',
    uu: 'ꦹ',
    ū: 'ꦹ',
    e: 'ꦺ',
    è: 'ꦺ',
    é: 'ꦺ',
    ê: 'ꦼ',
    ě: 'ꦼ',
    êu: 'ꦼꦴ',
    ěu: 'ꦼꦴ',
    o: 'ꦺꦴ',
}

const angka:{ [id: string]: string; } = {
    '0': '꧐',
    '1': '꧑',
    '2': '꧒',
    '3': '꧓',
    '4': '꧔',
    '5': '꧕',
    '6': '꧖',
    '7': '꧗',
    '8': '꧘',
    '9': '꧙'
}

const pada:{ [id: string]: string; } = {
    ' ' : '​',
    '.' : '꧉',
    ',' : '꧈',
    '-' : '',
}

function convert(str:string, isIgnoreSpace:boolean = false, isMurda:boolean = false, isDiphthong:boolean = false):string {
   var length = str.length;
   var output = [];
   var isMurdaAlreadyIncluded = false;
   var isAlreadyStacked = false;

   for (var i = 0; i < length; i++)
   {
       var c:string = str[i];

       if(i + 1 < length) {
           var cc:string = c + str[i + 1];
           
           if(isConsonants(cc) || isConsonants(cc.toLowerCase())) {
               i++;
               
               if(cc === cc.toUpperCase()) {
                   cc = cc.toLowerCase();
               }

               if(isConsonantsSandhanganPanyigeg(cc)) {
                   isAlreadyStacked = false;
                   
                   if(i - 2 >= 0 && i + 1 < length) {
                       var cBefore = str[i - 2];
                       var cAfter = str[i + 1];

                       if(isVowels(cBefore) && !isVowels(cAfter)) {
                           output.push(sandhanganPanyigeg[cc]);
                           continue;
                       }
                   }

                   if(i - 2 >= 0 && i === length - 1) {
                       var cBefore = str[i - 2];

                       if(isVowels(cBefore)) {
                           output.push(sandhanganPanyigeg[cc]);
                           continue;
                       }
                   }
               }

               // prevent "tumpuk telu" by adding zero width space
               if(output.length - 2 >= 0) {
                   var lastOutput:string = output[output.length - 1];
                   var lastOutput2:string = output[output.length - 2];
                   
                   if(isPangkon(lastOutput) && isWyanjanaPasanganInBelow(lastOutput2)) { 
                       if(isAlreadyStacked) {
                           // pop last two output
                           output.pop();
                           output.pop();

                           output.push('​'); // push zero width space

                           // push again last two output
                           output.push(lastOutput2);
                           output.push(lastOutput);
                           isAlreadyStacked = false;
                       } else {
                           isAlreadyStacked = true;
                       }
                   }
               }

               if(isMurda && !isMurdaAlreadyIncluded && isConsonantsMurda(cc)) {
                   output.push(murdaConsonants[cc]);
                   isMurdaAlreadyIncluded = true;
               } else {
                   output.push(wyanjana[cc]);
               }
               
               output.push('꧀');
               continue;
           }
       }

       if(isConsonantsSandhanganPanyigeg(c)) {
           isAlreadyStacked = false;
           let isSandhanganPanyigeg = false;

           if(i - 1 >= 0 && i + 1 < length) {
               var cBefore = str[i - 1];
               var cAfter = str[i + 1];

               if(isVowels(cBefore) && !isVowels(cAfter)) {
                   isSandhanganPanyigeg = true;
               }
           }

           if(i - 1 >= 0 && i === length - 1) {
               var cBefore = str[i - 1];

               if(isVowels(cBefore)) {
                   isSandhanganPanyigeg = true;
               }
           }

           if(isSandhanganPanyigeg) {
               // remove pangkon if exist
               if(output.length - 1 >= 0) {
                   var lastOutput:string = output[output.length - 1];   

                   if(isPangkon(lastOutput)) {
                       output.pop();
                   }
               }

               output.push(sandhanganPanyigeg[c]);
               continue;
           }
       }
       
       if(isConsonantsSandhanganWyanjana(c)) {
           isAlreadyStacked = false;
           let isSandhanganWyanjana = false;

           if(i - 2 >= 0) {
               var cBefore = str[i - 2] + str[i - 1];

               if(isConsonants(cBefore) && !isSandhanganPanyigeg(output[output.length - 1])) {
                   isSandhanganWyanjana = true;
               }
           }

           if(i - 1 >= 0) {
               var cBefore = str[i - 1];

               if(isConsonants(cBefore) && !isSandhanganPanyigeg(output[output.length - 1])) {
                   isSandhanganWyanjana = true;
               }
           }

           if(isSandhanganWyanjana) {
               // remove pangkon if exist
               if(output.length - 1 >= 0) {
                   var lastOutput:string = output[output.length - 1];   

                   if(isPangkon(lastOutput)) {
                       output.pop();
                   }
               }

               output.push(sandhanganWyanjana[c]);
               continue;
           }
       }
       
       if(isConsonants(c) || isConsonants(c.toLowerCase())) {
           if(c === c.toUpperCase()) {
               c = c.toLowerCase();
           }

           // prevent "tumpuk telu" by adding zero width space
           if(output.length - 2 >= 0) {
               var lastOutput:string = output[output.length - 1];
               var lastOutput2:string = output[output.length - 2];
               
               if(isPangkon(lastOutput) && isWyanjanaPasanganInBelow(lastOutput2)) { 
                   if(isAlreadyStacked) {
                       output.pop();
                       output.pop();

                       output.push('​'); // push zero width space
                       output.push(lastOutput2);
                       output.push(lastOutput);
                       isAlreadyStacked = false;
                   } else {
                       isAlreadyStacked = true;
                   }
               }
           }

           if(isMurda && !isMurdaAlreadyIncluded && isConsonantsMurda(c)) {
               output.push(murdaConsonants[c]);
               isMurdaAlreadyIncluded = true;
           } else {
               output.push(wyanjana[c]);
           }

           output.push('꧀');
           continue;
       }

       if(isVowelsSwara(c)) {
           isAlreadyStacked = false;

           // isDiphthong
           if(isDiphthong && i + 1 < length && isVowels(str[i + 1])) {
                var c2 = str[i + 1];

                if(isSwaraA(c) && isVowelsA(c2)) {
                    output.push(swara['Aa']);
                    i++;
                    continue;
                }
                
                if (isSwaraA(c) && isVowelsWulu(c2)) {
                    output.push(swara['Ai']);
                    i++;
                    continue;
                }

                if(isSwaraI(c) && isVowelsWulu(c2)) {
                    output.push(swara['Ii']);
                    i++;
                    continue;
                }

                if(isSwaraU(c) && isVowelsSuku(c2)) {
                    output.push(swara['Uu']);
                    i++;
                    continue;
                }

                if(isSwaraE(c) && isVowelsSuku(c2)) {
                    output.push(swara['Eu']);
                    i++;
                    continue;
                }
            }

           output.push(swara[c]);
           continue;
       }
       
       if(isVowels(c)) {
           isAlreadyStacked = false;

           if(i + 1 < length) {
               var c2 = str[i + 1];

               // change ia, iu, ie, iê, io to iya, iyu, iye, iyê, iyo
               if(isVowelsWulu(c) && isVowels(c2) && !isVowelsWulu(c2)) {
                   str = str.substring(0, i + 1) + 'y' + str.substring(i + 1, str.length);
                   length = str.length;
               }

               // change ua, ui, ue, uê, uo to uwa, uwi, uwe, uwê, uwo
               if(isVowelsSuku(c) && isVowels(c2) && !isVowelsSuku(c2)) {
                   str = str.substring(0, i + 1) + 'w' + str.substring(i + 1, str.length);
                   length = str.length;
               }

               // change ea to eya
               if(isVowelsTaling(c) && isVowelsA(c2)) {
                   str = str.substring(0, i + 1) + 'y' + str.substring(i + 1, str.length);
                   length = str.length;
               }

               // change eo to eyo
               if(isVowelsTaling(c) && isVowelsTalingTarung(c2)) {
                   str = str.substring(0, i + 1) + 'y' + str.substring(i + 1, str.length);
                   length = str.length;
               }
               
               // change oa to owa
               if(isVowelsTalingTarung(c) && isVowelsA(c2)) {
                   str = str.substring(0, i + 1) + 'w' + str.substring(i + 1, str.length);
                   length = str.length;
               }
               
               // change oe to owe
               if(isVowelsTalingTarung(c) && isVowelsTaling(c2)) {
                   str = str.substring(0, i + 1) + 'w' + str.substring(i + 1, str.length);
                   length = str.length;
               }
           }
           
           if(isVowelsPepet(c)) {
               // check cakra keret
               if(output.length - 1 >= 0) {
                   var lastOutputChar = output[output.length - 1];
                   
                   if(isCakra(lastOutputChar)) {
                       output.pop();
                       output.push('ꦽ');
                       continue;
                   }
               }

               if(i - 1 >= 0) {
                   var cBefore = str[i - 1];
                   
                   // check nga lelet
                   if(isConsonantL(cBefore)) {
                        output.pop(); // pop pangkon
                        output.pop(); // pop aksara la
                        output.push('ꦊ');
                        continue;
                    }

                   // check pa ceret
                   if(isConsonantR(cBefore)) {
                       output.pop(); // pop pangkon
                       output.pop(); // pop aksara ra
                       output.push('ꦉ');
                       continue;
                   }
               }
           }

           if(isDiphthong && isVowelsSuku(c)) {
                if(i - 2 >= 0) {
                    var c2Before = str[i - 2];
                    var cBefore = str[i - 1];
                    
                    // check nga lelet Raswadi
                    if(isConsonantL(c2Before) && isVowelsPepet(cBefore)) {
                        output.pop(); // pop nga lelet
                        output.push('ꦋ');
                        continue;
                    }

                    // check pa ceret-tarung
                    if(isConsonantR(c2Before) && isVowelsPepet(cBefore)) {
                        output.pop(); // pop pa ceret
                        output.push('ꦉꦴ');
                        continue;
                    }
                }

                if(i - 1 >= 0) {
                    var cBefore = str[i - 1];
                    
                    
                }
            }
           
           if(i - 1 >= 0 && isConsonants(str[i - 1])) {
               // check pangkon
               if(output.length - 1 >= 0) {
                   var lastOutputChar = output[output.length - 1];
                   
                   if(isPangkon(lastOutputChar)) {
                       output.pop();
                   }
               }

               output.push(sandhanganSwara[c]);
           } else {
               output.push(wyanjana['h']);
               output.push(sandhanganSwara[c]);
           }

           // isDiphthong
           if(isDiphthong && i + 1 < length && isVowels(str[i + 1])) {
               var c2 = str[i + 1];

               if(isVowelsA(c) && isVowelsA(c2)) {
                   output.push(sandhanganSwara['aa']);
                   i++;
                   continue;
               }

               if(isVowelsA(c) && isVowelsWulu(c2)) {
                   output.push(sandhanganSwara['ai']);
                   i++;
                   continue;
               }

               if(isVowelsA(c) && isVowelsSuku(c2)) {
                   output.push(sandhanganSwara['au']);
                   i++;
                   continue;
               }

               if(isVowelsWulu(c) && isVowelsWulu(c2)) {
                   output.pop();
                   output.push(sandhanganSwara['ii']);
                   i++;
                   continue;
               }
               
               if (isVowelsSuku(c) && isVowelsSuku(c2)) {
                   output.pop();
                   output.push(sandhanganSwara['uu']);
                   i++;
                   continue;
               }

               if (isVowelsPepet(c) && isVowelsSuku(c2)) {
                    output.pop();
                    output.push(sandhanganSwara['êu']);
                    i++;
                    continue;
                }
           }

           continue;
       }

       if(isCharactersAngka(c)) {
        output.push(angka[c]);
        continue;
    }
       
       if(isCharactersPada(c)) {
           isAlreadyStacked = false;

           if(isIgnoreSpace && c === ' ') {
               continue;
           }

           output.push(pada[c]);
           continue;
       }
       
       output.push(c);
   }

   return output.join('');
}

function isWyanjana(key:string) { return Object.values(wyanjana).includes(key); }

function isWyanjanaPasanganInRight(wyanjana:string):boolean { 
   return wyanjana === 'ꦥ' || wyanjana === 'ꦥ꦳' || wyanjana === 'ꦲ' || wyanjana === 'ꦏ꧀ꦱ' || wyanjana === 'ꦰ' || wyanjana === 'ꦱ' || wyanjana === 'ꦦ'; 
}

function isWyanjanaPasanganInBelow(wyanjana:string):boolean { 
   return isWyanjana(wyanjana) && !isWyanjanaPasanganInRight(wyanjana); 
}

function isSandhanganWyanjana(key:string):boolean { return Object.values(sandhanganWyanjana).includes(key); }

function isSandhanganPanyigeg(key:string):boolean { return Object.values(sandhanganPanyigeg).includes(key); }

function isConsonants(s:string):boolean { 
   return Object.prototype.hasOwnProperty.call(wyanjana, s.toLowerCase()); 
}

function isConsonantsMurda(s:string):boolean {
   return Object.prototype.hasOwnProperty.call(murdaConsonants, s.toLowerCase()); 
}

function isConsonantsSandhanganPanyigeg(s:string):boolean {
   return Object.prototype.hasOwnProperty.call(sandhanganPanyigeg, s.toLowerCase());
}

function isConsonantsSandhanganWyanjana(s:string):boolean {
   return Object.prototype.hasOwnProperty.call(sandhanganWyanjana, s.toLowerCase());
}

function isConsonantL(s:string):boolean { 
    return s === 'L' || s === 'l';
}

function isConsonantR(s:string):boolean { 
    return s === 'R' || s === 'r';
}

function isVowels(s:string):boolean { 
   return Object.prototype.hasOwnProperty.call(sandhanganSwara, s); 
}

function isVowelsSwara(s:string):boolean { 
   return Object.prototype.hasOwnProperty.call(swara, s); 
}

function isCharactersAngka(s:string):boolean {
    return Object.prototype.hasOwnProperty.call(angka, s);
 }

function isCharactersPada(s:string):boolean {
   return Object.prototype.hasOwnProperty.call(pada, s);
}

function isSwaraA(s:string):boolean {
    return s === 'A' || s === 'Ô';
}

function isSwaraI(s:string):boolean {
    return s === 'I';
}

function isSwaraU(s:string):boolean {
    return s === 'U';
}
 
function isSwaraE(s:string):boolean {
    return s === 'E';
}

function isVowelsA(s:string):boolean {
   return s === 'a' || s === 'ô';
}

function isVowelsPepet(s:string):boolean {
   return s === 'ê' || s === 'ě';
}

function isVowelsWulu(s:string):boolean {
   return s === 'i';
}

function isVowelsSuku(s:string):boolean {
   return s === 'u';
}

function isVowelsTaling(s:string):boolean {
   return s === 'e' || s === 'é' || s === 'è';
}

function isVowelsTalingTarung(s:string):boolean {
   return s === 'o';
}

function isPangkon(s:string):boolean {
   return s === '꧀';
}

function isCakra(s:string):boolean {
   return s === 'ꦿ';
}

export { convert };