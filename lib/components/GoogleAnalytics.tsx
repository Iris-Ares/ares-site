import Script from "next/script";



const GoogleAnalytics:React.FC<{children:any}> = ({children}) => {



    return (
        [
            children,
            <Script
                key="ga"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            />,
            <Script
            key="ga-init"
            id='ga-init'
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'G-7S788XXZHX');`
            }} />
        ]
    )
}


export default GoogleAnalytics