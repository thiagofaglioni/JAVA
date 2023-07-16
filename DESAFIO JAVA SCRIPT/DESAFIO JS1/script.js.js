window.onload = function(){
  let produtos = [
      {descricao:'Mamão', preco:5.50},
      {descricao:'Banana', preco:3.20},
      {descricao:'Laranja', preco:1.02},
      {descricao:'Melancia', preco:4.20},
      {descricao:'Uva', preco:7.00}
  ]
let listaProdutos = document.querySelector("#produtos");
  for(let itens of produtos){
      let lis = document.createElement('li');
      for(let prod in itens){
          
          if(prod == 'descricao'){
              listaProdutos.appendChild(lis).textContent = itens[prod];
          }else{
              listaProdutos.appendChild(lis).setAttribute('class', 'itemFruta');
              listaProdutos.appendChild(lis).setAttribute('data-preco', itens[prod]);
          }
      }
  }
let cestaDoCliente = [];
  let selecionarItem = document.querySelectorAll("#produtos > li")
  let compraDoCliente = document.querySelector('#cestaDoCliente')
  let valorTotalCompra = document.querySelector("#mostraTotalCompra")
  let total=0;
  selecionarItem.forEach(function(item){
          item.addEventListener('click', function(){
if(cestaDoCliente.indexOf(item.textContent) != -1){
                  alert("Este item já está na sua lista")
              }else{
                  total += Number(item.dataset.preco)
                  cestaDoCliente.push(item.textContent);
                  let itemCesta = document.createElement('li');
                  compraDoCliente.appendChild(itemCesta).textContent = item.textContent;
                  valorTotalCompra.value = total.toFixed(2);
}
})
})
}