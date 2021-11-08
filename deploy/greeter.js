module.exports = async ({ getNamedAccounts, deployments, ethernal }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const greeter = await deploy("Greeter", {
    from: deployer,
    args: ["Hello World"],
    log: true,
  });

  await ethernal.push({ name: "Greeter", address: greeter.address });
};

module.exports.tags = ["Greeter"];
