<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import { convert as latinJavaConvert } from "$lib/scripts/latinjava";
import { convert as javaLatinConvert } from "$lib/scripts/javalatin";
import { convert as javaKawiConvert } from "$lib/scripts/javakawi";

let input:string = "";
let output:string = "";

let textareaEl:HTMLTextAreaElement;
let isPepetTypeMode:boolean = true;
let isIgnoreSpace:boolean = true;
let isMurda:boolean = false;
let isDiphtong:boolean = false;
let isShowVirtualKeyboard:boolean = false;
let isCapslock:boolean = false;

const latinToJavaSpecialCharacters = ['Ê', 'ê', 'ā', 'ī', 'ū', 'ḍ', 'ḍh', 'ṣ', 'ś', 'ṭ', 'ṭh', 'ṇ', 'ñ', 'ŋ'];
const javaDefaultKeyboardCharacters = ['꧇','꧑','꧒','꧓','꧔','꧕','꧖','꧗','꧘','꧙','꧐','꦳','ꦀ','꧀','ꦮ','ꦺ','ꦫ','ꦠ','ꦪ','ꦸ','ꦶ','ꦺꦴ','ꦥ','ꦁ','ꦂ','︀','ꦔ','ꦱ','ꦢ','ꦉ','ꦒ','ꦲ','ꦗ','ꦏ','ꦭ','ꦝ','ꦛ','ꦚ','ꦼ','ꦕ','ꦊ','ꦧ','ꦤ','ꦩ','꧈','꧉','꧋'];
const javaCapslockKeyboardCharacters = ['꧊','ꦵ','ꧏ','꧆','꧞','꧟','꧃','꧄','꧅','꧌','꧍','ꦷ','ꦙ','ꦐ','ꦻ','ꦌ','ꦿ','ꦡ','ꦾ','ꦈ','ꦆ','ꦎ','ꦦ','꧁','꧂','​','ꦄ','ꦯ','ꦣ','ꦽ','ꦓ','ꦃ','ꦘ','ꦑ','ꦴ','ꦞ','ꦜ','ꦰ','ꦬ','ꦖ','ꦋ','ꦨ','ꦟ','ꦍ','ꦹ','ꦅ','ꦇ'];
let javaKeyboardCharacters = isCapslock ? javaCapslockKeyboardCharacters : javaDefaultKeyboardCharacters;

let tooltipEl:HTMLElement;
let tooltipMessage:string = "";

export let method:ConverterMethod = ConverterMethod.None;

function inputTitle():string
{
    switch(method) { 
        case ConverterMethod.LatinToJava:
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
            return "Aksara Kawi";
    }

    return "Aksara Undefined";
}

