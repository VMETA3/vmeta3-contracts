/* Imports: External */
import { DeployFunction } from 'hardhat-deploy/dist/types'
import { hexStringEquals, awaitCondition } from '@vmeta3/core-utils'

/* Imports: Internal */
import { getContractFromArtifact } from '../src/deploy-utils'
import { getDeployConfig } from '../src/deploy-config'

const deployFn: DeployFunction = async (hre) => {
  const deployConfig = getDeployConfig(hre.network.name)
  const { deployer } = await hre.getNamedAccounts()

  const Lib_AddressManager = await getContractFromArtifact(
    hre,
    'Lib_AddressManager',
    {
      signerOrProvider: deployer,
    }
  )

  const owner = deployConfig.ovmAddressManagerOwner
  const remoteOwner = await Lib_AddressManager.owner()
  if (hexStringEquals(owner, remoteOwner)) {
    console.log(
      `✓ Not changing owner of Lib_AddressManager because it's already correctly set`
    )
    return
  }

  console.log(`Transferring ownership of Lib_AddressManager to ${owner}...`)
  await Lib_AddressManager.transferOwnership(owner)

  console.log(`Confirming transfer was successful...`)
  await awaitCondition(
    async () => {
      return hexStringEquals(await Lib_AddressManager.owner(), owner)
    },
    5000,
    100
  )

  console.log(`✓ Set owner of Lib_AddressManager to: ${owner}`)
}

deployFn.tags = ['upgrade', 'finalize']

export default deployFn
