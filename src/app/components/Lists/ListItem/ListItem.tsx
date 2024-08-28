import Style from './ListItem.module.css';
import Image from 'next/image';
import Link from 'next/link';
import startImg from '../../../assets/iconmonstr-star-3.svg'
import { getPlacePhoto } from 'app/app/services/google_maps_api';

interface PlaceItemInterface {
	place: PlaceType
  }



export  async function ListItem({ place }: PlaceItemInterface){
	var imageURl = '';
	if(place.photos){
		imageURl = await getPlacePhoto(place.photos[0].name,240,240);
	}
	const url = `/places/${place.displayName.text}?id=${place.id}`
return(
<Link className={Style.Link} href={url}>
	<div className={Style.div2}>
		<Image src={imageURl} alt='Photos unavailable' width={240} height={240} className={Style.img1}/>
		<div>
		    <p className={Style.p1}>{place.displayName.text}</p>
			{ place.rating ? <p>{place.rating}<Image src={startImg} alt='' width={10} height={10}/></p> : null}
			{place.reviews && place.reviews[0].text ? <p className={Style.p2}>{place.reviews[0].text.text}</p> : null}
		</div>
	</div>
</Link>);
}