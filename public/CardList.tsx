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

        <p>This was hands down the best internship I've had. I was fully expecting to have a pretty boring summer stuck in Santa Barbara, but I was so wrong.</p>

        <h4 style={{ marginTop: '100px' }}>To my fellow interns:</h4>
        <p>This summer was so peak. First few days when I got here, I was scared I'd just be a loner in the office, but I'm so glad that wasn't the case.
          We basically had motion like every single day. The Joshua Tree trip will remain a core memory for me, and I'm glad I could be my weird self with you guys
          (*frat flicking*). #internz may be filled with dead deactivated accounts now, but the memories we made will last forever.
        </p>
        <p style={{fontSize: '1rem'}}>Victor Liu 劉勝利: You're such a Golden Retreiver dude the way you just exude positive energy and consideration for others.
          You were giving me boyfriend treatment the way we had so many dinner dates together LMAO. I feel
          like it's always us two creating motion, and I love that. Joshua Tree wouldn't have happened without you, or Magic the Gathering, Catan, or the Brazilian Phonk beats.

          Anyways I'll see you in Fall. I can be your placeholder girlfriend in the meantime ;) </p>

        <p style={{fontSize: '1rem'}}>AndyMcGamer: My matchaholic Liu brother in crime. I find it so funny that you'd go to such great lengths
          to visit Folio HQ or to see the princesses at Disney, but that's the type of energy I need more in my life.
          The reels you send are getting more and more unhinged and it just reminds me that life is meant to be silly
          and fun. I can tell you're the guy everyone confides in, whether it's girl problems or problems that can only
          be solved in Chinese (woc 😂). I hope we keep playing league and breaking production code :)
        </p>

        <p style={{fontSize: '1rem'}}>Rift Harold: You remind me of my big bro the way you always keep it real; you're like the senpai I always wanted
          (uwu). Nah but you made me feel some typa way when we sat in the frunk of Arnav's tessie and stargazed at Joshua Tree 😳.
          Your tessie is also quite legendary, like driving to Seaside blasting Pride - Fame J. Like you said, I feel like we would've
          been amazing friends if we met in high school or undergrad, but I'm glad we crossed paths. I'll catch you on a ttv/Wyzae stream
          or somewhere on Colima Rd or smth lol.
        </p>

        <p style={{fontSize: '1rem'}}>Big Nav: Arnav you're the embodiment of unwavering work ethic, and although I get concerned about your work-life balance the way
          I see you making apm_bundle PRs at like 11pm ❓❓, I really admire the drive you have to succeed and achieve your goals. Honestly I've
          been kinda lost in finding purpose in what I want to work towards, but you remind me of how exhilirating it can be to be
          completely immersed in exciting work. I see you as my younger, quarantine peak 2021 coding Ajay, and it's a part of me I don't wanna forget.</p>

        <p style={{fontSize: '1rem'}}>Ege Dmitri: You are so unfiltered and funny bro 😂, I hope all the people I meet when I study abroad will be unhinged as you.
          You're like a nonstop meme generator, first with Sigma Kappa Chinatsu and then with the whole men with baggage thing. Also soccer
          was sm fun, and somehow you always win at board games even (especially) when it's your first time playing?? But you could never win me 
		  at Stickman Badminton 😎. Hopefully one day you'll make smallergig.com and post a vlog about it
          a thing :)
        </p>

        <p style={{fontSize: '1rem'}}>Candis: You remind me of my sister back when she was in undergrad, kinda silly and effortlessly funny. I hope you resolve
          your housemate beef situation and enjoy your time abroad. Also whatever iPhone 19 Pro Max you used to take the performative night
          sky pics at Joshua Tree were so peak. Thanks for listening to all my yappings near the end when it was basically just us and Ege in the office,
		  kept me sane from my quarter-life crisis fr.
        </p>

        <p style={{fontSize: '1rem'}}>Sahiti: You are so funny lol. I'm so glad you could come to Joshua Tree cuz what you wrote on Jackbox was hilarious 😂 (sorry Ajay).
          Also we need to play ping pong again, for some reason we always get some really good rallies going but I just can't do that with
          anyone else.
        </p>

        <p style={{fontSize: '1rem'}}>David Jeong: Bro I didn't get the chance to play tennis with you 😭. Witnessing you play ping pong with Arnav in the game room
          was only a glimpse of what your true potential on tennis was. I'm sure you've won the
          "Most Likely to Bring Home to Mom and Dad" superlative plenty times before, but you're also just funny af too.
          I hope Yale's not killing you rn lol. </p>

        <p style={{fontSize: '1rem'}}> Samir: The fact that you made the #coffee-sb bot is such a huge flex. Sometimes I feel like you're an unc 
			living in a college kid's body with all that wisdom and knowledge, but you clearly still party hard lol. Coming to work hungover
			and using beer for electrolytes is crazyyy. Your gatorade is still on the desk next to mine lol. Hope you're doing great in New York, 
			maybe you'll still be there post-grad and we can meet up there? Or in SB idk</p>
		
		<p style={{fontSize: '1rem'}}> Brenna: Congrats on starting part time! I'm definitely gonna contact you about classes at Lund,
			I'm trying to maximize my time abroad. I could tell you're such a kind-hearted person, and I hope you get to try the 
			yoga class in the office some time (it's kinda intense ngl).</p>

        <p style={{fontSize: '1rem'}}> Aman: You were the first intern I spoke with at AppFolio and you were so welcoming. I remember you
			left a post-it note to come eat lunch at Lily's Taqueria with you, Samir, and Alex. Quite unfortunate how you left so early, but
			you sure left a lasting impression while you were here ("cocaine" incident 🫢). </p>
		<p style={{fontSize: '1rem'}}> Abhishek: I don't know where you went man, you were here then you teleported to Santa Cruz or
			something. Like a rare pokemon. It's funny because there's someone on my team also named Abhishek Kumar, except he reversed
			his first and last name so it's Kumar Abhishek (just to be different from you i guess lol). </p>

        <h4 style={{ marginTop: '100px' }}>To the Mightiest DUX team:</h4>
        <p style={{fontSize: '1rem'}}>You guys are absolute wizards. I imagine DUX as the firefighters of AppFolio. Whenever CI goes down (sometimes because of me LOL),
          you guys are the first line of defense- and probably the only ones who can fix it. </p>
        <p style={{fontSize: '1rem'}}>Nick: I don't think you know this but I have a running joke with the other interns about how your last name is impossible to spell 😂. You've been a wonderful
          manager and I'm glad we conquered the Guardians of the Galaxy drop tower at Disney together. I can tell you care very much about everyone on DUX, and we are all
          incredibly grateful to have you as our manager.
        </p>
        <p style={{fontSize: '1rem'}}>Shawn: The most badass mentor! I find your life out in the midwest really inspirational: how you didn't originally start in tech,
          how you only eat one meal a day, and basically 100%'d Zelda. I like how you're so passionate about incorporating LLMs into your work,
          with the Deflakinator and otto ask. It really goes to show how much you love to learn and solve problems, always thinking about
          how to use the latest tech to make things better.
        </p>

        <p style={{fontSize: '1rem'}}>Paul: I learned so much from pairing with you. Not only are you a CI wizard but you make a really good teacher. The way you annotate on Zoom is quite impressive.
          I don't think I could've navigated Kermit or whatever's going on in CircleCI without you. Honestly I still don't really get what's going on with Bazel and what not,
          but everyone knows you're the expert- and you can explain it in a way that makes sense to anyone. Also I was surprised how good you are at <a
            href="https://anime-character-quiz.ajayliu.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#a864fd' }}
          >Anime Character Quiz</a>,
          I think you can easily beat score 25.
        </p>

        <p style={{fontSize: '1rem'}}>Matt: Not everyone I've talked to knows about DUX, but everyone knows Matt Webb 😂. The amount of times I just
          search for a problem I have on Slack, and I see you've already responded to it. I admire how you are always
          willing to help others, and I can see how that can become a burden. But I think it really speaks to your
          character, and I'm sure it's a very fulfilling feeling to use your knowledge to make a positive impact. </p>

        <p style={{fontSize: '1rem'}}>Tony: I think about your DOTA story a lot because the CTO's office is like right next to my seat and the imagery
          of you guys playing DOTA together is quite extraordinary 😂. But yeah I've been thinking of moving to NYC after
          grad and the fact that you work from there really made it seem very plausible. It was quite refreshing to navigate
          the Kermit code base with you because we both have little prior knowledge, so we were on the same page. I'm sure we'll have
          the chance to meet up in NYC one day.
        </p>

        <p style={{fontSize: '1rem'}}>Sam: You're the only one on the team who's in SB, and I'm glad we had the chance to meet at Disney. I need to thank you
          for teaching me how to cancel the git rebase -i vim interface with :cq, it's saved my life too many times since LOL.
        </p>

        <p style={{fontSize: '1rem'}}>Hillary: Your username onthespotqa really does live up to its name. Sometimes I put a PR for review and I refresh the page and
          you've already approved it!
        </p>

        <p style={{fontSize: '1rem'}}>Kumar: It's funny how you reversed your first name last name, because we have an intern also called Abhishek Kumar lol.
        </p>

        <h4 style={{ marginTop: '100px' }}>To some other special characters:</h4>
        <p style={{fontSize: '1rem'}}> 
			Brandon: You're such a genuine guy. When we were drunk at the Zoo (and you called me a walking HR violation), I felt like I finally found someone who could 
			match my unfiltered energy. I've said this before but you really remind me of my big brother, and your story is so inspiring and made me realize how
			lucky I am: it's <s>uncs</s> great people like you who set a good example for us to follow. I really enjoy our conversations and I'm so glad to have
			someone to help me navigate through this new chapter of my life.
		</p>
		<p style={{fontSize: '1rem'}}>
			Evan: Literally none of this would've been possible without you. I still remember vividly when I received the call from you with news
			that I got the internship. I had just finished my Final Presentation for my UCSB IT Internship, and was eating lunch at Coral Tree Cafe
			when I just started jumping in excitement. I really want to thank you in person, and I hope to have you as a Guest Speaker for 
			this upcoming Fall quarter! The interview process was so smooth and transparent, and this internship has been nothing but an amazing experience.
		</p>
		<p style={{fontSize: '1rem'}}>
			Aleen: Our honorary intern! I'm so glad you could come to Joshua Tree and shoutout to your Lexus! It would not have been possible without you. 
			Meeting your parents was also such a fun experience, they are so sweet and it really made me miss my own parents. It's quite courageous of you
			to leave so far from home to start a new life in Santa Barbara, but I'm sure you're doing great for yourself.
		</p>
		<p style={{fontSize: '1rem'}}>
			Edison: I get the vibe that you're like a classmate in one of my CS classes, which makes sense since you're a fresh grad lol. It's 
			cool to hear about how the internships were like in the past, and now your're full time! Glad you could share your stories with us!
		</p>
		<p style={{fontSize: '1rem'}}>
			David Avocado: Man those deep philosophical conversations were so much fun. Our topics would go from public transportation to the meaning of life within
			the span of like 5 minutes but our chats really got me thinking about what I really want to do with my life. Especially the ideas of existentialism and living a 
			comfortable life, whatever that means. Ping pong was also really fun with you and Martin. But yeah I love how you always challenge every thought
			I have and it really makes me think deeper about my core values and beliefs. Thinking is healthy, and you make me think :)
		</p>

		<h4>Thank you guys so much for making this summer so memorable!</h4>
		<p>Please stay connected with me! I'll be in SB until the end of the year, then I'll be studying abroad in Sweden from Jan-Jun 2026. After 
			graduating in June, I'm thinking of moving to NYC, but I really do wish to stay with AppFolio. I love the work and the food and snacks,
			but I love the people the most, and that's all thanks to you guys. Here's my contact info, please hit me up if you're ever in town or wanna chat.
		</p>
		<p>Email: ajayliu2928@gmail.com</p>
		<p>Phone: (714) 717 - 5172</p>
		<p>LinkedIn: <a href="https://www.linkedin.com/in/ajayliu/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/ajayliu/</a></p>
		<p>Instagram: <a href="https://www.instagram.com/ajayliu_/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/ajayliu_/</a></p>
		<p>GitHub: <a href="https://github.com/AjayLiu" target="_blank" rel="noopener noreferrer">https://github.com/AjayLiu</a></p>
      </>

    ),
    signature: <>-Ajay Liu</>,
    imagePath: "/img/appfolio.png",
  },
];

export default cardList;
