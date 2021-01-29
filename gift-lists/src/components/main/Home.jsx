import React from 'react'
import ListCard from '../list/ListCard'

function Home() {
    const cards = [{
        id:1,
        name: "PlayStation 5",
        url: "https://www.playstation.com/en-us/ps5/"
    },{
        id:2,
        name: "Bose – SoundLink Color Portable Bluetooth Speaker II",
        url: "https://www.briantinex.com/product/bose-soundlink-color-portable-bluetooth-speaker-ii/?attribute_pa_color=soft-black"
    },{
        id:3,
        name: "Patek Philippe World Time Complications Platinum Watch",
        url: "https://www.swisswatchexpo.com/watches/patek-philippe-world-time-complications-platinum-watch-5110-box-papers-30928/?utm_source=bing&utm_medium=cpc&utm_campaign=Shopping&utm_term=4579740808163015&utm_content=Patek%20Philippe"
    }]
    
    return (
        <React.Fragment>
            {cards.map(card => {
                return <ListCard key={card.id} {...card}></ListCard>
            })}
        </React.Fragment>
    )
}

export default Home
