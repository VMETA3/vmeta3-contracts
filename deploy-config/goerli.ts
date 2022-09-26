import { DeployConfig } from '../src/deploy-config'

const config: DeployConfig = {
  numDeployConfirmations: 1,
  gasPrice: 5_000_000_000,
  l1BlockTimeSeconds: 15,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 8848,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 10,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0x9b6e19FcDfcdcc30F9ecA65B9dEcC4a16c7d1204',
  ovmProposerAddress: '0x108075830997bFA268Fe0AC41866bcfFBf613d8b',
  ovmBlockSignerAddress: '0x71a304e04e38D8665e00ebd5719b6dDf292631cE',
  ovmFeeWalletAddress: '0x88DC0e0043902A9F3b8ff9c1A1aC071A647a66a9',
  ovmAddressManagerOwner: '0xeb9B59Bb39a1261BC1fdc21D5DD92B71aa0FC0f2',
  ovmGasPriceOracleOwner: '0xcE501A6aE30850D7df978F02e3d1d481a4D1FE2a',
}

export default config
