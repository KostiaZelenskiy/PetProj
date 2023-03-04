import React, {Component} from 'react';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'Electro',
                    name: 'Електро гітари'
                },
                {
                    key: 'Bass',
                    name: 'Бас гітари'
                },
                {
                    key: 'Acoustic',
                    name: 'Акустичні гітари'
                },
                {
                    key: 'Ukulele',
                    name: 'Укулеле'
                }

            ]
        }

    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el =>(
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
                        {el.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default Categories;