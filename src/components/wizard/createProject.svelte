<script>

    const steps = 5;
    let step = 1;
    let config = {
        name: '',
        discord: {
            token: '',
            clientId: '',
            clientSecret: '',
        },
        prefix: {
            enabled: false,
            prefix: 'z-'
        },
        database: {
            type: '',
            url: 'mongo://user:password@host:27017'
        }
    };

    const parseProjectName = (e) => {
        config.name = config.name.replace(' ', '-').toLowerCase();
        config = config;
    }
</script>

<div class="not-content min-h-[400px]">
    {#if step == 1}
        <div class="flex min-h-[400px] flex-col items-center justify-center gap-6 md:flex-row">
            <img src="/zumito-hi.jpg" alt="Zumito saing hi" class="max-w-[50%]">
            <div class="inline-flex items-center justify-start gap-3 rounded-3xl rounded-tl-none bg-pink-100 px-3.5 py-2">
                <h5 class="text-sm font-normal leading-snug text-gray-900">Let's make a bot!</h5>
            </div>
        </div>
    {:else if step == 2}
        <div class="flex min-h-[400px] w-full flex-col justify-center">
            <label for="name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Project name:</label>
            <input type="text" id="name" bind:value={config.name} on:keyup={parseProjectName} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-pink-300 focus:ring-pink-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"  required />

            <label for="token" class="mb-2 mt-6 block text-sm font-medium text-gray-900 dark:text-white">Discord token:</label>
            <input type="text" id="token" bind:value={config.discord.token} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-pink-300 focus:ring-pink-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"  required />
            <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Used to allow bot connect with Discord API.</p>

            <label for="clientId" class="mb-2 mt-6 block text-sm font-medium text-gray-900 dark:text-white">Discord client id:</label>
            <input type="text" id="clientId" bind:value={config.discord.clientId} on:keyup={parseProjectName} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-pink-300 focus:ring-pink-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"  required />
            <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Used to register and update slash commands throught Discord API</p>

            <label for="clientSecret" class="mb-2 mt-6 block text-sm font-medium text-gray-900 dark:text-white">Discord client secret:</label>
            <input type="text" id="clientSecret" bind:value={config.discord.clientSecret} on:keyup={parseProjectName} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-pink-300 focus:ring-pink-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"  required />
            <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">(Optional) Used for authenticate users on your api/website.</p>
        </div>

    {:else if step == 3}
        <div class="flex min-h-[400px] w-full flex-col justify-center">

            <div class="mb-5 flex items-start">
                <div class="flex h-5 items-center" on:click={() => {config.prefix.enabled = !config.prefix.enabled; config = config}}>
                  <input id="terms" type="checkbox" class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enable support for prefix commands?</label>
            </div>

            {#if config.prefix.enabled}
                Keep in mind, discord encorages slash commands usage. Discord may not verify your bot if you're using prefix commands.

                <label for="clientId" class="mb-2 mt-6 block text-sm font-medium text-gray-900 dark:text-white">Default bot prefix:</label>
                <input type="text" id="clientId" bind:value={config.prefix.prefix} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-pink-300 focus:ring-pink-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"  required />
                <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">The prefix users will need to type to call a command</p>

            {/if}
        </div>

    {:else if step == 4}
        <div class="flex min-h-[400px] w-full flex-col justify-center">
            <label for="countries" class="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="countries" bind:value={config.database.type} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected value="tingodb">Tingo - Easier for local development</option>
                <option value="mongodb">Mongo - Ready for production use</option>
            </select>
            {#if config.database.type == 'mongodb'}
                <label for="clientId" class="mb-2 mt-6 block text-sm font-medium text-gray-900 dark:text-white">MongoDB uri:</label>
                <input type="text" id="clientId" bind:value={config.database.url} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-pink-300 focus:ring-pink-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"  required />
            {/if}
        </div>
    {:else if step == 5}
        <div class="flex min-h-[400px] w-full flex-col justify-center">
            <div class="flex min-h-[400px] flex-col items-center justify-center gap-6 md:flex-row">
                <img src="/zumito-thumbs-up.jpg" alt="Zumito saing hi" class="max-w-[50%]">
                <div class="inline-flex items-center justify-start gap-3 rounded-3xl rounded-tl-none bg-pink-100 px-3.5 py-2">
                    <h5 class="text-sm font-normal leading-snug text-gray-900">Congrats, you have everithing ready!</h5>
                </div>
            </div>
            <div class="inline-flex items-center justify-start gap-3 rounded-3xl rounded-tl-none bg-pink-100 px-3.5 py-2">
                <span class="text-sm font-normal leading-snug text-gray-900">
                    npx zumito-cli create project 
                    --projectName {config.name || 'unamed-project'}
                    {#if config.discord.token}
                    --discordToken {config.discord.token}
                    {/if}
                    {#if config.discord.clientId}
                    --discordClientId {config.discord.clientId}
                    {/if}
                    {#if config.discord.clientSecret}
                    --discordClientSecret {config.discord.clientSecret}
                    {/if}
                    {#if config.prefix.enabled}
                    --botPrefix {config.prefix.prefix}
                    {/if}
                    --databaseType {config.database.type || 'tingodb'}
                    {#if config.database.type == 'mongodb'}
                    --databaseuri {config.database.url}
                    {/if}
                </span>
            </div>
        </div>
    {/if}
</div>

<div class="not-content w-full rounded-md border-2 border-pink-600 bg-pink-100">
    <div class="flex items-center justify-between gap-3 rounded bg-white p-3">

        <div>
            {#if step != 1}
                <button on:click={() => step--} class="flex cursor-pointer items-center gap-1.5 border-none py-2.5 text-base font-medium text-gray-700 transition-all duration-300 hover:text-pink-600">
                    <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                        <path d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Back
                </button>
            {/if}
        </div>
        
        <ul class="flex list-none items-center gap-1">
            <li class="text-lg font-medium text-gray-900">{step}</li>
            <li class="text-base font-normal text-gray-900">/</li>
            <li class="text-base font-normal text-gray-600">{steps}</li>
        </ul>
        
        <div>
            {#if step != steps}
                <button on:click={() => step++} class="mt-0 flex cursor-pointer items-center gap-1.5 border-none py-2.5 text-base font-medium text-gray-700 transition-all duration-300 hover:text-pink-600">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                        <path d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            {/if}
        </div>
    </div>
</div>
                                        
