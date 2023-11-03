'use client'
import type { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'

import { coinbaseWallet, hooks as coinbaseWalletHooks } from '@/lib/utils/connectors/coinbaseWallet'
import { hooks as metaMaskHooks, metaMask } from '@/lib/utils/connectors/mataMask'

const connectors: [MetaMask | CoinbaseWallet, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [coinbaseWallet, coinbaseWalletHooks],
]

function Child() {
  const { connector } = useWeb3React()
  console.log(connector)
  
  return null
}

export default function Web3Provider() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Child />
    </Web3ReactProvider>
  )
}




