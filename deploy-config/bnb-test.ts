import { DeployConfig } from '../src/deploy-config'

const config: DeployConfig = {
  numDeployConfirmations: 1,
  gasPrice: 5_000_000_000,
  l1BlockTimeSeconds: 15,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 8868,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 10,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0xC538BBeEfdd48d328672986F2d79cda76D76a34C',
  ovmProposerAddress: '0x83f67A620D6DDdec5431f4Fa045d1a93ab4e4DEE',
  ovmBlockSignerAddress: '0x0B9105190e1D7Cd0097782607d03A3b144fC4575',
  ovmFeeWalletAddress: '0xFC0295eAFeCdBac3bb752D813D3C90f7D6ce7FF8',
  ovmAddressManagerOwner: '0xf3Bc4287DbE8d2DB07484721F909e11Fb3Be4Fd0',
  ovmGasPriceOracleOwner: '0xF98c2b17aD8a264d993B6ad4E4B1297d9acb96dA',
}

export default config