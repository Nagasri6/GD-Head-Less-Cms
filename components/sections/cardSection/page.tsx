import Card from '@/components/ui/Card/page';
import '../../../app/globals.css';
import styles from "./page.module.css";

const cardData = [
    {
        title: "Personalized Services",
        icon: "https://www.gentledental.com/sites/default/files/2019-11/personalized-service-icon.png",
        description: "At Gentle Dental, we understand that every patient is unique. That's why we offer personalized dental care tailored to your specific needs. Whether you're looking for preventive care, cosmetic dentistry, or orthodontics, our team is here to create a treatment plan that's just right for you.",
    }, {
        title: "Personalized Services",
        icon: "https://www.gentledental.com/sites/default/files/2019-11/personalized-service-icon.png",
        description: "At Gentle Dental, we understand that every patient is unique. That's why we offer personalized dental care tailored to your specific needs. Whether you're looking for preventive care, cosmetic dentistry, or orthodontics, our team is here to create a treatment plan that's just right for you.",
    }, {
        title: "Personalized Services",
        icon: "https://www.gentledental.com/sites/default/files/2019-11/personalized-service-icon.png",
        description: "At Gentle Dental, we understand that every patient is unique. That's why we offer personalized dental care tailored to your specific needs. Whether you're looking for preventive care, cosmetic dentistry, or orthodontics, our team is here to create a treatment plan that's just right for you.",
    },
]
export default function CardSection() {
    return (
        <>
            <section className={`${styles.cardSection}`}>

                <div className={`${styles.cardWrapper} container`}>

                    {cardData.map((card, index) => {
                        return (
                            <Card key={index} title={card.title} icon={card.icon}            description={card.description} />

                        )
                    },)} 
                </div>
            </section>
        </>
    )
}