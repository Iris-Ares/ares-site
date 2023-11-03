'use client'

import React, { useEffect } from 'react'

import { hooks, metaMask } from '@/lib/utils/connectors/mataMask'

import { CHAINS } from '@/lib/utils/chains'

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks



const Wallet:React.FC<{}> = () => {

    const chainId = useChainId()
    const accounts = useAccounts()
    const isActivating = useIsActivating()
    const isActive = useIsActive()
    const provider = useProvider()
    const ENSNames = useENSNames(provider)

    const activatChain = async (chainId:number) => {
        await metaMask.activate(chainId)
        
    }


    const getInfo = async () => {
        if(!accounts) return
        const balance = await provider?.getBalance(accounts[0])
        
        console.log(
            {
                balance,
                ENSNames
            }
        );
        
    
    }

    useEffect(() => {
        void metaMask.connectEagerly().catch(() => {
            console.log('Failed to connect eagerly to metamask')
        })
      }, [])

    useEffect(() => {
        if(!isActive) return
        getInfo()
    },[isActive])

    return (
        <div>
            <p>Wallet</p>
            <p>
                {accounts  || 'no accounts'}
            </p>
            <div className='flex flex-col gap-1'>
                {
                    Object.entries(CHAINS).map(([key, value]) => {


                        return (
                            <div key={key} className='btn' onClick={activatChain.bind(null,Number(key))} >
                                {value.name} - {key}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Wallet