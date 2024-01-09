import Script from "next/script";



const GoogleAnalytics:React.FC<{children:any}> = ({children}) => {



    return (
        [
            
            <Script key="ga" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} />,
            <Script
            key="ga-init"
            id="google-analytics"
            >
                {
                    `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
                    `
                }
            </ Script>,
            children
            
        ]
    )
}


export default GoogleAnalytics