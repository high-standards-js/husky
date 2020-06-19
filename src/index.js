const base = require('@high-standards-js/base')

function addHookCommand(packageJson, hookName, commandToAdd) {
    commandToAdd = commandToAdd.trim();
    if (!packageJson.husky) packageJson.husky = {};
    if (!packageJson.husky.hooks) packageJson.husky.hooks = {};
    if (!packageJson.husky.hooks[hookName]) packageJson.husky.hooks[hookName] = '';
    
    let commands = packageJson.husky.hooks[hookName].split('&&').map((singleCommand) => {
        return singleCommand.trim();
    });

    if (!commands.includes(commandToAdd)) {
        commands.push(commandToAdd);
    }

    packageJson.husky.hooks[hookName] = commands.join(' && ');
    return packageJson;
}

module.exports = {
    addHookCommand
}