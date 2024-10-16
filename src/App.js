
import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: 'jackets',
       imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: "https://www.cornerstreet.fr/media/catalog/category/VoirTousLesProduits_1.jpg",
    },
    {
      id: 4,
      title: 'Womens',
       imageUrl: "https://www.icmi.com.au/wp-content/uploads/2022/10/Campaign-Page-Image-860-%C3%97-624px-3-1-768x557.jpg",
    },
    {
      id: 5,
      title: 'Mens',
       imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return <Directory categories={ categories } />;
   
  
    };

      
export default App;
