<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import { convert as latinJavaConvert } from "$lib/scripts/latinjava";
import { convert as latinKawiConvert } from "$lib/scripts/latinkawi";
import { convert as javaLatinConvert } from "$lib/scripts/javalatin";
import { convert as javaKawiConvert } from "$lib/scripts/javakawi";
import { javaDefaultKeyboard, javaCapslockKeyboard } from "$lib/scripts/javakeyboard";
import WidgetFeedback from "./WidgetFeedback.svelte";
import WidgetRecomendation from "./WidgetRecomendation.svelte";
import copySvg from '@material-symbols/svg-400/outlined/content_copy.svg';
import keyCapslockSvg from '@material-symbols/svg-400/outlined/keyboard_capslock.svg';
import keyReturnSvg from '@material-symbols/svg-400/outlined/keyboard_return.svg';
import keyBackspaceSvg from '@material-symbols/svg-400/outlined/backspace.svg';
import keySpaceSvg from '@material-symbols/svg-400/outlined/space_bar.svg';

let input:string = "";
let output:string = "";

let textareaEl:HTMLTextAreaElement;
let isPepetTypeMode:boolean = true;
let isIgnoreSpace:boolean = true;
let isDiphtong:boolean = true;
let isSwara:boolean = true;
let isMurda:boolean = false;
let isVirtualKeyboardActive:boolean = false;
let isCapslock:boolean = false;
let copyTimer: ReturnType<typeof setTimeout>;

const javaSpecialCharacters = [
    {char: 'ā', title: 'ꦴ (Tarung)'},
    {char: 'ī', title: 'ꦷ (Dirga Melik)'},
    {char: 'ū', title: 'ꦹ (Dirga Mendhut)'},
    {char: 'ê', title: 'ꦼ (Pêpêt)'},
    {char: 'bh', title: 'ꦨ (Ba Murda)'},
    {char: 'ch', title: 'ꦖ (Ca Mahaprana)'},
    {char: 'ḍ', title: 'ꦝ (Dha)'},
    {char: 'ḍh', title: 'ꦞ (Dha Mahaprana)'},
    {char: 'jh', title: 'ꦙ (Ja Mahaprana)'},
    {char: 'ṛ', title: 'ꦬ (Ra Agung)'},
    {char: 'ṣ', title: 'ꦰ (Sa Mahaprana)'},
    {char: 'ś', title: 'ꦯ (Sa Murda)'},
    {char: 'ṭ', title: 'ꦡ (Ta Murda)'},
    {char: 'ṭh', title: 'ꦜ (Tha Mahaprana)'},
    {char: 'ṇ', title: 'ꦟ (Na Murda)'},
    {char: 'ñ', title: 'ꦚ (Nya)'},
    {char: 'ŋ', title: 'ꦔ (Nga)'},
    {char: 'q', title: 'ꦐ (Ka Sasak)'}
];

// TODO: update title
const kawiSpecialCharacters = [
    {char: 'ā', title: 'ꦴ (Tarung)'},
    {char: 'ī', title: 'ꦷ (Dirga Melik)'},
    {char: 'ū', title: 'ꦹ (Dirga Mendhut)'},
    {char: 'ê', title: 'ꦼ (Pêpêt)'},
    {char: 'bh', title: 'ꦨ (Ba Murda)'},
    {char: 'ch', title: 'ꦖ (Ca Mahaprana)'},
    {char: 'ḍ', title: 'ꦝ (Dha)'},
    {char: 'ḍh', title: 'ꦞ (Dha Mahaprana)'},
    {char: 'jh', title: 'ꦙ (Ja Mahaprana)'},
    {char: 'ṣ', title: 'ꦰ (Sa Mahaprana)'},
    {char: 'ś', title: 'ꦯ (Sa Murda)'},
    {char: 'ṭ', title: 'ꦡ (Ta Murda)'},
    {char: 'ṭh', title: 'ꦜ (Tha Mahaprana)'},
    {char: 'ṇ', title: 'ꦟ (Na Murda)'},
    {char: 'ñ', title: 'ꦚ (Nya)'},
    {char: 'ŋ', title: 'ꦔ (Nga)'},
];

