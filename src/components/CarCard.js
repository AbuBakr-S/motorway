

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const CarCard = ({img}) => {

  console.log(img)

  return (
    <div className="container" key={img.id}>
      
      <div className="card-header">
        <div className="card-header-left">
          <img className="user-profile-img" src={img.user.profile_image} alt=''/>
        </div>
        <div className="card-header-right">
          <h3>Shot by {img.user.name}</h3>
          <h4>{img.user.location}</h4>
        </div>
      </div>
      <div className="card-body">
        <img className="car" src={img.url} alt={img.alt_description}/>
        <p>{img.description ? img.description : `No Description Provided`}</p>
      </div>
      <div className="card-footer">
        <FontAwesomeIcon className="fa-items-plusicon" icon={faHeart} />
        <span>{img.likes}</span>
      </div>
    </div>
  )

}

export default CarCard