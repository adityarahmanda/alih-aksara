const signs:{ [id: string]: string; }  = {
	'ꦀ':'𑼀',      // KAWI SIGN CANDRABINDU (PANYANGGA) 
	'ꦁ':'𑼁',      // KAWI SIGN ANUSVARA (CECAK)
	'ꦂ':'𑼂',      // KAWI SIGN REPHA (LAYAR)
	'ꦃ':'𑼃',      // KAWI SIGN VISARGA (WIGNYAN)
	'ꦾ':'𑽂𑼫',      // PENGKAL
	'ꦿ':'𑽂𑼬',      // LAYAR
}

const independentVowels:{ [id: string]: string; }  = {
	'ꦄ':'𑼄',      // KAWI LETTER A
	'ꦄꦴ':'𑼅',      // KAWI LETTER AA
	'ꦅ':'𑼆',      // KAWI LETTER I (I KAWI)
	'ꦆ':'𑼆',      // KAWI LETTER I
	'ꦇ':'𑼇',      // KAWI LETTER II
	'ꦈ':'𑼈',      // KAWI LETTER U
	'ꦈꦴ':'𑼉',      // KAWI LETTER UU
	'ꦉ':'𑼊',      // KAWI LETTER VOCALIC R
	'ꦉꦴ':'𑼋',      // KAWI LETTER VOCALIC RR (REU)
	'ꦊ':'𑼌',      // KAWI LETTER VOCALIC L
	'ꦋ':'𑼍',      // KAWI LETTER VOCALIC LL (LEU)
	'ꦌ':'𑼎',      // KAWI LETTER E
	'ꦍ':'𑼏',      // KAWI LETTER AI
	'ꦎ':'𑼐',      // KAWI LETTER O
}

const consonants:{ [id: string]: string; }  = {
	'ꦏ':'𑼒',      // KAWI LETTER KA
	'ꦑ':'𑼓',      // KAWI LETTER KHA (KA MURDA)
	'ꦒ':'𑼔',      // KAWI LETTER GA
	'ꦓ':'𑼕',      // KAWI LETTER GHA (GA MURDA)
	'ꦔ':'𑼖',      // KAWI LETTER NGA
	'ꦕ':'𑼗',      // KAWI LETTER CA
	'ꦖ' : '𑼘',       //KAWI LETTER CHA (CA MURDA)
	'ꦗ' : '𑼙',       //KAWI LETTER JA
	'ꦙ' : '𑼚',       //KAWI LETTER JHA (JA MAHAPRANA)
	'ꦚ' : '𑼛',       //KAWI LETTER NYA
	'ꦛ' : '𑼜',       //KAWI LETTER TTA
	'ꦜ' : '𑼝',       //KAWI LETTER TTHA (TTA MAHAPRANA)
	'ꦝ' : '𑼞',       //KAWI LETTER DDA
	'ꦞ' : '𑼟',       //KAWI LETTER DDHA (DDA MAHAPRANA)
	'ꦟ' : '𑼠',       //KAWI LETTER NNA (NA MURDA)
	'ꦠ' : '𑼡',       //KAWI LETTER TA
	'ꦡ' : '𑼢',       //KAWI LETTER THA (TA MURDA)
	'ꦢ' : '𑼣',       //KAWI LETTER DA
	'ꦣ' : '𑼤',       //KAWI LETTER DHA (DA MAHAPRANA)
	'ꦤ' : '𑼥',       //KAWI LETTER NA
	'ꦥ' : '𑼦',       //KAWI LETTER PA
	'ꦦ' : '𑼧',       //KAWI LETTER PHA (TA MURDA)
	'ꦧ' : '𑼨',       //KAWI LETTER BA
	'ꦨ' : '𑼩',       //KAWI LETTER BHA (BA MURDA)
	'ꦩ' : '𑼪',       //KAWI LETTER MA
	'ꦪ' : '𑼫',       //KAWI LETTER YA
	'ꦫ' : '𑼬',       //KAWI LETTER RA
	'ꦭ' : '𑼭',       //KAWI LETTER LA
	'ꦮ' : '𑼮',       //KAWI LETTER WA
	'ꦯ' : '𑼯',       //KAWI LETTER SHA (SA MURDA)
	'ꦰ' : '𑼰',       //KAWI LETTER SSA (SA MAHAPRANA)
	'ꦱ' : '𑼱',       //KAWI LETTER SA
	'ꦲ' : '𑼲',       //KAWI LETTER HA
	'ꦘ' : '𑼳',       //KAWI LETTER JNYA
}

