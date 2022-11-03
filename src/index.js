import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function Ap(props) {
//   return (
//     <div class="profile">
//       <div class="description">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//           alt="User avatar"
//           class="avatar"
//         />
//         <p class="name">Petra Marica</p>
//         <p class="tag">@pmarica</p>
//         <p class="location">Salvador, Brasil</p>
//       </div>

//       <ul class="stats">
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">1000</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">2000</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">3000</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// const data = user;

// const element = (
//   <div class="profile">
//     <div class="description">
//       <img src={data.avatar} alt={data.username} class="avatar" />
//       <p class="name">{data.username}</p>
//       <p class="tag">@{data.tag}</p>
//       <p class="location">{data.location}</p>
//     </div>

//     <ul class="stats">
//       <li>
//         <span class="label">Followers</span>
//         <span class="quantity">{data.stats.followers}</span>
//       </li>
//       <li>
//         <span class="label">Views</span>
//         <span class="quantity">{data.stats.views}</span>
//       </li>
//       <li>
//         <span class="label">Likes</span>
//         <span class="quantity">{data.stats.likes}</span>
//       </li>
//     </ul>
//   </div>
// );

// console.log(Ap);

// ReactDOM.render(<Ap />, document.querySelector('#root'));
