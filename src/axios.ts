import axios from 'axios';

export const getProducts = async ()=>{

    return {
        produtos: [
            {
                id: 1,
                nome: 'Camiseta RW',
                descricao: 'Camiseta de algodão 100%',
                fotos: ["https://onp.nyc3.digitaloceanspaces.com/camiseta-php.png", 'foto2.jpg'],
                tamanhos: [
                    {nome: 'P', quantidade_estoque: 10, preco_de: 69.90, preco_por: 49.90},
                    {nome: 'M', quantidade_estoque: 10, preco_de: 69.90, preco_por: 49.90}

                ]
              }
        ]
    }
}