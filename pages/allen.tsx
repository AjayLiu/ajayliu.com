
// @ts-nocheck
import Card from '@components/Card'

export default function Allen() {
  return (
    <Card 
    title = "Happy Birthday Bro!"
    banner={
        <>
            <p>Happy</p>
            <p>Birthday,</p>
            <p>Bro</p>
        </>
    }
    content={
        <> 
        Thank you so much. I can't thank you enough for the guidance you've given me. 
        You have shaped me into a better person by always encouraging me to step out of my comfort zone. 
        I remember that summer when you brought me to Universal and <em>persuaded</em> me to ride the Hulk coaster.
        I’ve never gone on a looping coaster before that: I was always too afraid to try. 
        I still get anxious before riding roller coasters, but somehow after that experience, I’ve grown to at least try. 
        I never would’ve thought that I would be president of a game development club, or have my own website,
        or join a dance team if you hadn’t taught me how to grow out of my shell. My breaks spent with you are always 
        filled with uncomfortable, but door-opening memories. Looking forward to creating more memories <strike>skydiving</strike> with you on my 18th birthday! 
        </>
    }

    signature={
        <>
        -Ajay
        </>
    }

    imagePath="../imgs/google.jpg"
    />
  )
}
