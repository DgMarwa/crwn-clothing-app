import  { Outlet }from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
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
       imageUrl: "https://womensentrepreneurnetwork.org/wp-content/uploads/2022/12/3.png",
    },
    {
      id: 5,
      title: 'Mens',
       imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
   return (
   <div> 
    <Outlet/>
    <Directory categories= {categories} />
   </div>
   );

    };
    export default Home;