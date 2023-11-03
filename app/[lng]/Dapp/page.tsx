
import { useTranslation } from '@/app/i18n'

import Wallet from './app/Wallet'

export default async function Dapp({ params: { lng } }:any) {
    const { t } = await useTranslation(lng)

    return (
        <div  className='w-full h-full flex-col flex items-center justify-center'>
            <Wallet />
        </div>
    )
}
