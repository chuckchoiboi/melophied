import musicianImg from '../../pages/FanPage/testimages/musician.jpg'
import './FanPageBanner.css'


const FanPageBanner = ({pageData}) => {
    return (
        <div className='FanPageHeader__banner' >
            {
                pageData.artistData.artistImage ?
                <div className="artistPortrait" style={{backgroundImage: `url(${pageData.artistData.artistImage})`, backgroundSize: 'cover'}}></div>
                :
                <div className="artistPortrait" style={{backgroundImage: `url(${musicianImg})`, backgroundSize: 'cover'}}></div>
            }
            <h1 className='artistTitle'>{pageData.pageTitle}</h1>                    
        </div>
    )
}

export default FanPageBanner