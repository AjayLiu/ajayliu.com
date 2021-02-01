
import Card from '@components/Card'

export default function Ron() {
  return (
    <Card 

    title = "Merry Christmas, Ron!"

    banner={
        <>
            <p>Merry</p>
            <p>Christmas</p>
            <p>史義雲 !</p>
        </>
    }
    content={
        <> 
            Thanks for playing so many games with me over this past semester. I would be very lonely without you (no homo).
            It must be very hard for you to move over here during COVID, but we got each other (again, no homo). 
            I can tell that you've grown a lot (not so sure about your height tho) since I last seen you in person. I'm just really grateful to have you around, especially during these times.
            Thanks for the gift, even though its region-restricted lol, it made me 非常的感動.
            <br/>Merry Christmas! 
        </>
    }

    signature={
        <>
        -艾杰
        </>
    }

    imagePath="../imgs/ron.png"
    />
  )
}
