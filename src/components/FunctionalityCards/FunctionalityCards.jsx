import './styles.css'

import React from 'react'

const FunctionalityCards = () => {

    const cardsData = [
        {
            id: 1,
            imgSrc: require('./assets/estadistics.png'),
            title: 'Estadísticas',
            description: 'Lorem ipsum...'
        },
        {
            id: 2,
            imgSrc: require('./assets/queue.png'),
            title: 'Cola de Espera',
            description: 'La cola de espera es una funcionalidad que permite retener y ordenar llamadas. Las llamadas que ingresan a la cola escuchan música en espera mientras esperan a ser atendidas. El orden de llegada o ingreso a la cola se respeta al momento de la atención por parte del operador, es decir la primer llamada en ser atendida es la primera que ingresó a la cola.'
        },
        {
            id: 3,
            imgSrc: require('./assets/anuraClick2Call.png'),
            title: 'Click To Call',
            description: 'Click To Call es un widget (en forma de botón) para agregar en tu sitio web. Permite que los visitantes llamen GRATIS a tu empresa desde su PC, celular o tablet, a través de Internet y con un solo click.'
        },
        {
            id: 3,
            imgSrc: require('./assets/homeOffice.png'),
            title: 'Home Office',
            description: 'A través de la Central Telefónica en la Nube, las empresas y entidades públicas pueden contar con un sistema telefónico que integra a la totalidad de su empleados ya sea que estén en sus oficinas o en sus casas. Sin importar su ubicación geográfica, los clientes no notarán la diferencia en la atención telefónica.'
        }

    ];


    return (
        <div className="container d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-4">

                {cardsData.map((card) => (

                    <div className="flip-card" key={card.id}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={card.imgSrc} alt={card.title} />
                                <p className="title">{card.title}</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="title">{card.title}</p>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default FunctionalityCards