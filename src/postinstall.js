const base = require('@high-standards-js/base');

(async () => {
  await base.checkAcceptedHighStandards();

  let packageJson = base.getInitiatingProjectPackageJson();

  packageJson = await base.addDevDependency(packageJson, 'husky');

  if (!packageJson.husky) packageJson.husky = {};
  if (!packageJson.husky.hooks) packageJson.husky.hooks = {};

  base.writeInitiatingProjectPackageJson(packageJson);
})();
