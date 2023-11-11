<script lang="typescript">
import { convert } from "$lib/javakawi";
import CopyIcon from "./CopyIcon.svelte";

let input:string = "";
let output:string = "";
let tooltipMessage:string = "";
export let tooltipEl:HTMLElement;

function onTextAreaInput()
{
    output = convert(input) 
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
        <h3>Aksara Jawa</h3>
        <textarea bind:value={input} on:input={ onTextAreaInput }></textarea>
    </div>
    <div class="col converter-output">
        <h3>Aksara Kawi</h3>
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