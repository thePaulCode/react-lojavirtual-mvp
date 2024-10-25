import axios from 'axios';

export const getProductsAxios = async()=>{

    return  [
            {
                id: 1,
                nome: 'Camiseta RW Preta',
                descricao: 'Camiseta de algodão 100%',
                fotos: ["https://onp.nyc3.digitaloceanspaces.com/camiseta-php.png", 'foto2.jpg'],
                tamanhos: [
                    {nome: 'P', quantidade_estoque: 10, preco_de: 69.90, preco_por: 49.90, principal: true},
                    {nome: 'M', quantidade_estoque: 10, preco_de: 69.90, preco_por: 49.90, principal: false}

                ]
              },
              {
                id: 2,
                nome: 'Camiseta RW Branca',
                descricao: 'Camiseta de algodão 100%',
                fotos: ["https://onp.nyc3.digitaloceanspaces.com/camiseta-js.png", 'foto2.jpg'],
                tamanhos: [
                    {nome: 'P', quantidade_estoque: 10, preco_de: 79.90, preco_por: 49.90, principal: true},
                    {nome: 'M', quantidade_estoque: 10, preco_de: 69.90, preco_por: 49.90, principal: false}

                ]
              },
              {
                id: 3,
                nome: 'Camiseta RW Babylook',
                descricao: 'Camiseta de algodão 100%',
                fotos: ["https://onp.nyc3.digitaloceanspaces.com/camiseta-node.png", 'foto2.jpg'],
                tamanhos: [
                    {nome: 'P', quantidade_estoque: 10, preco_de: 89.90, preco_por: 49.90, principal: true},
                    {nome: 'M', quantidade_estoque: 10, preco_de: 69.90, preco_por: 49.90, principal: false}

                ]
              }
        ]
    
}