import GoogleAnalyticsHook from '@components/GoogleAnalyticsHook'
const Secret: React.FC = () => {
    return (
        <>        
        <GoogleAnalyticsHook />
        <title>SECRET PAGE</title>
        <h1>YOU'VE FOUND THE SECRET PAGE, NICE!</h1>
        <a href="https://www.youtube.com/watch?v=bwpK5QJu6K4">
            <img src="imgs/dab.png" style={{width: "50%"}}/>
        </a>
        </>
    )
}

export default Secret;