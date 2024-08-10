<script>
    const steps = 5;
    let step = 1;
    let config = {};
</script>

<div class="min-h-[300px] not-content">
    {#if step = 1}
        <div class="flex flex-col md:flex-row justify-center items-center min-h-[300px] gap-6">
            <img src="/zumito-hi.jpg" alt="Zumito saing hi" class="max-w-[50%]">
            <div class="px-3.5 py-2 bg-pink-100 rounded-3xl rounded-tl-none justify-start items-center gap-3 inline-flex">
                <h5 class="text-gray-900 text-sm font-normal leading-snug">Let's make a bot!</h5>
            </div>
        </div>
    {/if}
</div>

<div class="w-full bg-pink-100 border-2 border-pink-600 rounded-md not-content">
    <div class="flex items-center justify-between gap-3 p-3 bg-white rounded items-center">

        <div>
            {#if step != 1}
                <button on:click={() => step--} class="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-pink-600 cursor-pointer">
                    <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                        <path d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Back
                </button>
            {/if}
        </div>
        
        <ul class="flex gap-1 items-center list-none">
            <li class="text-lg font-medium text-gray-900">{step}</li>
            <li class="text-base font-normal text-gray-900">/</li>
            <li class="text-base font-normal text-gray-600">{steps}</li>
        </ul>
        
        <div>
            {#if step != steps}
                <button on:click={() => step++} class="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-pink-600 mt-0 cursor-pointer">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                        <path d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            {/if}
        </div>
    </div>
</div>
                                        