let javaKeyboard = isCapslock ? javaCapslockKeyboard : javaDefaultKeyboard;
var javaKeyboardDictionary:{ [id: string]: string; } = { };
javaDefaultKeyboard.forEach(x => {
    javaKeyboardDictionary[x[0]] = x[1];
});
javaCapslockKeyboard.forEach(x => {
    javaKeyboardDictionary[x[0]] = x[1];
});


let tooltipEl:HTMLElement;
let tooltipMessage:string = "";

export let method:ConverterMethod = ConverterMethod.None;

function inputTitle():string
{
    switch(method) { 
        case ConverterMethod.LatinToJava:
        case ConverterMethod.LatinToKawi:
            return "Aksara Latin"
        case ConverterMethod.JavaToKawi: 
        case ConverterMethod.JavaToLatin: 
            return "Aksara Jawa"
    } 

    return "Aksara Undefined";
}

function outputTitle():string
{
    switch(method) { 
        case ConverterMethod.LatinToJava: 
            return "Aksara Jawa";
        case ConverterMethod.JavaToLatin: 
            return "Aksara Latin";
        case ConverterMethod.JavaToKawi:
        case ConverterMethod.LatinToKawi:
            return "Aksara Kawi";
    }

    return "Aksara Undefined";
}

function onInputUpdate()
{
    switch(method) { 
        case ConverterMethod.LatinToJava: 
        { 
            output = latinJavaConvert(input, isIgnoreSpace, isDiphtong, isSwara, isMurda);
            break; 
        }
        case ConverterMethod.LatinToKawi: 
        { 
            output = latinKawiConvert(input, isIgnoreSpace);
            break; 
        }
        case ConverterMethod.JavaToLatin: 
        {
            output = javaLatinConvert(input) 
            break; 
        }
        case ConverterMethod.JavaToKawi: 
        {
            output = javaKawiConvert(input) 
            break; 
        }
    } 
}

