import Image from "next/image";
import Link from "next/link";
import styles from './PlacesView.module.css';
import starImg from '../../../assets/iconmonstr-star-3.svg'
import { getPlacePhoto } from "app/app/services/google_maps_api";


interface PlaceViewProps {
  place: PlaceType
}

export async function PlacesView({ place }: PlaceViewProps){
  var imageURl = '';
	if(place.photos){
		imageURl = await getPlacePhoto(place.photos[0].name,240,240);
	}
	const url = `/places/${place.displayName.text}?id=${place.id}`
  return (
    <main className={styles.ProductView}>
      <section className={styles.images}>
        <Image
          src={imageURl}
          width={500}
          height={500}
          quality={100}
          alt='Photos unavailable'
        />
      </section>
      <section className={styles.info}>
        <h1 className={styles.title}>{place.displayName.text}</h1>
        {place.rating ? <p>{place.rating}<Image src={starImg} alt='' height={10} width={10}/></p> : null}
        {place.primaryType ? <p className={styles.category}>{place.primaryType}</p> : null}
        {place.reviews && place.reviews[0].text ?  <p className={styles.description}>{place.reviews[0].text.text}</p> : null}
        <Link href={place.googleMapsUri} className={styles.Link}>Get Route</Link>
      </section>
    </main>
  )
};