function onInputUpdate()
{
    switch(method) { 
        case ConverterMethod.LatinToJava: 
        { 
            output = latinJavaConvert(input, isIgnoreSpace, isMurda, isDiphtong);
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
    if (method != ConverterMethod.LatinToJava) return;
    if(isPepetTypeMode == false) return;

    if(e.shiftKey && e.key === "X") {
        insertToTextarea("Ê");
        e.preventDefault();
        e.stopPropagation();
        return;
    }

    if(e.key === "x") {
        insertToTextarea("ê");
        e.preventDefault();
        e.stopPropagation();
    }
}

function insertToTextarea(str:string) {
    // insert character
    var nextCursorPos = textareaEl.selectionStart + str.length;
    textareaEl.value = textareaEl.value.substring(0, textareaEl.selectionStart) + str + textareaEl.value.substring(textareaEl.selectionEnd, textareaEl.value.length);
    input = textareaEl.value;

    // move cursor
    textareaEl.focus();
    textareaEl.setSelectionRange(nextCursorPos, nextCursorPos);
}

function onPressBackspace() {
    if (textareaEl.selectionStart == 0 && textareaEl.selectionEnd == 0) 
    {
        textareaEl.focus();
        textareaEl.setSelectionRange(textareaEl.selectionStart, textareaEl.selectionEnd);
        return;
    }

    var selectionLength = textareaEl.selectionStart - textareaEl.selectionEnd;
    var nextCursorPos = selectionLength == 0 ? textareaEl.selectionStart - 1 : textareaEl.selectionStart;
    textareaEl.value = textareaEl.value.substring(0, nextCursorPos) + textareaEl.value.substring(textareaEl.selectionEnd, textareaEl.value.length);
    input = textareaEl.value;

    textareaEl.focus();
    textareaEl.setSelectionRange(nextCursorPos, nextCursorPos);
}

function toggleCapslock()
{
    isCapslock = !isCapslock;
    javaKeyboardCharacters = isCapslock ? javaCapslockKeyboardCharacters : javaDefaultKeyboardCharacters;
}

function copyToClipboard(text:string) {
    navigator.clipboard.writeText(text)
        .then(res => {
            tooltipMessage = "Berhasil disalin";
            tooltipEl.classList.add("show");
        }).catch(error => {
            tooltipMessage = "Gagal disalin";
            tooltipEl.classList.add("show");
        });
}

function onClickCopyButton()
{
    copyToClipboard(output);
}

function onPointerLeaveCopyButton()
{
    tooltipEl.classList.remove("show");
}
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>

<section class="converter">
    <div class="row">
        <div class="col-12 converter-input">
            <h4>{ inputTitle() }</h4>
            <textarea bind:this={ textareaEl } bind:value={input} on:input={ onInputUpdate } on:keydown={ onInputKeyDown }></textarea>
    
            {#if method == ConverterMethod.LatinToJava }
            <div style="margin-block-start: 1em;">
                <label style="margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isPepetTypeMode }>
                    Mode Ketik Pepet
                </label>
    
                <label style="margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isIgnoreSpace } on:change={ onInputUpdate }>
                    Abaikan Spasi
                </label>
    
                <label style="margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isMurda } on:change={ onInputUpdate }>
                    Murda
                </label>
    
                <label style="margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isDiphtong } on:change={ onInputUpdate }>
                    Diftong
                </label>
            </div>
            
            <h5>Tombol Karakter Spesial</h5>
            <div class="virtual-keyboard">
                {#each latinToJavaSpecialCharacters as char}
                <button class="button outline icon-only" on:click= { () => { insertToTextarea(char); onInputUpdate(); } }>{char}</button>
                {/each}
            </div>
            {/if}
    
            {#if method == ConverterMethod.JavaToLatin || method == ConverterMethod.JavaToKawi }
            <div style="margin-block-start: 1em;">
                <label style="margin-right: .5em;">
                    <input type="checkbox" role="switch" bind:checked={ isShowVirtualKeyboard }>
                    Tampilkan Keyboard Aksara Jawa
                </label>
            </div>
                {#if isShowVirtualKeyboard }
                <div class="virtual-keyboard layout">
                    {#each javaKeyboardCharacters as char, i}
                    <button class="button outline icon-only" on:click= { () => { insertToTextarea(char); onInputUpdate(); } }>{char}</button>
                        {#if i == 12}
                        <button class="button outline icon-only material-symbols-outlined" style="width: 10%;font-size: 1.25em;" on:click={ () => { onPressBackspace(); onInputUpdate(); } }>backspace</button>
                        <br/>
                        {/if}
                        {#if i == 25}
                        <br/>
                        <button class="button activatable outline icon-only material-symbols-outlined" class:active={ isCapslock } style="width: 10%;font-size: 1.25em;" on:dblclick={ toggleCapslock } on:click={ toggleCapslock }>keyboard_capslock</button>
                        {/if}
                        {#if i == 36}
                        <button class="button outline icon-only material-symbols-outlined" style="width: 12%;font-size: 1.25em;" on:click= { () => { insertToTextarea('\n'); onInputUpdate(); } }>keyboard_return</button>
                        <br/>
                        {/if}
                    {/each}
                    <br/>
                    <button class="button outline icon-only material-symbols-outlined" style="width: 50%;font-size: 1.25em;" on:click= { () => { insertToTextarea(' '); onInputUpdate(); } }>space_bar</button>
                </div>
                {/if}
            {/if}
        </div>
        <div class="col-12 converter-output">
            <h4>{ outputTitle() }</h4>
                <div class="content">
                <span>{ output }</span>
                <div class="action-button-area">
                    <button bind:this={ tooltipEl } class="button copy icon-only clear tooltip" data-text={ tooltipMessage } on:click={ onClickCopyButton } on:pointerleave={ onPointerLeaveCopyButton }>
                        <span class="material-symbols-outlined">content_copy</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

{#if method == ConverterMethod.LatinToJava }
<section class="row">
    <div class="col">
        <h4>Keterangan Penggunaan</h4>
        <ul class="list-unstyled">
            <li>
                <h5>Mode Ketik Pepet</h5>
                <p>Saat diaktifkan, tombol x pada keyboard akan digantikan fungsinya untuk mengetikkan huruf ê yang merepresentasikan ꦼ (Pepet) dalam aksara jawa. 
                Huruf ê sendiri menghasilkan bunyi seperti huruf e pada kata "enam".</p>
            </li>
            <li>
                <h5>Abaikan Spasi</h5>
                <p>Saat diaktifkan, proses konversi akan mengabaikan spasi dari kolom masukan. Sebaliknya jika dinonaktifkan, spasi akan dikonversikan menjadi <i>zero width space</i> alias spasi yang tidak terlihat.</p>                
            </li>
            <li>
                <h5>Murda</h5>
                <p>Saat diaktifkan, aksara pertama dari aksara-aksara ꦤ, ꦏ, ꦠ, ꦱ, ꦥ, ꦘ, ꦒ, ꦧ akan diubah ke dalam bentuk aksara murda-nya ꦟ, ꦑ, ꦡ, ꦯ, ꦦ, ꦟ, ꦓ, ꦨ.
                Dalam aksara jawa, aksara murda digunakan layaknya huruf kapital dalam bahasa Indonesia dan dipakai khusus untuk penulisan nama, gelar, atau tempat.</p>
            </li>
            <li>
                <h5>Diftong</h5>
                <p>Saat diaktifkan, gugus vokal 'ai', 'au' dan vokal panjang 'aa', 'ii', 'uu' akan diubah menjadi karakter spesial aksara jawa, yakni ꦻ (Dirga Mure) untuk 'ai', ꦻꦴ (Dirga Mure Tarung) untuk 'au', ꦴ (Tarung) untuk 'aa', ꦷ (Dirga Melik) untuk 'ii', dan ꦹ (Dirga Mendhut) untuk 'uu'.</p>
            </li>
            <li>
                <h5>Tombol Karakter Spesial</h5>
                <p>Berisikan tombol-tombol untuk mengetikkan karakter-karakter spesial yang digunakan untuk merepresentasikan huruf-huruf aksara jawa yang tidak dapat diwakili oleh alfabet A-Z.</p>
                <p>Berikut karakter-karakter spesial yang digunakan dalam konverter ini beserta hasil konversinya :</p>
                <ul style="margin-block-end: 1em">
                    <li>Ê menghasilkan ꦄꦼ (Swara Ê)</li>  
                    <li>ê menghasilkan  ꦼ (Pepet)</li>
                    <li>ā menghasilkan ꦴ (Tarung)</li>  
                    <li>ī menghasilkan ꦷ (Dirga Melik)</li>  
                    <li>ū menghasilkan ꦹ (Dirga Mendhut)</li>
                    <li>ḍ menghasilkan ꦝ (Dha)</li>  
                    <li>ḍh menghasilkan ꦞ (Dha Mahaprana)</li> 
                    <li>ṣ menghasilkan ꦰ (Sa Mahaprana)</li>
                    <li>ś menghasilkan ꦯ (Sa Murda)</li>
                    <li>ṭ menghasilkan ꦡ (Ta Murda)</li> 
                    <li>ṭh menghasilkan ꦜ (Tha Mahaprana)</li> 
                    <li>ṇ menghasilkan ꦟ (Na Murda)</li> 
                    <li>ñ menghasilkan ꦚ (Nya)</li>
                    <li>ŋ menghasilkan ꦔ (Nga)</li> 
                </ul>
                <p>Karakter spesial ñ dan ŋ sama dengan ny dan ng dalam bahasa indonesia</p>
            </li>
        </ul>
    </div>
</section>
{/if}