function onInputKeyDown(e:KeyboardEvent) {
    if (e.ctrlKey) return;

    if (method == ConverterMethod.LatinToJava || method == ConverterMethod.LatinToKawi) 
    {
        if(isPepetTypeMode == false) return;

        if(e.key === "X") {
            insertToTextarea("Ê");
            onInputUpdate();
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        if(e.key === "x") {
            insertToTextarea("ê");
            onInputUpdate();
            e.preventDefault();
            e.stopPropagation();
        }

        return;
    }

    if (method == ConverterMethod.JavaToLatin || method == ConverterMethod.JavaToKawi) 
    {
        if(isVirtualKeyboardActive == false) return;

        isCapslock = e.getModifierState("CapsLock");
        javaKeyboard = isCapslock ? javaCapslockKeyboard : javaDefaultKeyboard;

        if (javaKeyboardDictionary.hasOwnProperty(e.key))
        {
            insertToTextarea(javaKeyboardDictionary[e.key]);
            onInputUpdate();
            e.preventDefault();
            e.stopPropagation();
        }
        
        return;
    }
}

function onDocumentKeyDown(e:KeyboardEvent) {
    if (e.key == "CapsLock")
    {
        isCapslock = e.getModifierState("CapsLock");
        javaKeyboard = isCapslock ? javaCapslockKeyboard : javaDefaultKeyboard;
    }

    if (e.key == "Shift")
    {
        isCapslock = e.getModifierState("CapsLock") ? !e.getModifierState("Shift") : e.getModifierState("Shift");
        javaKeyboard = isCapslock ? javaCapslockKeyboard : javaDefaultKeyboard;
    }
}

function onDocumentKeyUp(e:KeyboardEvent) {
    if (e.key == "Shift")
    {
        isCapslock = e.getModifierState("CapsLock") ? !e.getModifierState("Shift") : e.getModifierState("Shift");
        javaKeyboard = isCapslock ? javaCapslockKeyboard : javaDefaultKeyboard;
    }
}

function insertToTextarea(str:string) {
    var nextCursorPos = textareaEl.selectionStart + str.length;
    textareaEl.value = textareaEl.value.substring(0, textareaEl.selectionStart) + str + textareaEl.value.substring(textareaEl.selectionEnd, textareaEl.value.length);
    input = textareaEl.value;
    setSelectionRange(textareaEl, nextCursorPos, nextCursorPos);
}

function onPressBackspace() {
    if (textareaEl.selectionStart == 0 && textareaEl.selectionEnd == 0) 
    {
        setSelectionRange(textareaEl, textareaEl.selectionStart, textareaEl.selectionEnd);
        return;
    }

    var selectionLength = textareaEl.selectionStart - textareaEl.selectionEnd;
    var nextCursorPos = selectionLength == 0 ? textareaEl.selectionStart - 1 : textareaEl.selectionStart;
    textareaEl.value = textareaEl.value.substring(0, nextCursorPos) + textareaEl.value.substring(textareaEl.selectionEnd, textareaEl.value.length);
    input = textareaEl.value;
    setSelectionRange(textareaEl, nextCursorPos, nextCursorPos);
}

function toggleCapslock()
{
    isCapslock = !isCapslock;
    javaKeyboard = isCapslock ? javaCapslockKeyboard : javaDefaultKeyboard;
    setSelectionRange(textareaEl, textareaEl.selectionStart, textareaEl.selectionEnd);
}

function setSelectionRange(element:HTMLTextAreaElement, selectionStart:number, selectionEnd:number)
{
    const isFocused = (document.activeElement === element);
    if (!isFocused)
    {
        element.readOnly = true;
        element.focus();
    }
    
    element.setSelectionRange(selectionStart, selectionEnd);
    
    if (!isFocused)
        setTimeout(() => element.readOnly = false, 1);
}

function copyToClipboard(text:string) {
    navigator.clipboard.writeText(text)
        .then(_ => showCopyTooltip("Berhasil disalin"))
        .catch(_ => showCopyTooltip("Gagal disalin"));
}

function showCopyTooltip(message:string)
{
    tooltipMessage = message;
    tooltipEl.classList.add("show");
}

function hideCopyTooltip()
{
    tooltipEl.classList.remove("show");
}

function onClickCopyButton()
{
    clearTimeout(copyTimer);
    copyToClipboard(output);
    copyTimer = setTimeout(hideCopyTooltip, 2000);
}


</script>

<svelte:document on:keydown={ onDocumentKeyDown } on:keyup={ onDocumentKeyUp } />

<section class="converter">
    <div class="row">
        <div class="col-12 converter-input">
            <h4>{ inputTitle() }</h4>
            <textarea bind:this={ textareaEl } bind:value={input} on:input={ onInputUpdate } on:keydown={ onInputKeyDown }></textarea>
    
            {#if method == ConverterMethod.LatinToJava || method == ConverterMethod.LatinToKawi }
            <div style="margin-block-start: 1em;">
                <label style="display:inline-block;margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isPepetTypeMode }>
                    Mode Ketik Pêpêt
                </label>

                <label style="display:inline-block;margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isIgnoreSpace } on:change={ onInputUpdate }>
                    Abaikan Spasi
                </label>
    
                {#if method == ConverterMethod.LatinToJava }
                <label style="display:inline-block;margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isDiphtong } on:change={ onInputUpdate }>
                    Diftong
                </label>
    
                <label style="display:inline-block;margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isSwara } on:change={ onInputUpdate }>
                    Aksara Swara
                </label>

                <label style="display:inline-block;margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isMurda } on:change={ onInputUpdate }>
                    Aksara Murda
                </label>
                {/if}
            </div>
            
            <h5>Tombol Karakter Spesial</h5>
            <div class="virtual-keyboard">
                {#if method == ConverterMethod.LatinToJava }
                {#each javaSpecialCharacters as specialChar}
                <button class="button outline icon-only" title="{specialChar.title}" on:click= { () => { insertToTextarea(specialChar.char); onInputUpdate(); } }>{specialChar.char}</button>
                {/each}
                {/if}
                
                {#if method == ConverterMethod.LatinToKawi }
                {#each kawiSpecialCharacters as specialChar}
                <button class="button outline icon-only" on:click= { () => { insertToTextarea(specialChar.char); onInputUpdate(); } }>{specialChar.char}</button>
                {/each}
                {/if}
            </div>
            {/if}
    
            {#if method == ConverterMethod.JavaToLatin || method == ConverterMethod.JavaToKawi }
            <div style="margin-block-start: 1em;">
                <label style="display:inline-block;margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isVirtualKeyboardActive }>
                    Aktifkan Keyboard Virtual Aksara Jawa
                </label>
            </div>
                {#if isVirtualKeyboardActive }
                <div class="virtual-keyboard layout">
                    {#each javaKeyboard as key, i}<button class="button outline icon-only" on:click= { () => { insertToTextarea(key[1]); onInputUpdate(); } }>{key[1]}</button>{#if i == 12 || i == 25}<br/>{/if}{#if i == 36}<button class="button outline icon-only" style="width: 12%;font-size: 1.25em;" on:click= { () => { insertToTextarea('\n'); onInputUpdate(); } }> { @html keyReturnSvg } </button><br/><button class="button activatable outline icon-only" class:active={ isCapslock } style="width: 12%;font-size: 1.25em;" on:dblclick={ toggleCapslock } on:click={ toggleCapslock }>{ @html keyCapslockSvg }</button>{/if}{/each}<button class="button outline icon-only" style="width: 12%;font-size: 1.25em;" on:click={ () => { onPressBackspace(); onInputUpdate(); } }> { @html keyBackspaceSvg } </button><br/><button class="button outline icon-only" style="width: 50%;font-size: 1.25em;" on:click= { () => { insertToTextarea(' '); onInputUpdate(); } }>{ @html keySpaceSvg }</button>
                </div>
                {/if}
            {/if}
        </div>
        <div class="col-12 converter-output">
            <h4>{ outputTitle() }</h4>
                <div class="content">
                <span>{ output }</span>
                <div class="action-button-area">
                    <button bind:this={ tooltipEl } class="button copy icon-only clear tooltip" data-text={ tooltipMessage } on:click={ onClickCopyButton }>
                        { @html copySvg }
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

{#if method == ConverterMethod.LatinToJava || method == ConverterMethod.LatinToKawi}
<section class="row">
    <div class="col">
        <h4>Keterangan Penggunaan</h4>
        <ul class="list-unstyled">
            <li>
                <h5>Mode Ketik Pêpêt</h5>
                {#if method == ConverterMethod.LatinToJava }
                <p>Saat diaktifkan, tombol x pada keyboard akan digantikan fungsinya untuk mengetikkan huruf ê yang merepresentasikan Pêpêt (ꦼ) dalam aksara Jawa. Huruf ê sendiri menghasilkan bunyi seperti huruf e pada kata "enam".</p>
                {/if}
                {#if method == ConverterMethod.LatinToKawi}
                <p>Saat diaktifkan, tombol x pada keyboard akan digantikan fungsinya untuk mengetikkan huruf ê yang merepresentasikan Pêpêt (𑽀◌) dalam aksara Kawi. Huruf ê sendiri menghasilkan bunyi seperti huruf e pada kata "enam".</p>
                {/if}
            </li>
            <li>
                <h5>Abaikan Spasi</h5>
                {#if method == ConverterMethod.LatinToJava }
                <p>Saat diaktifkan, proses konversi akan mengabaikan spasi dari kolom masukan. Pada dasarnya, aksara Jawa tidak memiliki spasi pada antarkatanya. Meskipun begitu, spasi masih dapat digunakan untuk memperjelas pemisahan kata.</p>                
                {/if}
                {#if method == ConverterMethod.LatinToKawi}
                <p>Saat diaktifkan, proses konversi akan mengabaikan spasi dari kolom masukan. Pada dasarnya, aksara Kawi tidak memiliki spasi pada antarkatanya.</p>
                {/if}
            </li>
            {#if method == ConverterMethod.LatinToJava }
            <li>
                <h5>Diftong</h5>
                <p>Saat diaktifkan, gugus vokal 'ai', 'au', 'êu' dan vokal panjang 'aa', 'ii', 'uu' akan diubah menjadi karakter spesial aksara jawa, yakni ꦻ (Dirga Mure) untuk 'ai', ꦻꦴ (Dirga Mure Tarung) untuk 'au', ꦴ (Tarung) untuk 'aa', ꦷ (Dirga Mêlik) untuk 'ii', ꦹ (Dirga Mêndhut) untuk 'uu', ꦋ (Nga Lêlêt Raswadi) untuk 'lêu', dan ꦉꦴ (Pa Cêrêt-Tarung) untuk 'rêu'.</p>
            </li>
            <li>
                <h5>Aksara Swara</h5>
                <p>Saat diaktifkan, vokal yang berdiri sendiri (tidak memiliki konsonan di awal suku katanya) akan diubah menjadi aksara Swara. 
                Aksara ini digunakan untuk menuliskan nama atau istilah yang pelafalannya perlu diperjelas — menggantikan ꦲ (aksara Ha) yang memiliki pelafalan ambigu (bisa dibaca a/ha).</p>                
            </li>
            <li>
                <h5>Aksara Murda</h5>
                <p>Saat diaktifkan, aksara pertama dari aksara-aksara ꦤ, ꦏ, ꦠ, ꦱ, ꦥ, ꦘ, ꦒ, ꦧ akan diubah ke dalam bentuk aksara Murda-nya ꦟ, ꦑ, ꦡ, ꦯ, ꦦ, ꦟ, ꦓ, ꦨ.
                Aksara ini digunakan sebagai penanda untuk penulisan nama, gelar, atau tempat.</p>
            </li>
            <li>
                <h5>Tombol Karakter Spesial</h5>
                <p>Berisikan tombol-tombol untuk mengetikkan karakter-karakter spesial yang digunakan untuk merepresentasikan huruf-huruf aksara jawa yang tidak dapat diwakili oleh alfabet A-Z.</p>
                <p>Berikut karakter-karakter spesial yang digunakan dalam konverter ini beserta hasil konversinya :</p>
                <ul style="margin-block-end: 1em">
                    <li>ā menghasilkan ꦴ (Tarung)</li>  
                    <li>ī menghasilkan ꦷ (Dirga Mêlik)</li>  
                    <li>ū menghasilkan ꦹ (Dirga Mêndhut)</li>
                    <li>ê menghasilkan  ꦼ (Pêpêt)</li>
                    <li>bh menghasilkan ꦨ (Ba Murda)</li>
                    <li>ch menghasilkan ꦖ (Ca Mahaprana)</li>
                    <li>ḍ menghasilkan ꦝ (Dha)</li>  
                    <li>ḍh menghasilkan ꦞ (Dha Mahaprana)</li> 
                    <li>jh menghasilkan ꦙ (Ja Mahaprana)</li>
                    <li>ṛ menghasilkan ꦬ (Ra Agung)</li>
                    <li>ṣ menghasilkan ꦰ (Sa Mahaprana)</li>
                    <li>ś menghasilkan ꦯ (Sa Murda)</li>
                    <li>ṭ menghasilkan ꦡ (Ta Murda)</li> 
                    <li>ṭh menghasilkan ꦜ (Tha Mahaprana)</li> 
                    <li>ṇ menghasilkan ꦟ (Na Murda)</li> 
                    <li>ñ menghasilkan ꦚ (Nya)</li>
                    <li>ŋ menghasilkan ꦔ (Nga)</li>
                    <li>q menghasilkan ꦐ (Ka Sasak)</li> 
                </ul>
                <p>Karakter spesial ñ dan ŋ sama dengan ny dan ng dalam bahasa indonesia</p>
            </li>
            {/if}
            {#if method == ConverterMethod.LatinToKawi }
            <li>
                <h5>Tombol Karakter Spesial</h5>
                <p>Berisikan tombol-tombol untuk mengetikkan karakter-karakter spesial yang digunakan untuk merepresentasikan huruf-huruf aksara kawi yang tidak dapat diwakili oleh alfabet A-Z.</p>
            </li>
            {/if}
        </ul>
    </div>
</section>
{/if}

<section class="row" style="flex: 1 1 auto;">
    <WidgetRecomendation class="col-6" />
    <WidgetFeedback class="col-6" />
</section>