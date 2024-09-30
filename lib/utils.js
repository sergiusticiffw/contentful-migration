function getArguments() {
  const args = process.argv.slice(2);

  const argsObj = args.reduce((acc, arg) => {
    const [key, value] = arg.split('=');
    acc[key.replace('--', '')] = value;
    return acc;
  }, {});

  // Validate required arguments
  const requiredArgs = ['environmentName', 'spaceId', 'accessToken'];
  const missingArgs = requiredArgs.filter(arg => !argsObj[arg]);

  if (missingArgs.length > 0) {
    throw new Error(`Missing required argument(s): ${missingArgs.join(', ')}`);
  }

  return {
    environmentName: argsObj.environmentName,
    spaceId: argsObj.spaceId,
    accessToken: argsObj.accessToken,
  };
}

module.exports = {
  getArguments,
};
