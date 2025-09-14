interface Card {
  slug: string;
  title: string;
  banner: JSX.Element;
  content: JSX.Element;
  signature: JSX.Element;
  imagePath: string;
  confetti?: boolean;
}

const cardList: Array<Card> = [
  {
    slug: "allen",
    title: "Happy Birthday Bro!",
    banner: (
      <>
        <p>Happy</p>
        <p>Birthday,</p>
        <p>Bro</p>
      </>
    ),

    content: (
      <>
        Thank you so much. I can't thank you enough for the guidance you've
        given me. You have shaped me into a better person by always encouraging
        me to step out of my comfort zone. I remember that summer when you
        brought me to Universal and <em>persuaded</em> me to ride the Hulk
        coaster. I’ve never gone on a looping coaster before that: I was always
        too afraid to try. I still get anxious before riding roller coasters,
        but somehow after that experience, I’ve grown to at least try. I never
        would’ve thought that I would be president of a game development club,
        or have my own website, or join a dance team if you hadn’t taught me how
        to grow out of my shell. My breaks spent with you are always filled with
        uncomfortable, but door-opening memories. Looking forward to creating
        more memories{" "}
        <div
          style={{
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
            display: "inline",
          }}
        >
          skydiving
        </div>{" "}
        with you on my 18th birthday!
      </>
    ),

    signature: <>-Ajay</>,

    imagePath: "/img/google.jpg",
  },
  {
    slug: "allmale",
    title: "Merry Christmas, All Male!",

    banner: (
      <>
        <p>Merry</p>
        <p>Christmas</p>
        <p>All Male !</p>
      </>
    ),

    content: (
      <>
        Yo guys! Just wanna spread some holiday gratitude. This year was quite a
        year to join the team, but I'm very glad I did! I've improved so much
        thanks to your help, at least I hope so lol. Joining All Male was quite
        outside of my comfort zone but now I feel much more confident about lots
        of things. It's been such a rewarding journey so far and it's all thanks
        to you guys! Thanks to all of you and for putting up with my noobness
        lmao. Looking forward to comp season!
        <br />
        Merry Christmas!
      </>
    ),

    signature: <>-BBoy? Ajay</>,

    imagePath: "/img/allmale.png",
  },
  {
    slug: "daniel",
    title: "Merry Christmas, Shuder!",

    banner: (
      <>
        <p>Merry</p>
        <p>Christmas</p>
        <p>Shuder !</p>
      </>
    ),

    content: (
      <>
        It's already been one and a half years since you moved to Canada.
        時間真的過太快了... or should I say...{" "}
        <div
          style={{
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
            display: "inline",
          }}
        >
          时间真的过太快了
        </div>
        . Sorry I keep roasting your Beijing 腔, I'm just jealous you were able
        to make so many friends so quickly while I'm here dying alone T_T. On a
        side note, I'm really glad that you've picked up an interest in
        programming, (I know you look up to me as your role model xaxaxa). We
        will honor the 劉 family! All that said tho, stop playing league, it's
        bad for your health :)
        <br />
        Merry Christmas!
      </>
    ),

    signature: <>-艾杰</>,

    imagePath: "/img/daniel.png",
  },
  {
    slug: "ron",
    title: "Merry Christmas, Ron!",

    banner: (
      <>
        <p>Merry</p>
        <p>Christmas</p>
        <p>史義雲 !</p>
      </>
    ),
    content: (
      <>
        Thanks for playing so many games with me over this past semester. I
        would be very lonely without you (no homo). It must be very hard for you
        to move over here during COVID, but we got each other (again, no homo).
        I can tell that you've grown a lot (not so sure about your height tho)
        since I last seen you in person. I'm just really grateful to have you
        around, especially during these times. Thanks for the gift, even though
        its region-restricted lol, it made me 非常的感動.
        <br />
        Merry Christmas!
      </>
    ),

    signature: <>-艾杰</>,

    imagePath: "/img/ron.png",
  },
  {
    slug: "talha",
    title: "Happy Holidays Talha!",

    banner: (
      <>
        <p>Happy </p>
        <p>Holidays</p>
        <p>Talha !</p>
      </>
    ),

    content: (
      <>
        What a handsome man! I wonder who it is... Anyways, I wanna thank you
        for being like the only person I can talk to at Troy and be completely
        myself... which you already know, is not very pretty lmfao. I'm very
        impressed that you're actively taking coding lessons and expanding your
        skillset - maestro is crying in defeat. Thanks for being by my side; I
        would basically be alone at Troy if you aren't here lol. Looking forward
        to having English and doing Pogcast part 3 with you next semester (we'll
        blast a different K-On opening this time)!
        <br />
        Happy Holidays!
      </>
    ),

    signature: <>-Maestro</>,

    imagePath: "/img/talha.png",
  },
  {
    slug: "tiffany",
    title: "Merry Christmas Hermana!",
    banner: (
      <>
        <p>メリ</p>
        <p>ークリス</p>
        <p>マス !</p>
      </>
    ),
    content: (
      <>
        If you were able to read that japanese stuff up there, you're a weeb
        confirmed x2. I'm really proud that you finished your web development
        course, even if it is 1990s ancient. I can tell that you're willing to
        step out your comfort zone and try new things. I saw your gift for me
        under the Christmas tree but I didn't have one, so this webpage will act
        as my gift (also because 我不想花錢 lol).
        <br />
        Merry Kissumas!
      </>
    ),

    signature: <>-Ajay</>,

    imagePath: "/img/tiffany.jpg",
  },
  {
    slug: "tiffany-2021",
    title: "Happy Birthday!",
    banner: (
      <>
        <p>誕生日</p>
        <p>おめ</p>
        <p>でとう!</p>
      </>
    ),
    content: (
      <>
        Wow, four years already flew past. It's pretty crazy how much both of us
        have grown in this short period of time. I'm sure I couldn't have
        reached where I am today without all of your care and patience,
        especially with how 跩 I am all the time. I'm always inspired by how you
        always seek for opportunities and try something new all the time, and I
        wish we both never stop doing that. We're both going to go on our own
        journeys soon, but we'll keep supporting each other for sure.
        <br />
      </>
    ),

    signature: <>-最跩的杰哥</>,

    imagePath: "/img/snoopy.jpg",
  },
  {
    slug: "allen-2022",
    title: "Happy Birthday!",
    banner: (
      <>
        <p>Happy Birthday!</p>
      </>
    ),
    content: (
      <>
        姊姊 drew this picture for you! We want to thank you so much for helping
        us become more independent. I (Ajay) remember my New Years Resolution
        was to be more independent and now, halfway through the year, I can
        definitely say I've made lots of progress thanks to you! Thanks for
        being our mentor and most importantly, the best brother ever!
        <br />
      </>
    ),

    signature: <>-Tiffany and Ajay</>,
    imagePath: "/img/allen-2022.png",
    confetti: true,
  },
  {
    slug: "fathers-day-2022",
    title: "Happy Father's Day!",
    banner: (
      <>
        <p>Happy</p>
        <p>Father's</p>
        <p>Day!</p>
      </>
    ),
    content: (
      <>
        姊姊 drew this picture! We want to thank you so much for always taking
        care of us! Without you, we would not be who we are today. Good luck at
        your new job and remember to have fun every day! 父親節快樂!
        <br />
      </>
    ),

    signature: <>-Tiffany and Ajay</>,
    imagePath: "/img/fathers-day.jpg",
    confetti: true,
  },
  {
    slug: "appfolio",
    title: "AppFolio Internship",
    banner: <></>,
    content: (
      <>
        <h2>AppFolio Internship</h2>
        <p>6.23.25 - 9.19.25 </p>
        
        <h3>Memories</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem', 
          margin: '1rem auto',
          width: '50%',
          maxWidth: 'none',
          overflow: 'visible'
        }}>
          <img src="/img/zoo.jpeg" alt="Zoo visit" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
          <img src="/img/joshua-tree.jpeg" alt="Joshua Tree National Park" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
          <img src="/img/joshua-tree2.jpeg" alt="Joshua Tree National Park" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
          <img src="/img/joshua-tree3.jpeg" alt="Joshua Tree National Park" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
          <img src="/img/bbq.jpeg" alt="BBQ with team" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
          <img src="/img/bbq2.jpeg" alt="BBQ with team" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
          <img src="/img/bbq3.jpeg" alt="BBQ with team" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
          <img src="/img/disney.jpeg" alt="Disney visit" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
          <img src="/img/hibachi.jpeg" alt="Hibachi dinner" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
        </div>

		<p>This was hands down the best internship I've had. I was fully expecting to have a pretty boring summer stuck in Santa Barbara, but bro I was so wrong.</p>
		
		<h4>To my fellow interns:</h4>
		<p>This summer was so peak. First few days when I got here, I was scared I'd just be a loner in the office, but I'm so glad I was wrong. 
			We basically hanged out together like every other day. The Joshua Tree trip will remain a core memory for me, and I'm glad I could be my weird self with you guys
			(*frat flicking*). 
		</p>
		<p>Victor: You're such a Golden Retreiver dude. You were giving me boyfriend treatment the way we had so many dinner dates together LMAO. I feel
			like it's always us two creating motion, and I love that. Joshua Tree wouldn't have happened without you, or Magic the Gathering, Catan, or the Brazilian Phonk beats.

			Anyways I'll see you in Fall. </p>


		<h4>To the Mightiest DUX team:</h4>
		<p>You guys are absolute wizards. I imagine DUX as the firefighters of AppFolio. Whenever CI goes down (sometimes because of me LOL), 
			you guys are the first line of defense- and probably the only ones who can fix it. </p>
		<p>Nick: I don't think you know this but I have a running joke with the other interns about how your last name is impossible to spell 😂. You've been a wonderful 
			manager and I'm glad we conquered the Guardians of the Galaxy drop tower at Disney together. I can tell you care very much about your team, and we are all 
			incredibly grateful.
		</p>
		<p></p>
		<p>Paul: I learned so much from pairing with you. Not only are you a CI wizard but you make a really good teacher. The way you annotate on Zoom is quite impressive. 
			I don't think I could've navigated Kermit or whatever's going on in CircleCI without you. Honestly I still don't really get what's going on with Bazel and what not, 
			but everyone knows you're the expert- and you can explain it in a way that makes sense to anyone. Also I was surprised how good you are at <a
				href="https://anime-character-quiz.ajayliu.com/"
				target="_blank"
				rel="noopener noreferrer"
				style={{ color: '#a864fd' }}
			>Anime Character Quiz</a>,
			I think you can easily beat score 25.
		</p>
		

      </>

    ),
    signature: <>-Ajay Liu</>,
    imagePath: "/img/appfolio.png",
  },
];

export default cardList;
