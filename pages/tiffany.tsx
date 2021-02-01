import Card from '@components/Card'
export default function Tiffany() {
  return (
    <Card 

    title = "Merry Christmas Hermana!"

    banner={
        <>
            <p>メリ</p>
            <p>ークリス</p>
            <p>マス !</p>
        </>
    }
    content={
        <> 
            If you were able to read that japanese stuff up there, you're a weeb confirmed x2. 
            I'm really proud that you finished your web development course, even if it is 1990s ancient. 
            I can tell that you're willing to step out your comfort zone and try new things.
            I saw your gift for me under the Christmas tree but I didn't have one, so this webpage will act as my gift (also because 我不想花錢 lol). 
            <br/>Merry Kissumas! 
        </>
    }

    signature={
        <>
        -Ajay
        </>
    }

    imagePath="../imgs/tiffany.jpg"
    />
  )
}
