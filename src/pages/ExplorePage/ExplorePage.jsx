import FanPageCardsContainer from '../../components/FanPageCardsContainer/FanPageCardsContainer'
import FanPageListings from '../../components/FanPageListings/FanPageListings'
import FanPageAPI from '../../Models/FanPageAPI'
import {useState, useEffect} from 'react'
import './ExplorePage.css'

const ExplorePage = () => {

    const [allFanPages, setAllFanPages]=useState([])

    useEffect(() => {
        
        fetchAllFanPages()

    }, [])

    const fetchAllFanPages = async () => {

        const res = await FanPageAPI.all()
        
        setAllFanPages(res.data.allPages)
    }


    return(
        <div className="ExplorePage container">
            <FanPageCardsContainer />
            <FanPageListings allFanPages={allFanPages}/>
        </div>
    )
}

export default ExplorePage;