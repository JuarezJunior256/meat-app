import { CartItem } from './cart-item.model';

export class ShoppingCartService{
    
    //array de itens do carrinho
    items: CartItem[] = [] 

    clear(){//metodo para limpar array
    
        this.items = [];//passando um array vazio
    
    }

    //metodo para adicionar itens no carrinho
    addItem(item: any){
     
        //variavel que procura itens 
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        
        if(foundItem){
          //caso já tenho o mesmo no carrinho, soma mais um  
          foundItem.quantity = foundItem.quantity + 1
        }else{
          //se não encontra adiciona no array  
          this.items.push(new CartItem(item))
        }
    }

    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1 

        if(item.quantity === 0){
            this.removeItem(item)
        }
    }

    //metodo para remover item
    removeItem(item: any){
      
        //remover item da lista
        this.items.splice(this.items.indexOf(item), 1)
    }

    //metodo para totalizar os valores 
    total(): number{
        return this.items
                   .map(item => item.value())//mapeando só valores
                   .reduce((prev, value) => prev + value, 0)//somando os valores da lista
    }
}