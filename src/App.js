import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import Items from "./Components/items";
import Categories from "./Components/Categories";



class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems:[],
            items:[
                {
                    id: 1,
                    title: "Fender Stratocaster",
                    img:"STRAT V.jpg",
                    desc:"Опис...",
                    category:"Electro",
                    price:"2000",
                },
                {
                    id: 2,
                    title: "Gibson Les Paul",
                    img:"LP N.jpg",
                    desc:"Опис...",
                    category:"Electro",
                    price:"3000",
                },
                {
                    id: 3,
                    title: "Fender Telecaster",
                    img:"TELEC N.jpg",
                    desc:"Опис...",
                    category:"Electro",
                    price:"1500",
                },
                {
                    id: 4,
                    title: "Fender Jaguar",
                    img:"JAGUAR V.jpg",
                    desc:"Опис...",
                    category:"Electro",
                    price:"4000",
                },
                {
                    id: 5,
                    title: "Gibson Firebird",
                    img:"FB N.jpg",
                    desc:"Опис...",
                    category:"Electro",
                    price:"3200",
                },
                {
                    id: 6,
                    title: "Gibson Thunderbird",
                    img:"Без названия (1).jfif",
                    desc:"Опис...",
                    category:"Bass",
                    price:"2700",
                },
                {
                    id: 7,
                    title: "Yamaha F310",
                    img:"images.jfif",
                    desc:"Опис...",
                    category:"Acoustic",
                    price:"250",
                },
                {
                    id: 8,
                    title: "Cort A5 Plus",
                    img:"Без названия (2).jfif",
                    desc:"Опис...",
                    category:"Bass",
                    price:"1100",
                },
                {
                    id: 9,
                    title: "Ukulele",
                    img:"images (1).jfif",
                    desc:"Опис...",
                    category:"Ukulele",
                    price:"150",
                },
            ]
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }
  render() {
    return (
   <div className='wrapper'>
     <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
       <Categories chooseCategory={this.chooseCategory}/>
       <Items items={this.state.currentItems} onAdd = {this.addToOrder}/>
       <Footer />
   </div>

  );
  }

    chooseCategory(category){
        if(category === 'all'){
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el=> el.category === category)
        })
    }

    deleteOrder(id){
       this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

  addToOrder (item){
        let isInArray = false
        this.state.orders.forEach(el =>{
            if(el.id === item.id)
                isInArray = true
        })
        if(!isInArray)
            this.setState({orders:[...this.state.orders, item]})
  }

}

export default App;

