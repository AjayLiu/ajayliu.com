import GoogleAnalyticsHook from '@components/GoogleAnalyticsHook'

export default function FourOhFour() {
  return <>
    <GoogleAnalyticsHook pageName = "404" />

    <h1>404 - Page Not Found :(</h1>
    <a href="../">
      Click me to go to home page
    </a>
  </>
}