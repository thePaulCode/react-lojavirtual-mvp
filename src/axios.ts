import axios from 'axios';

export const getProductsAxios = async()=>{

    return  [
            {
                id: 'a774876c-dbaa-4e24-b22c-09f897c4f8fc',
                nome: 'Camiseta RW Preta',
                descricao: 'Camiseta de algodão 100%',
                fotos: ["https://onp.nyc3.digitaloceanspaces.com/php-camiseta.png", 'foto2.jpg'],
                tamanhos: [
                    {nome: 'P', quantidade_estoque: 10, preco_de: 69.90, preco_por: 39.90, principal: true},
                    {nome: 'M', quantidade_estoque: 10, preco_de: 69.90, preco_por: 49.90, principal: false}

                ]
              },
              {
                id: '36467219-6346-4a17-94b0-cf7e6c3cf49c',
                nome: 'Camiseta RW Branca',
                descricao: 'Camiseta de algodão 100%',
                fotos: ["https://onp.nyc3.digitaloceanspaces.com/javascript-camiseta.png", 'foto2.jpg'],
                tamanhos: [
                    {nome: 'P', quantidade_estoque: 10, preco_de: 79.90, preco_por: 49.90, principal: true},
                    {nome: 'M', quantidade_estoque: 10, preco_de: 69.90, preco_por: 49.90, principal: false}

                ]
              },
              {
                id: 'daaf331f-496b-400b-a82f-7feb5596d351',
                nome: 'Camiseta RW Babylook',
                descricao: 'Camiseta de algodão 100%',
                fotos: ["https://onp.nyc3.cdn.digitaloceanspaces.com/nodejs-camiseta.png", 'foto2.jpg'],
                tamanhos: [
                    {nome: 'P', quantidade_estoque: 10, preco_de: 89.90, preco_por: 49.90, principal: true},
                    {nome: 'M', quantidade_estoque: 10, preco_de: 69.90, preco_por: 49.90, principal: false}

                ]
              },
              {
                id: 'd7f1c87e-567d-4381-8cef-7509d3b76112',
                nome: 'Camiseta RW Preta',
                descricao: 'Camiseta de algodão 100%',
                fotos: ["https://onp.nyc3.digitaloceanspaces.com/php-camiseta.png", 'foto2.jpg'],
                tamanhos: [
                    {nome: 'P', quantidade_estoque: 10, preco_de: 69.90, preco_por: 29.90, principal: true},
                    {nome: 'M', quantidade_estoque: 10, preco_de: 69.90, preco_por: 49.90, principal: false}

                ]
              }
        ]
    
}