import ReactPost from './ReactPost'


const BulletinBoard = () => {

let posts = [{
        question: 'Vad är tre fördelar med att använda React?',
        answer: 'React är ett JavaScript-bibliotek där konceptet är att bygga mindre komponenter som i sin tur pusslas ihop till en helhet i din webbapplikation. Fördelarna med detta sätt att arbeta är flera; till exempel så kan komponenter återanvändas på olika ställen i vår applikation och minskar därför behovet av att hela tiden skriva ny kod. Komponentstrukturen gör även koden lättare att hålla reda, felsöka, och skriva om ifall behov uppstår. React är utöver detta (och jämfört med andra bibliotek/ramverk) relativt lätt att lära sig.'
        },{
        question: 'Vad betyder Single Page Application och vad skiljer det från en "vanlig" webbplats?',
        answer: 'En Single Page Application (SPA) är en webbplats som endast använder sig av en HTML-fil. Innehållet som visas på sidan renderas av JavaScript baserat på användarens olika val. En ”vanlig” webbplats, eller s.k. Multiple Page Application (MPA) navigeras genom att via länkar hoppa till olika HTML-sidor som i sin tur visar olika innehåll.'
        },{
        question: 'Vad är tre skillnader mellan React och Angular?',
        answer: 'React är ett JavaScript-bibliotek medan Angular är ett ramverk baserat på Typescript. React backas av Facebook och Angular av Google. React är mycket mer flexibelt än Angular.'
    }]

    return (
        <div className='Bulletin-board'>
            {posts.map((post, index) => (<ReactPost key={index} post = {post}/>))}
        </div>
    )
}

export default BulletinBoard