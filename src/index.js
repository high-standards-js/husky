const base = require('@high-standards-js/base');

(async() => {
    await base.checkAcceptedHighStandards();

    let packageJsonOfConfig = base.getInitiatingProjectPackageJson();
    
    if (!packageJsonOfConfig.engines) packageJsonOfConfig.engines = {};
    if (!packageJsonOfConfig.engines.node) packageJsonOfConfig.engines.node = `>=${process.versions.node}`;
    
    base.writeFile(
        'commitlint.config.js', 
        base.getTemplate(
            __dirname, 
            'commitlint.config.js'
        )
    );

    packageJsonOfConfig = base.addDependency(packageJsonOfConfig, 'husky');

    if (!packageJsonOfConfig.husky) packageJsonOfConfig.husky = {};
    if (!packageJsonOfConfig.husky.hooks) packageJsonOfConfig.husky.hooks = {};

    base.writeInitiatingProjectPackageJson(packageJsonOfConfig);
})()