const dependentVowelSigns:{ [id: string]: string; }  = {
	'ꦴ' : '𑼴',       //KAWI VOWEL SIGN AA
	'ꦵ' : '𑼵',       //KAWI VOWEL SIGN ALTERNATE AA
	'ꦶ' : '𑼶',       //KAWI VOWEL SIGN I
	'ꦷ' : '𑼷',       //KAWI VOWEL SIGN II
	'ꦸ' : '𑼸',       //KAWI VOWEL SIGN ALTERNATE U
	'ꦹ' : '𑼹',       //KAWI VOWEL SIGN UU
	'ꦽ' : '𑼺',       //KAWI VOWEL SIGN R
	'ꦺ' : '𑼾',       //KAWI VOWEL SIGN E
	'ꦻ' : '𑼿',       //KAWI VOWEL SIGN AI
	'ꦼ' : '𑽀',       //KAWI VOWEL SIGN EU
}

const viramas:{ [id: string]: string; }  = {
	'꧀' : '𑽂',       //KAWI CONJOINER
}

const punctuations:{ [id: string]: string; }  = {
	'꧈' : '𑽃',       //KAWI DANDA (PADA LINGSA)
	'꧉' : '𑽄',       //KAWI DOUBLE DANDA (PADA LUNGSI)
	'꧃' : '𑽅',       //KAWI PUNCTUATION SECTION MARKER
	'꧄' : '𑽆',       //KAWI PUNCTUATION ALTERNATE SECTION MARKER
	'꧅' : '𑽆',       //KAWI PUNCTUATION ALTERNATE SECTION MARKER
	'꧁' : '𑽇',       //KAWI PUNCTUATION FLOWER
	'꧂' : '𑽇',       //KAWI PUNCTUATION FLOWER
}

const digits:{ [id: string]: string; }  = {
	'꧐' : '𑽐',       //KAWI DIGIT ZERO
	'꧑' : '𑽑',       //KAWI DIGIT ONE
	'꧒' : '𑽒',       //KAWI DIGIT TWO
	'꧓' : '𑽓',       //KAWI DIGIT THREE
	'꧔' : '𑽔',       //KAWI DIGIT FOUR
	'꧕' : '𑽕',       //KAWI DIGIT FIVE
	'꧖' : '𑽖',       //KAWI DIGIT SIX
	'꧗' : '𑽗',       //KAWI DIGIT SEVEN
	'꧘' : '𑽘',       //KAWI DIGIT EIGHT
	'꧙' : '𑽙',       //KAWI DIGIT NINE
}

const javaKawiDictionary:{ [id: string]: string; } = Object.assign(signs, independentVowels, consonants, dependentVowelSigns, viramas, punctuations, digits);

const whitespaces = new Set([" ", "\u200b", "\t", "\n"]);

function isWignyan(c:string) : boolean { return c == 'ꦃ' }
function isPangkon(c:string) : boolean { return c == '꧀' }

function convert(input:string):string {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        var c = input[i];

        if (isPangkon(c))
        {
            if (i == input.length - 1)
            {
                result.push('𑽁'); // push KAWI SIGN KILLER
                continue;
            }

            if (i + 1 <= input.length && whitespaces.has(input[i + 1]))
            {
                result.push('𑽁'); // push KAWI SIGN KILLER
                continue;
            }
        }

		if (isWignyan(c) && i < input.length - 1)
        {
			result.push('𑼲𑽂'); // push KAWI HA + KAWI CONJOINER
			continue;
		}

        // check two letters
        if (i + 1 <= input.length)
        {
            var cc = c + input[i + 1];

            if (javaKawiDictionary.hasOwnProperty(cc))
            {
                result.push(javaKawiDictionary[cc]);
                i++;
                continue;
            }
        }
        
        if (javaKawiDictionary.hasOwnProperty(c))
            result.push(javaKawiDictionary[c]);
        else
            result.push(c);
	}

    return result.join("");
}

export { convert };