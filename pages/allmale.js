
import Card from '@components/Card.js'

export default function AllMale() {
  return (
    <Card 

    title = "Merry Christmas, All Male!"

    banner={
        <>
            <p>Merry</p>
            <p>Christmas</p>
            <p>All Male !</p>
        </>
    }
    content={
        <> 
            Yo guys! Just wanna spread some holiday gratitude. This year was quite a year to join the team, but I'm very glad I did!
            I've improved so much thanks to your help, at least I hope so lol. Joining All Male was quite outside of my comfort zone but now I 
            feel much more confident about lots of things. It's been such a rewarding journey so far and it's all thanks to you guys!  
            Thanks to all of you and for putting up with my noobness lmao. Looking forward to comp season!
            <br/>Merry Christmas! 
        </>
    }

    signature={
        <>
            -BBoy? Ajay
        </>
    }

    imagePath="../imgs/allmale.png"
    />
  )
}
