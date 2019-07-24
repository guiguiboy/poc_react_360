import * as React from 'react';

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
const State = {
    categories: undefined,
    current: undefined,
};

const listeners = new Set();

function updateComponents() {
    for (const cb of listeners.values()) {
        cb();
    }
}


export function initialize() {
    // Get the nav + products
    console.log('init');
    const categories = [
        {
            title: 'Fruits et legumes',
            key: 'fruits-legumes',
            items: [
                {
                    title: 'Pommes',
                    ean: '3000000035542',
                    image: 'shop/fruits-legumes/3000000035542.jpg',
                    description: 'This is appels',
                },
                {
                    title: 'Citron',
                    ean: '3276552310721',
                    image: 'shop/fruits-legumes/3276552310721.jpg',
                    description: 'This is lemons',
                },
                {
                    title: 'Oranges',
                    ean: '3276554564504',
                    image: 'shop/fruits-legumes/3276554564504.jpg',
                    description: 'This is oranges',
                }
            ]
        },
        {
            title: 'Viandes et poissons',
            key: 'viandes',
            items: [
                {
                    title: 'Steaks 5%MG',
                    ean: '3245415073998',
                    image: 'shop/viande/3245415073998.jpg',
                    description: 'This is meat',
                },
                {
                    title: 'Saumon',
                    ean: '3276556976145',
                    image: 'shop/viande/3276556976145.jpg',
                    description: 'This is salmon',
                },
            ]
        },
        {
            title: 'Boissons',
            key: 'boissons',
            items: [

            ]
        },
        {
            title: 'Animaux',
            key: 'animaux',
            items: [

            ]
        },
    ];

    categories.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        return -1;
    });

    State.categories = categories;
    updateComponents();
}

export function setCurrentCategory(value) {
    State.currentCategory = value;
    updateComponents();
}

export function setCurrentProduct(product) {
    State.currentProduct = product;
    updateComponents();
}

export function connect(Component) {
    return class Wrapper extends React.Component {
        state = {
            categories: State.categories,
            currentCategory: State.currentCategory,
            currentProduct: State.currentProduct
        };

        _listener = () => {
            this.setState({
                categories: State.categories,
                currentCategory: State.currentCategory,
                currentProduct: State.currentProduct
            });
        };

        componentDidMount() {
            listeners.add(this._listener);
        }

        componentWillUnmount() {
            listeners.delete(this._listener);
        }

        render() {
            return (
                <Component
                    {...this.props}
                    categories={this.state.categories}
                    currentCategory={this.state.currentCategory}
                    currentProduct={this.state.currentProduct}
                />
            );
        }
    };
}
