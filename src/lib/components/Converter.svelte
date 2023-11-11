<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import { convert as latinJavaConvert } from "$lib/scripts/latinjava";
import { convert as javaKawiConvert } from "$lib/scripts/javakawi";
import CopyIcon from "./CopyIcon.svelte";

let input:string = "";
let output:string = "";

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

function onTextAreaInput()
{
    switch(method) { 
        case ConverterMethod.LatinToJava: 
        { 
            output = latinJavaConvert(input);
            break; 
        } 
        case ConverterMethod.JavaToKawi: 
        {
            output = javaKawiConvert(input) 
            break; 
        }
    } 
}

function copyToClipboard(text:string) {
    navigator.clipboard.writeText(text)
        .then(res => {
            tooltipMessage = "Berhasil disalin";
            tooltipEl.classList.remove("is-hidden");
        }).catch(error => {
            tooltipMessage = "Gagal disalin";
            tooltipEl.classList.remove("is-hidden");
        });
}

function onClickCopyButton()
{
    copyToClipboard(output);
}

function onPointerLeaveCopyButton()
{
    tooltipEl.classList.add("is-hidden");
}
</script>

<section class="row converter">
    <div class="col converter-input">
        <h3>{ inputTitle() }</h3>
        <textarea bind:value={input} on:input={ onTextAreaInput }></textarea>
    </div>
    <div class="col converter-output">
        <h3>{ outputTitle() }</h3>
            <div class="content">
            <span>{ output }</span>
            <div class="action-button-area">
                <button bind:this={ tooltipEl } class="button copy icon-only clear tooltip is-hidden" data-text={ tooltipMessage } on:click={ onClickCopyButton } on:pointerleave={ onPointerLeaveCopyButton }>
                    <CopyIcon />
                </button>
            </div>
        </div>
    </div>
</section>