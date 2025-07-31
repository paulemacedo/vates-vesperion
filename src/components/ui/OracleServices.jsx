import React from 'react'
import Carousel from './Carousel'
import Card from './Card'
import { renderIcon } from '../../utils/iconHelper'

const OracleServices = ({ oracle, activeCategory }) => {
  const hasServices = oracle.services && oracle.services.length > 0
  const isComingSoon = activeCategory === 'sibilla' || activeCategory === 'runas'

  return (
    <div className="relative rounded-2xl px-6 py-8 bg-gradient-to-br from-purple-dark/40 via-gold/10 to-purple-dark/40">
      <h3 className="text-2xl md:text-3xl text-gold font-vollkorn text-center mb-8 uppercase tracking-wide">
        {isComingSoon ? 
          `${oracle.title} - Em Breve` : 
          `Serviços com ${oracle.title}`
        }
      </h3>
      
      {!hasServices ? (
        <div className="text-center text-gold/80 text-lg mb-6">
          Nenhum serviço disponível no momento.
        </div>
      ) : (
        <Carousel>
          {oracle.services.map((service, index) => (
            <div className="h-100 flex items-center justify-center p-4" key={index}>
              <Card
                title={service.title}
                price={service.price}
                originalPrice={service.originalPrice}
                hasDiscount={service.hasDiscount}
                description={service.description}
                icon={renderIcon(service.iconType)}
                indisponivel={service.indisponivel}
                badgeText={service.badgeText}
                destacado={service.destacado || false}
                variant='preco'
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.25)' }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  scale: { duration: 0.3 },
                  boxShadow: { duration: 0.3 },
                }}
                viewport={{ once: true }}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  )
}

export default OracleServices