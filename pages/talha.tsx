
import Card from '@components/Card'

export default function Talha() {
  return (
    <Card 
    title = "Happy Holidays Talha!"

    banner={
        <>
            <p>Happy </p>
            <p>Holidays</p>
            <p>Talha !</p>
        </>
    }
    content={
        <> 
            What a handsome man! I wonder who it is... Anyways, I wanna thank you for being like the only person I can talk to at Troy and be completely myself...
            which you already know, is not very pretty lmfao. I'm very impressed that you're actively taking coding lessons and expanding your
            skillset - maestro is crying in defeat. Thanks for being by my side; I would basically be alone at Troy if you aren't here lol. 
            Looking forward to having English and doing Pogcast part 3 with you next semester (we'll blast a different K-On opening this time)!
            <br/>Happy Holidays! 
        </>
    }

    signature={
        <>
        -Maestro
        </>
    }

    imagePath="../imgs/talha.png"
    />
  )
}
