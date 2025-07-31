import { describe, it, expect } from 'vitest'
import { categories, oracleData } from '../../data/oracleData'

describe('Oracle Data', () => {
  describe('Categories', () => {
    it('deve ter todas as categorias necessárias', () => {
      expect(categories).toHaveLength(4)
      
      const categoryIds = categories.map(cat => cat.id)
      expect(categoryIds).toContain('tarot')
      expect(categoryIds).toContain('cigano')
      expect(categoryIds).toContain('sibilla')
      expect(categoryIds).toContain('runas')
    })

    it('cada categoria deve ter id e name', () => {
      categories.forEach(category => {
        expect(category).toHaveProperty('id')
        expect(category).toHaveProperty('name')
        expect(typeof category.id).toBe('string')
        expect(typeof category.name).toBe('string')
        expect(category.id).toBeTruthy()
        expect(category.name).toBeTruthy()
      })
    })

    it('deve ter nomes corretos para as categorias', () => {
      const expectedCategories = [
        { id: 'tarot', name: 'Tarot' },
        { id: 'cigano', name: 'Baralho Cigano' },
        { id: 'sibilla', name: 'Sibilla' },
        { id: 'runas', name: 'Runas Nórdicas' }
      ]

      expectedCategories.forEach(expected => {
        const found = categories.find(cat => cat.id === expected.id)
        expect(found).toBeDefined()
        expect(found.name).toBe(expected.name)
      })
    })

    it('não deve ter categorias duplicadas', () => {
      const ids = categories.map(cat => cat.id)
      const uniqueIds = [...new Set(ids)]
      expect(ids).toHaveLength(uniqueIds.length)
    })
  })

  describe('Oracle Data Structure', () => {
    it('deve ter dados para todas as categorias', () => {
      categories.forEach(category => {
        expect(oracleData).toHaveProperty(category.id)
      })
    })

    it('cada oracle deve ter propriedades obrigatórias', () => {
      Object.values(oracleData).forEach(oracle => {
        expect(oracle).toHaveProperty('title')
        expect(oracle).toHaveProperty('description')
        expect(oracle).toHaveProperty('usage')
        expect(oracle).toHaveProperty('images')

        expect(typeof oracle.title).toBe('string')
        expect(typeof oracle.description).toBe('string')
        expect(typeof oracle.usage).toBe('string')
        expect(Array.isArray(oracle.images)).toBe(true)
        
        // Alguns oráculos podem não ter services ainda (sibilla, runas)
        if (oracle.services) {
          expect(Array.isArray(oracle.services)).toBe(true)
        }
      })
    })

    it('cada image deve ter src e caption', () => {
      Object.values(oracleData).forEach(oracle => {
        oracle.images.forEach(image => {
          expect(image).toHaveProperty('src')
          expect(image).toHaveProperty('caption')
          expect(typeof image.src).toBe('string')
          expect(typeof image.caption).toBe('string')
          expect(image.src).toBeTruthy()
          expect(image.caption).toBeTruthy()
        })
      })
    })

    it('cada service deve ter propriedades obrigatórias', () => {
      Object.values(oracleData).forEach(oracle => {
        if (oracle.services) {
          oracle.services.forEach(service => {
            expect(service).toHaveProperty('iconType')
            expect(service).toHaveProperty('title')
            expect(service).toHaveProperty('price')
            expect(service).toHaveProperty('description')

            expect(typeof service.iconType).toBe('string')
            expect(typeof service.title).toBe('string')
            expect(typeof service.price).toBe('string')
            expect(typeof service.description).toBe('string')
          })
        }
      })
    })

    it('services com desconto devem ter propriedades corretas', () => {
      Object.values(oracleData).forEach(oracle => {
        if (oracle.services) {
          oracle.services.forEach(service => {
            if (service.hasDiscount) {
              expect(service).toHaveProperty('originalPrice')
              expect(typeof service.originalPrice).toBe('string')
              expect(service.originalPrice).toBeTruthy()
            }
          })
        }
      })
    })
  })

  describe('Tarot Data', () => {
    it('deve ter dados completos para tarot', () => {
      const tarot = oracleData.tarot
      
      expect(tarot.title).toBe('Tarot')
      expect(tarot.description).toContain('78 cartas')
      expect(tarot.usage).toContain('autoconhecimento')
      expect(tarot.images.length).toBeGreaterThan(0)
      expect(tarot.services.length).toBeGreaterThan(0)
    })

    it('deve ter pelo menos um serviço com desconto', () => {
      const tarot = oracleData.tarot
      const hasDiscountService = tarot.services.some(service => service.hasDiscount)
      expect(hasDiscountService).toBe(true)
    })
  })

  describe('Cigano Data', () => {
    it('deve ter dados completos para cigano', () => {
      const cigano = oracleData.cigano
      
      expect(cigano.title).toBe('Baralho Cigano')
      expect(cigano.description).toContain('36 cartas')
      expect(cigano.usage).toContain('práticas')
      expect(cigano.images.length).toBeGreaterThan(0)
      expect(cigano.services.length).toBeGreaterThan(0)
    })
  })

  describe('Data Consistency', () => {
    it('preços devem estar no formato correto', () => {
      Object.values(oracleData).forEach(oracle => {
        if (oracle.services) {
          oracle.services.forEach(service => {
            expect(service.price).toMatch(/^R\$ \d+,\d{2}$/)
            
            if (service.originalPrice) {
              expect(service.originalPrice).toMatch(/^R\$ \d+,\d{2}$/)
            }
          })
        }
      })
    })

    it('iconTypes devem ser válidos', () => {
      const validIconTypes = ['GiCardPlay', 'GiCardJoker', 'GiCrystalBall', 'GiMagicGate', 'GiCrystalShine', 'GiEclipse', 'FaHeart', 'GiHeraldicSun']
      
      Object.values(oracleData).forEach(oracle => {
        if (oracle.services) {
          oracle.services.forEach(service => {
            expect(validIconTypes).toContain(service.iconType)
          })
        }
      })
    })

    it('imagens devem ter extensões válidas', () => {
      const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg']
      
      Object.values(oracleData).forEach(oracle => {
        oracle.images.forEach(image => {
          const hasValidExtension = validExtensions.some(ext => 
            image.src.toLowerCase().endsWith(ext)
          )
          expect(hasValidExtension).toBe(true)
        })
      })
    })

    it('descriptions devem ter comprimento adequado', () => {
      Object.values(oracleData).forEach(oracle => {
        expect(oracle.description.length).toBeGreaterThan(50)
        expect(oracle.usage.length).toBeGreaterThan(50)
        
        if (oracle.services) {
          oracle.services.forEach(service => {
            expect(service.description.length).toBeGreaterThan(10)
          })
        }
      })
    })

    it('não deve ter textos vazios ou apenas espaços', () => {
      Object.values(oracleData).forEach(oracle => {
        expect(oracle.title.trim()).toBeTruthy()
        expect(oracle.description.trim()).toBeTruthy()
        expect(oracle.usage.trim()).toBeTruthy()
        
        if (oracle.services) {
          oracle.services.forEach(service => {
            expect(service.title.trim()).toBeTruthy()
            expect(service.description.trim()).toBeTruthy()
            expect(service.price.trim()).toBeTruthy()
          })
        }
        
        oracle.images.forEach(image => {
          expect(image.src.trim()).toBeTruthy()
          expect(image.caption.trim()).toBeTruthy()
        })
      })
    })
  })
})
