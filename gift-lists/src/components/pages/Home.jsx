import React from 'react'
import ListCard from '../list/ListCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 200
    }
})

function Home() {
    const listOne = { 
        id: 1, 
        title: "Birthday", 
        items: [{
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
    }

    const listTwo = { 
        id: 2, 
        title: "Father's Day", 
        items: [{
            id:1,
            name: "Nintindo Wii",
            url: "https://store.nintendo.com/nintendo-switch-neon-blue-neon-red-joy-con.html"
        },{
            id:2,
            name: "DEWALT Heavy-Duty FRS Walkie-Talkie Radios",
            url: "https://www.northerntool.com/shop/tools/product_200732392_200732392?cm_mmc=Bing-pla&utm_source=Bing_PLA&utm_medium=Sporting%20Goods%20%2B%20Toys%20%3E%20Two-Way%20Radios&utm_campaign=DEWALT&utm_content=73508&cmpid=53403399&agid=3200075912&tgtid=pla-4577404347789222&prdid=73508&gclsrc=ds"
        },{
            id:3,
            name: "Ultimate Ears - WONDERBOOM 2 Portable Bluetooth Speaker",
            url: "https://www.bestbuy.com/site/ultimate-ears-wonderboom-2-portable-bluetooth-speaker-bermuda-blue/6344801.p?skuId=6344801"
        },{
            id:4,
            name: "CLAMP CHAMP - MASTERS OF THE UNIVERSE",
            url: "https://www.funko.com/shop/details/retro-toys-motu-clamp-champ-pop"
        }]
    }
    
    const giftLists = [listOne, listTwo];
    const username = "Andre";
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <p>Welcome, {username}</p>
            <div className={classes.root}>
                {giftLists.map(list => {
                    return <ListCard key={list.id} {...list}></ListCard>
                })}
            </div>
            <button>Add List</button>
        </React.Fragment>
    )
}

export default Home
